You are working inside the `opsinsight-dashboard` project.

Create the Tickets page using the recommended frontend architecture:

Project architecture:

* `frontend/` contains the React app
* React + TypeScript
* Tailwind CSS for styling
* lucide-react for icons
* Component-based structure
* This page should fit inside the existing dashboard shell created for `DashboardPage`
* This page should be ready to connect later to FastAPI REST endpoints
* Do not add backend logic yet
* Use mock data for now

Task:
Create a React + TypeScript page component called `TicketsPage`.

File location:
`frontend/src/pages/TicketsPage.tsx`

Create supporting components inside the same file unless the current project already has a shared components pattern.

Required export:

* `TicketsPage`

Also create or reuse:

* `RiskBadge`

Requirements:

* Use TypeScript `.tsx`
* Use Tailwind CSS only
* Use `lucide-react` for icons
* Use `useState` for search and filter state
* Use clean, readable component structure
* Use arrays/map for dropdown options and table rows
* Do not connect to real APIs yet
* Do not add authentication
* Do not add routing unless routing already exists

Important architecture note:
This page should be designed as the **main content page only**, not a full duplicated app shell.

Assume `Sidebar` and `PageHeader` already exist from `DashboardPage`.

The `TicketsPage` component should render:

* Page heading
* Filter bar
* Tickets table

It should not recreate:

* Sidebar
* Top header
* Full dashboard shell

Page layout:

* Main content is a flex column
* Use spacing between sections
* Background should work on `bg-gray-50`

Page heading:

* Title: `Ticket SLA Tracking`
* Subtext: `Monitor open tickets and escalate overdue or high-priority issues.`

Filter bar:
Create a horizontal row of controls that wraps on small screens.

Controls:

1. Search input

   * Search icon on the left inside the input
   * Placeholder: `Search tickets`
   * Filters by ticket title or ticket ID
   * Case-insensitive
   * Width: `w-56`

2. Priority dropdown

   * Options:

     * All
     * Critical
     * High
     * Medium
     * Low

3. Status dropdown

   * Options:

     * All
     * Overdue
     * Open
     * In Progress
     * Resolved

4. Risk Level dropdown

   * Options:

     * All
     * High
     * Medium
     * Low

Input and dropdown styling:

* White background
* `border-gray-200`
* `rounded-lg`
* `text-sm`
* `focus:border-blue-400`
* `focus:outline-none`
* Comfortable padding
* Clean enterprise SaaS look

Filtering logic:

* All four filters apply at the same time using AND logic
* Search matches against `ticketId` and `title`
* Priority filter uses exact match
* Status filter uses exact match
* Risk Level filter uses exact match
* `All` disables that specific filter

Tickets table:
Create a white card container with:

* `rounded-xl`
* `border border-gray-100`
* `shadow-sm`
* `overflow-hidden`

Table columns:

* Ticket ID
* Title
* Assigned User
* Priority
* Status
* Last Updated
* Risk Level

Table styling:

* Header background: `bg-gray-50`
* Header text:

  * `text-xs`
  * uppercase
  * `font-medium`
  * `text-gray-500`
  * `tracking-wide`
* Row hover:

  * `hover:bg-gray-50/50`
  * `transition-colors`
* Rows divided by:

  * `divide-y divide-gray-50`
* Empty state:

  * Show one centered row with:
    `No tickets match the current filters.`
  * Text color: `text-gray-400`

Ticket ID column rendering:

* `font-mono`
* `text-xs`
* `font-medium`
* `text-blue-600`

Title column rendering:

* `text-gray-800`
* `max-w-xs`
* `truncate`

Priority column rendering:

* Critical:

  * `bg-red-50`
  * `text-red-700`
* High:

  * `bg-orange-50`
  * `text-orange-700`
* Medium:

  * `bg-amber-50`
  * `text-amber-700`
* Low:

  * `bg-gray-100`
  * `text-gray-600`

Priority badge base styles:

* `rounded-full`
* `px-2`
* `py-0.5`
* `text-xs`
* `font-medium`
* `inline-flex`

Status column rendering:

* Overdue:

  * `bg-red-50`
  * `text-red-700`
* Open:

  * `bg-blue-50`
  * `text-blue-700`
* In Progress:

  * `bg-indigo-50`
  * `text-indigo-700`
* Resolved:

  * `bg-green-50`
  * `text-green-700`

Status badge base styles:

* `rounded-full`
* `px-2`
* `py-0.5`
* `text-xs`
* `font-medium`
* `inline-flex`

Risk badge:
Create a `RiskBadge` component.

`RiskBadge` props:

* `level: "High" | "Medium" | "Low"`

Badge styles:

* High:

  * `bg-red-100`
  * `text-red-700`
  * `border-red-200`
* Medium:

  * `bg-amber-100`
  * `text-amber-700`
  * `border-amber-200`
* Low:

  * `bg-green-100`
  * `text-green-700`
  * `border-green-200`

Badge base styles:

* `inline-flex`
* `items-center`
* `rounded-full`
* `border`
* `px-2.5`
* `py-0.5`
* `text-xs`
* `font-medium`

Sample ticket data:
Use this exact mock data:

```ts
type RiskLevel = "High" | "Medium" | "Low";
type TicketPriority = "Critical" | "High" | "Medium" | "Low";
type TicketStatus = "Overdue" | "Open" | "In Progress" | "Resolved";

type TicketRecord = {
  ticketId: string;
  title: string;
  assignedUser: string;
  priority: TicketPriority;
  status: TicketStatus;
  lastUpdated: string;
  risk: RiskLevel;
};

const tickets: TicketRecord[] = [
  {
    ticketId: "TKT-1042",
    title: "VPN access failure — exec team",
    assignedUser: "Laura Green",
    priority: "Critical",
    status: "Overdue",
    lastUpdated: "2024-11-01",
    risk: "High",
  },
  {
    ticketId: "TKT-1038",
    title: "Payroll system login error",
    assignedUser: "David Kim",
    priority: "High",
    status: "Open",
    lastUpdated: "2024-11-02",
    risk: "High",
  },
  {
    ticketId: "TKT-1035",
    title: "Email sync not working — HR dept",
    assignedUser: "Mark Torres",
    priority: "Medium",
    status: "In Progress",
    lastUpdated: "2024-11-03",
    risk: "Medium",
  },
  {
    ticketId: "TKT-1031",
    title: "Printer offline — Floor 3",
    assignedUser: "Nina Osei",
    priority: "Low",
    status: "Open",
    lastUpdated: "2024-11-04",
    risk: "Low",
  },
  {
    ticketId: "TKT-1028",
    title: "Software license expiry warning",
    assignedUser: "Ryan Patel",
    priority: "High",
    status: "Open",
    lastUpdated: "2024-10-30",
    risk: "Medium",
  },
  {
    ticketId: "TKT-1024",
    title: "MFA setup request — new hire batch",
    assignedUser: "Emily Chen",
    priority: "Medium",
    status: "Resolved",
    lastUpdated: "2024-10-28",
    risk: "Low",
  },
  {
    ticketId: "TKT-1019",
    title: "Storage quota exceeded — Legal shared drive",
    assignedUser: "John Carter",
    priority: "Medium",
    status: "In Progress",
    lastUpdated: "2024-11-01",
    risk: "Medium",
  },
  {
    ticketId: "TKT-1014",
    title: "Critical patch deployment failure",
    assignedUser: "Sarah Lim",
    priority: "Critical",
    status: "Overdue",
    lastUpdated: "2024-10-25",
    risk: "High",
  },
];
```

Design style:

* Light gray app background: `bg-gray-50`
* White surfaces for controls and table card
* Blue accent: `blue-600`
* Rounded corners:

  * `rounded-xl` for table card
  * `rounded-lg` for inputs and dropdowns
* Clean, professional enterprise SaaS look
* Design should visually match the existing `DashboardPage`, `UsersPage`, and `DevicesPage`

Implementation notes:

* Keep this page independent and reusable
* Make search state controlled
* Make dropdown filters controlled
* Use `useMemo` for `filteredTickets` if appropriate
* Avoid repeated markup where possible
* Make sure TypeScript union types protect risk, priority, and status values
* Make sure the empty state appears when no data matches
* Avoid external packages beyond `lucide-react`

After creating the page:

1. Show the final file structure created or modified
2. Explain how to import and render `TicketsPage` inside the existing dashboard shell/main content area
3. Explain how it can later be connected to a FastAPI endpoint such as `GET /tickets`
4. If `lucide-react` is missing, provide the install command:
   `npm install lucide-react`
