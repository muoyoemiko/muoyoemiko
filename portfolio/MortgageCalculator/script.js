function validateForm()
{
  clearErrors();
  let isValid = true;
  
  const mortgageAmount = parseFloat(document.getElementById("Mortgage").value);
  const interestRate = parseFloat(document.getElementById("Interest").value) / 100;
  const loanLength = parseInt(document.getElementById("Loan").value);
  const postalCode = document.getElementById("Postal").value.trim();
  
  if (isNaN(mortgageAmount) || mortgageAmount <= 0) {
    showError("mortgageError", "Mortgage Amount must be a positive number.");
    document.getElementById("Mortgage").classList.add("is-invalid");
    isValid = false;
  } else {
    document.getElementById("Mortgage").classList.add("is-valid");
  }
  
  if (isNaN(interestRate) || interestRate <= 0 || interestRate > 1) {
    showError("interestError", "Interest Rate must be a positive percentage (e.g., 5 for 5%).");
    document.getElementById("Interest").classList.add("is-invalid");
    isValid = false;
  } else {
    document.getElementById("Interest").classList.add("is-valid");
  }
  
  if (isNaN(loanLength) || loanLength < 5 || loanLength > 30) {
    showError("LoanError", "Loan Length must be between 5-30 years.");
    document.getElementById("Loan").classList.add("is-invalid");
    isValid = false;
  } else {
    document.getElementById("Loan").classList.add("is-valid");
  }
  
  const postalRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
  if (!postalRegex.test(postalCode)) {
    showError("PostalError", "Enter a valid Canadian postal code.");
    document.getElementById("Postal").classList.add("is-invalid");
    isValid = false;
  } else {
    document.getElementById("Postal").classList.add("is-valid");
  }
  
  if (isValid) {
    // Convert the annual interest rate into a monthly rate for the standard amortization formula.
    const monthlyRate = interestRate / 12;
    const numPayments = loanLength * 12;
    const monthlyPayment = mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    document.getElementById("totalMortgage").innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    $("#totalMortgage").show();
  } else {
    $("#alertBox").show();
  }
}

function clearErrors() {
  hideAlert();
  clearFeedback();
  document.getElementById("mortgageError").innerHTML = "";
  document.getElementById("interestError").innerHTML = "";
  document.getElementById("LoanError").innerHTML = "";
  document.getElementById("PostalError").innerHTML = "";
  document.getElementById("totalMortgage").innerHTML = "";
}

function showError(elementId, message) {
  document.getElementById(elementId).innerHTML = message;
  document.getElementById(elementId).style.color = 'red';
}

function hideAlert() {
    $("#alertBox").hide();
    $("#totalMortgage").hide();
  }

  function clearFeedback() {
    if (document.getElementById("Mortgage").classList.contains("is-invalid")) {
      document.getElementById("Mortgage").classList.remove("is-invalid")
    } else if (document.getElementById("Mortgage").classList.contains("is-valid")) {
      document.getElementById("Mortgage").classList.remove("is-valid")
    }
    if (document.getElementById("Interest").classList.contains("is-invalid")) {
      document.getElementById("Interest").classList.remove("is-invalid")
    } else if (document.getElementById("Interest").classList.contains("is-valid")) {
      document.getElementById("Interest").classList.remove("is-valid")
    }
    if (document.getElementById("Loan").classList.contains("is-invalid")) {
      document.getElementById("Loan").classList.remove("is-invalid")
    } else if (document.getElementById("Loan").classList.contains("is-valid")) {
      document.getElementById("Loan").classList.remove("is-valid")
    }
    if (document.getElementById("Postal").classList.contains("is-invalid")) {
      document.getElementById("Postal").classList.remove("is-invalid")
    } else if (document.getElementById("Postal").classList.contains("is-valid")) {
      document.getElementById("Postal").classList.remove("is-valid")
    }
  }
