You are working inside the `opsinsight-dashboard` project.

Create the Risk Report page using the recommended frontend architecture:

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
Create a React + TypeScript page component called `RiskReportPage`.

File location:
`frontend/src/pages/RiskReportPage.tsx`

Create supporting components inside the same file unless the current project already has a shared components pattern.

Required export:

* `RiskReportPage`

Also create or reuse:

* `RiskBadge`

Requirements:

* Use TypeScript `.tsx`
* Use Tailwind CSS only
* Use `lucide-react` for icons
* Use clean, readable component structure
* Use arrays/map for summary cards and table rows
* Do not connect to real APIs yet
* Do not add authentication
* Do not add routing unless routing already exists

Important architecture note:
This page should be designed as the **main content page only**, not a full duplicated app shell.

Assume `Sidebar` and `PageHeader` already exist from `DashboardPage`.

The `RiskReportPage` component should render:

* Page heading row
* Export Report button
* Risk summary section
* Risk items table

It should not recreate:

* Sidebar
* Top header
* Full dashboard shell

Page layout:

* Main content is a flex column
* Use spacing between sections
* Background should work on `bg-gray-50`

Page heading row:
Left side:

* Title: `Risk Report`
* Subtext: `Consolidated risk assessment across users, devices, and tickets.`

Right side:

* Primary button: `Export Report`
* Icon: `Download` icon on the left
* Button styles:

  * `bg-blue-600`
  * `hover:bg-blue-700`
  * `text-white`
  * `px-4`
  * `py-2`
  * `rounded-lg`
  * `text-sm`
  * `font-medium`
  * `shadow-sm`
* On click, generate and download a CSV file named:
  `opsinsight-risk-report.csv`

CSV export requirements:

* CSV columns:

  * Item
  * Category
  * Risk Level
  * Reason
  * Suggested Action
* CSV rows:

  * All 15 risk items from the mock data
* Build a 2D array: header row + one row per risk item
* Wrap each cell in double quotes
* Escape double quotes inside cell values by replacing `"` with `""`
* Join cells with commas
* Join rows with newline
* Create a Blob with type `text/csv;charset=utf-8`
* Use `URL.createObjectURL` to generate a download link
* Programmatically click the link
* Revoke the object URL after download

Risk summary section:
Create 3 cards in a responsive row/grid:

* Desktop: 3 columns
* Mobile: 1 column

Each card shows:

* Icon
* Large count
* Description

Counts must be dynamically computed from the mock data:

* High count = number of High risk items
* Medium count = number of Medium risk items
* Low count = number of Low risk items

High Risk card:

* Background: `bg-red-50`
* Border: `border-red-100`
* `rounded-xl`
* `p-4`
* Icon: `AlertTriangle`
* Icon style: `text-red-500`
* Icon size: `20`
* Count style: `text-red-700`
* Description:
  `High Risk — Immediate action required. These items pose a critical threat to security or operations.`
* Description style: `text-red-600 text-xs`

Medium Risk card:

* Background: `bg-amber-50`
* Border: `border-amber-100`
* `rounded-xl`
* `p-4`
* Icon: `AlertCircle`
* Icon style: `text-amber-500`
* Icon size: `20`
* Count style: `text-amber-700`
* Description:
  `Medium Risk — Monitor and address within 7 days. Potential to escalate if ignored.`
* Description style: `text-amber-600 text-xs`

Low Risk card:

* Background: `bg-green-50`
* Border: `border-green-100`
* `rounded-xl`
* `p-4`
* Icon: `CheckCircle`
* Icon style: `text-green-500`
* Icon size: `20`
* Count style: `text-green-700`
* Description:
  `Low Risk — Routine monitoring. No immediate action required.`
* Description style: `text-green-600 text-xs`

Risk items table:
Create a white card container with:

* `rounded-xl`
* `border border-gray-100`
* `shadow-sm`
* `overflow-hidden`

Table columns:

* Item
* Category
* Risk Level
* Reason
* Suggested Action

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

Sample risk data:
Use this exact mock data:

```ts
type RiskLevel = "High" | "Medium" | "Low";
type RiskCategory = "User" | "Device" | "Ticket";

type RiskItem = {
  item: string;
  category: RiskCategory;
  risk: RiskLevel;
  reason: string;
  suggestedAction: string;
};

const riskItems: RiskItem[] = [
  {
    item: "John Carter",
    category: "User",
    risk: "High",
    reason: "No login in 45+ days",
    suggestedAction: "Disable account immediately",
  },
  {
    item: "Emily Chen",
    category: "User",
    risk: "High",
    reason: "No login in 52 days, Finance dept access",
    suggestedAction: "Disable account and audit access",
  },
  {
    item: "LAPTOP-047",
    category: "Device",
    risk: "High",
    reason: "Non-compliant, no check-in for 53 days",
    suggestedAction: "Force compliance scan or decommission",
  },
  {
    item: "LAPTOP-023",
    category: "Device",
    risk: "High",
    reason: "Non-compliant, assigned to inactive user",
    suggestedAction: "Revoke network access",
  },
  {
    item: "TKT-1042",
    category: "Ticket",
    risk: "High",
    reason: "Overdue, critical priority, exec impact",
    suggestedAction: "Escalate to L3 and management",
  },
  {
    item: "TKT-1014",
    category: "Ticket",
    risk: "High",
    reason: "Critical patch deployment failure, overdue",
    suggestedAction: "Emergency response team involvement",
  },
  {
    item: "Sarah Lim",
    category: "User",
    risk: "Medium",
    reason: "Inactive for 27 days, HR dept",
    suggestedAction: "Send re-activation notice",
  },
  {
    item: "David Kim",
    category: "User",
    risk: "Medium",
    reason: "Inactive for 34 days",
    suggestedAction: "Send re-activation notice",
  },
  {
    item: "DESKTOP-112",
    category: "Device",
    risk: "Medium",
    reason: "Non-compliant, patch overdue by 30 days",
    suggestedAction: "Schedule compliance update",
  },
  {
    item: "LAPTOP-064",
    category: "Device",
    risk: "Medium",
    reason: "Non-compliant, last check-in 26 days ago",
    suggestedAction: "Force software update",
  },
  {
    item: "TKT-1028",
    category: "Ticket",
    risk: "Medium",
    reason: "License expiry approaching, unresolved",
    suggestedAction: "Assign and prioritize renewal",
  },
  {
    item: "TKT-1019",
    category: "Ticket",
    risk: "Medium",
    reason: "Storage quota critical, blocking operations",
    suggestedAction: "Expand quota or archive data",
  },
  {
    item: "Mark Torres",
    category: "User",
    risk: "Low",
    reason: "Active, recent login",
    suggestedAction: "No action required",
  },
  {
    item: "TABLET-008",
    category: "Device",
    risk: "Low",
    reason: "Compliant, regular check-ins",
    suggestedAction: "No action required",
  },
  {
    item: "TKT-1031",
    category: "Ticket",
    risk: "Low",
    reason: "Low priority, non-blocking",
    suggestedAction: "Schedule routine maintenance",
  },
];
```

Design style:

* Light gray app background: `bg-gray-50`
* White surfaces for the table card
* Colored tinted surfaces for the risk summary cards
* Blue accent: `blue-600`
* Rounded corners:

  * `rounded-xl` for cards and table
  * `rounded-lg` for button
* Clean, professional enterprise SaaS look
* Design should visually match the existing `DashboardPage`, `UsersPage`, `DevicesPage`, and `TicketsPage`

Implementation notes:

* Keep this page independent and reusable
* Use `useMemo` for risk counts if appropriate
* Build export logic in a small helper function inside the file
* Make sure TypeScript union types protect risk and category values
* Avoid repeated markup where possible
* Avoid external packages beyond `lucide-react`
* Ensure the CSV export works in the browser
* Do not use Node.js filesystem APIs
* Do not use backend APIs yet

After creating the page:

1. Show the final file structure created or modified
2. Explain how to import and render `RiskReportPage` inside the existing dashboard shell/main content area
3. Explain how it can later be connected to a FastAPI endpoint such as `GET /risks`
4. Confirm that the CSV export downloads `opsinsight-risk-report.csv`
5. If `lucide-react` is missing, provide the install command:
   `npm install lucide-react`
