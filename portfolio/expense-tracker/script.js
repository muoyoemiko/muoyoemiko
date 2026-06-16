const storageKey = "pocketBudgetTransactions";

const form = document.getElementById("transactionForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const categoryFilter = document.getElementById("categoryFilter");
const transactionList = document.getElementById("transactionList");
const emptyState = document.getElementById("emptyState");
const balance = document.getElementById("balance");
const incomeTotal = document.getElementById("incomeTotal");
const expenseTotal = document.getElementById("expenseTotal");
const categorySummary = document.getElementById("categorySummary");
const resetButton = document.getElementById("resetButton");

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

let transactions = loadTransactions();

function createTransactionId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `transaction-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

function loadTransactions() {
  const savedTransactions = localStorage.getItem(storageKey);

  if (!savedTransactions) {
    return [
      {
        id: createTransactionId(),
        description: "Paycheque",
        amount: 950,
        type: "income",
        category: "Work",
        date: new Date().toISOString()
      },
      {
        id: createTransactionId(),
        description: "Groceries",
        amount: 76.45,
        type: "expense",
        category: "Food",
        date: new Date().toISOString()
      }
    ];
  }

  try {
    return JSON.parse(savedTransactions);
  } catch {
    return [];
  }
}

function saveTransactions() {
  localStorage.setItem(storageKey, JSON.stringify(transactions));
}

function getSignedAmount(transaction) {
  return transaction.type === "income" ? transaction.amount : -transaction.amount;
}

function renderTotals() {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  balance.textContent = currencyFormatter.format(income - expenses);
  incomeTotal.textContent = currencyFormatter.format(income);
  expenseTotal.textContent = currencyFormatter.format(expenses);
}

function renderTransactions() {
  const activeCategory = categoryFilter.value;
  const visibleTransactions = transactions.filter((transaction) => (
    activeCategory === "All" || transaction.category === activeCategory
  ));

  transactionList.innerHTML = "";
  emptyState.hidden = visibleTransactions.length > 0;

  visibleTransactions.forEach((transaction) => {
    const item = document.createElement("li");
    item.className = `transaction-card ${transaction.type}`;

    const details = document.createElement("div");
    const name = document.createElement("p");
    const meta = document.createElement("p");
    const actions = document.createElement("div");
    const amount = document.createElement("span");
    const deleteButton = document.createElement("button");

    name.className = "transaction-name";
    name.textContent = transaction.description;

    meta.className = "transaction-meta";
    meta.textContent = `${transaction.category} - ${new Date(transaction.date).toLocaleDateString()}`;

    amount.className = "transaction-amount";
    amount.textContent = currencyFormatter.format(getSignedAmount(transaction));

    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      transactions = transactions.filter((item) => item.id !== transaction.id);
      saveTransactions();
      renderApp();
    });

    details.append(name, meta);
    actions.append(amount, deleteButton);
    item.append(details, actions);
    transactionList.append(item);
  });
}

function renderCategorySummary() {
  const expenseByCategory = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((totals, transaction) => {
      totals[transaction.category] = (totals[transaction.category] || 0) + transaction.amount;
      return totals;
    }, {});

  const entries = Object.entries(expenseByCategory).sort((a, b) => b[1] - a[1]);
  const maxAmount = Math.max(...entries.map(([, amount]) => amount), 1);

  categorySummary.innerHTML = "";

  if (entries.length === 0) {
    categorySummary.innerHTML = '<p class="empty-state">Expense categories will appear here.</p>';
    return;
  }

  entries.forEach(([category, amount]) => {
    const row = document.createElement("div");
    const label = document.createElement("span");
    const track = document.createElement("div");
    const fill = document.createElement("div");
    const value = document.createElement("span");

    row.className = "category-row";
    label.textContent = category;
    track.className = "bar-track";
    fill.className = "bar-fill";
    fill.style.setProperty("--bar-width", `${Math.max((amount / maxAmount) * 100, 8)}%`);
    value.textContent = currencyFormatter.format(amount);

    track.append(fill);
    row.append(label, track, value);
    categorySummary.append(row);
  });
}

function renderApp() {
  renderTotals();
  renderTransactions();
  renderCategorySummary();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const amount = Number(amountInput.value);

  if (!descriptionInput.value.trim() || Number.isNaN(amount) || amount <= 0) {
    return;
  }

  transactions.unshift({
    id: createTransactionId(),
    description: descriptionInput.value.trim(),
    amount,
    type: typeInput.value,
    category: categoryInput.value,
    date: new Date().toISOString()
  });

  saveTransactions();
  form.reset();
  typeInput.value = "expense";
  categoryInput.value = "Food";
  descriptionInput.focus();
  renderApp();
});

categoryFilter.addEventListener("change", renderTransactions);

resetButton.addEventListener("click", () => {
  transactions = [];
  saveTransactions();
  renderApp();
});

renderApp();
