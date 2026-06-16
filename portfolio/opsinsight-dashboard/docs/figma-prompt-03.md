You are working inside the `opsinsight-dashboard` project.

Create the Dashboard Overview page using the recommended frontend architecture:

Project architecture:

* `frontend/` contains the React app
* React + TypeScript
* Tailwind CSS for styling
* lucide-react for icons
* Component-based structure
* This page should be ready to connect later to FastAPI REST endpoints
* Do not add backend logic yet
* Use mock data for now

Task:
Create a React + TypeScript dashboard page component called `DashboardPage`.

File location:
`frontend/src/pages/DashboardPage.tsx`

Create supporting components inside the same file as named exports unless the current project already has a components folder pattern.

Required exports:

* `DashboardPage`
* `RiskBadge`
* `MetricCard`
* `Sidebar`
* `PageHeader`

Requirements:

* Use TypeScript `.tsx`
* Use Tailwind CSS only
* Use `lucide-react` for icons
* Keep the page responsive for desktop and tablet
* Use clean, readable component structure
* Use arrays/map for sidebar items, metric cards, and table rows
* Do not use external CSS files unless Tailwind is already configured
* Do not add routing unless routing already exists

Main page layout:
Create a full-height app shell with:

* Fixed left sidebar
* Top header
* Scrollable main content area on the right

Overall shell:

* `min-h-screen`
* Background: `bg-gray-50`
* Sidebar fixed on the left
* Main content offset by sidebar width
* Sidebar width: `w-56`

Sidebar requirements:

* Width: `w-56`
* Full height
* White background
* Right border
* Logo at top:

  * Small blue rounded square
  * `LayoutDashboard` icon inside
  * Text: `OpsInsight`
* Navigation items with icon + label:

  1. Dashboard — `LayoutDashboard`
  2. Users — `Users`
  3. Devices — `Monitor`
  4. Tickets — `Ticket`
  5. Risk Report — `FileBarChart2`
  6. Upload Data — `Upload`
* Active nav item:

  * Background: `bg-blue-50`
  * Text: `text-blue-700`
* Inactive nav items:

  * Text: `text-gray-600`
  * Hover: `hover:bg-gray-50`
* `Sidebar` props:

  * `currentPage: string`
  * `onNavigate?: (page: string) => void`

Top header requirements:

* Height: `h-14`
* White background
* Bottom border
* Left side title: `OpsInsight Dashboard`
* Right side:

  * Search icon button
  * Bell icon button with a small red dot indicator
  * Avatar circle with initials `IT`
* Use `Search` and `Bell` icons from `lucide-react`
* `PageHeader` props:

  * `title: string`

Main content requirements:

* Page heading: `Dashboard Overview`
* Subtext: `Summary of IT operations risk indicators.`
* Use spacing that feels like a professional enterprise SaaS dashboard

Summary metric cards:
Create a horizontal responsive row/grid of 5 cards.

Each card:

* White background
* `rounded-xl`
* Border
* `shadow-sm`
* Label text
* Large number value
* Optional blue left border when `accent` is true

Metric cards:

1. Label: `Total Users`, Value: `128`, accent: false
2. Label: `Inactive Users`, Value: `14`, accent: true
3. Label: `Non-Compliant Devices`, Value: `9`, accent: true
4. Label: `Open Tickets`, Value: `23`, accent: true
5. Label: `High Risk Items`, Value: `7`, accent: true

`MetricCard` props:

* `label: string`
* `value: number`
* `accent?: boolean`
* `icon?: React.ReactNode`

Recent Risk Items table:
Create a white card container with:

* `rounded-xl`
* Border
* `shadow-sm`
* Table title: `Recent Risk Items`

Table columns:

* Name
* Type
* Department
* Status
* Risk Level
* Suggested Action

Table styling:

* Header background: `bg-gray-50`
* Header text: uppercase, `text-xs`, `text-gray-500`
* Row hover: light gray background
* Dividers: `divide-y divide-gray-50`
* Clean padding and readable spacing

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

* Inline-flex
* Rounded-full
* Border
* Small text
* Medium font weight
* Horizontal padding

Sample table data:
Use this exact mock data:

```ts
const recentRiskItems = [
  {
    name: "John Carter",
    type: "User",
    department: "Engineering",
    status: "Inactive",
    risk: "High",
    suggestedAction: "Disable account",
  },
  {
    name: "LAPTOP-047",
    type: "Device",
    department: "Finance",
    status: "Non-Compliant",
    risk: "High",
    suggestedAction: "Force compliance scan",
  },
  {
    name: "TKT-1042",
    type: "Ticket",
    department: "IT Support",
    status: "Overdue",
    risk: "High",
    suggestedAction: "Escalate immediately",
  },
  {
    name: "Sarah Lim",
    type: "User",
    department: "HR",
    status: "Inactive",
    risk: "Medium",
    suggestedAction: "Send re-activation notice",
  },
  {
    name: "DESKTOP-112",
    type: "Device",
    department: "Legal",
    status: "Non-Compliant",
    risk: "Medium",
    suggestedAction: "Schedule update",
  },
  {
    name: "TKT-1038",
    type: "Ticket",
    department: "Finance",
    status: "Open",
    risk: "Medium",
    suggestedAction: "Assign to L2 support",
  },
  {
    name: "Mark Torres",
    type: "User",
    department: "Sales",
    status: "Active",
    risk: "Low",
    suggestedAction: "Monitor",
  },
  {
    name: "TABLET-008",
    type: "Device",
    department: "Marketing",
    status: "Compliant",
    risk: "Low",
    suggestedAction: "No action needed",
  },
] as const;
```

Design style:

* Light gray page background: `bg-gray-50`
* White surfaces for sidebar, header, cards, and table
* Blue accent color: `blue-600`
* Active navigation uses blue styling
* Cards use `rounded-xl`
* Clean enterprise SaaS look
* Make the design consistent with the existing `LandingPage`

Implementation notes:

* Keep the code clean and readable
* Type the risk levels properly using TypeScript union types
* Avoid repeating table row markup manually
* Make `onNavigate` optional
* If `onNavigate` is not provided, nav clicks should not break
* Do not connect to real APIs yet
* Do not add authentication
* Do not add charts yet
* Do not add CSV upload yet

After creating the page:

1. Show the final file structure created or modified
2. Explain how to import and render `DashboardPage` in `App.tsx`
3. If `lucide-react` is missing, provide the install command:
   `npm install lucide-react`
4. If Tailwind CSS is not configured, list the exact files that need to be added or updated
