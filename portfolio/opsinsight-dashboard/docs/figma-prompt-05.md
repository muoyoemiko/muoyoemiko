You are working inside the `opsinsight-dashboard` project.

Create the Devices page using the recommended frontend architecture:

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
Create a React + TypeScript page component called `DevicesPage`.

File location:
`frontend/src/pages/DevicesPage.tsx`

Create supporting components inside the same file unless the current project already has a shared components pattern.

Required export:

* `DevicesPage`

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

The `DevicesPage` component should render:

* Page heading
* Filter bar
* Devices table

It should not recreate:

* Sidebar
* Top header
* Full dashboard shell

Page layout:

* Main content is a flex column
* Use spacing between sections
* Background should work on `bg-gray-50`

Page heading:

* Title: `Device Compliance`
* Subtext: `Track device compliance status and identify non-compliant endpoints.`

Filter bar:
Create a horizontal row of controls that wraps on small screens.

Controls:

1. Search input

   * Search icon on the left inside the input
   * Placeholder: `Search devices`
   * Filters by device name or assigned user
   * Case-insensitive
   * Width: `w-56`

2. Compliance Status dropdown

   * Options:

     * All
     * Compliant
     * Non-Compliant

3. Risk Level dropdown

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

* All three filters apply at the same time using AND logic
* Search matches against `deviceName` and `assignedUser`
* Compliance Status filter uses exact match
* Risk Level filter uses exact match
* `All` disables that specific filter

Devices table:
Create a white card container with:

* `rounded-xl`
* `border border-gray-100`
* `shadow-sm`
* `overflow-hidden`

Table columns:

* Device Name
* Assigned User
* Compliance Status
* Last Check-In
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
    `No devices match the current filters.`
  * Text color: `text-gray-400`

Device Name column rendering:

* `font-mono`
* `text-xs`
* `font-medium`
* `text-gray-800`

Compliance Status column rendering:

* Compliant:

  * `bg-green-50`
  * `text-green-700`
  * `rounded-full`
  * `px-2`
  * `py-0.5`
  * `text-xs`
  * `font-medium`
* Non-Compliant:

  * `bg-red-50`
  * `text-red-700`
  * `rounded-full`
  * `px-2`
  * `py-0.5`
  * `text-xs`
  * `font-medium`

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

Sample device data:
Use this exact mock data:

```ts id="3qx2vy"
type RiskLevel = "High" | "Medium" | "Low";
type ComplianceStatus = "Compliant" | "Non-Compliant";

type DeviceRecord = {
  deviceName: string;
  assignedUser: string;
  complianceStatus: ComplianceStatus;
  lastCheckIn: string;
  risk: RiskLevel;
};

const devices: DeviceRecord[] = [
  {
    deviceName: "LAPTOP-047",
    assignedUser: "Emily Chen",
    complianceStatus: "Non-Compliant",
    lastCheckIn: "2024-09-18",
    risk: "High",
  },
  {
    deviceName: "DESKTOP-112",
    assignedUser: "Ryan Patel",
    complianceStatus: "Non-Compliant",
    lastCheckIn: "2024-10-02",
    risk: "Medium",
  },
  {
    deviceName: "LAPTOP-023",
    assignedUser: "John Carter",
    complianceStatus: "Non-Compliant",
    lastCheckIn: "2024-09-30",
    risk: "High",
  },
  {
    deviceName: "TABLET-008",
    assignedUser: "Nina Osei",
    complianceStatus: "Compliant",
    lastCheckIn: "2024-11-03",
    risk: "Low",
  },
  {
    deviceName: "LAPTOP-091",
    assignedUser: "Mark Torres",
    complianceStatus: "Compliant",
    lastCheckIn: "2024-11-04",
    risk: "Low",
  },
  {
    deviceName: "DESKTOP-055",
    assignedUser: "Laura Green",
    complianceStatus: "Compliant",
    lastCheckIn: "2024-11-05",
    risk: "Low",
  },
  {
    deviceName: "LAPTOP-064",
    assignedUser: "David Kim",
    complianceStatus: "Non-Compliant",
    lastCheckIn: "2024-10-10",
    risk: "Medium",
  },
  {
    deviceName: "TABLET-021",
    assignedUser: "Sarah Lim",
    complianceStatus: "Compliant",
    lastCheckIn: "2024-10-25",
    risk: "Low",
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
* Design should visually match the existing `DashboardPage` and `UsersPage`

Implementation notes:

* Keep this page independent and reusable
* Make search state controlled
* Make dropdown filters controlled
* Use `useMemo` for `filteredDevices` if appropriate
* Avoid repeated markup where possible
* Make sure TypeScript union types protect risk and compliance status values
* Make sure the empty state appears when no data matches
* Avoid external packages beyond `lucide-react`

After creating the page:

1. Show the final file structure created or modified
2. Explain how to import and render `DevicesPage` inside the existing dashboard shell/main content area
3. Explain how it can later be connected to a FastAPI endpoint such as `GET /devices`
4. If `lucide-react` is missing, provide the install command:
   `npm install lucide-react`
