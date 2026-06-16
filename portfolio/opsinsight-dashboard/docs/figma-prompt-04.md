You are working inside the `opsinsight-dashboard` project.

Create the Users page using the recommended frontend architecture:

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
Create a React + TypeScript page component called `UsersPage`.

File location:
`frontend/src/pages/UsersPage.tsx`

Create supporting components inside the same file unless the current project already has a shared components pattern.

Required export:

* `UsersPage`

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

The `UsersPage` component should render:

* Page heading
* Filter bar
* Users table

It should not recreate:

* Sidebar
* Top header
* Full dashboard shell

Page layout:

* Main content is a flex column
* Use spacing between sections
* Background should work on `bg-gray-50`

Page heading:

* Title: `User Risk Review`
* Subtext: `Monitor user activity and identify inactive or high-risk accounts.`

Filter bar:
Create a horizontal row of controls that wraps on small screens.

Controls:

1. Search input

   * Search icon on the left inside the input
   * Placeholder: `Search users`
   * Filters by user name or email
   * Case-insensitive
   * Width: `w-56`

2. Department dropdown

   * Options:

     * All
     * Engineering
     * HR
     * Sales
     * Finance
     * Legal
     * Marketing
     * IT Support

3. Status dropdown

   * Options:

     * All
     * Active
     * Inactive

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
* Search matches against `name` and `email`
* Department filter uses exact match
* Status filter uses exact match
* Risk Level filter uses exact match
* `All` disables that specific filter

Users table:
Create a white card container with:

* `rounded-xl`
* `border border-gray-100`
* `shadow-sm`
* `overflow-hidden`

Table columns:

* User Name
* Email
* Department
* Last Login
* Status
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
    `No users match the current filters.`
  * Text color: `text-gray-400`

Status column rendering:

* Active:

  * `bg-green-50`
  * `text-green-700`
  * `rounded-full`
  * `px-2`
  * `py-0.5`
  * `text-xs`
  * `font-medium`
* Inactive:

  * `bg-gray-100`
  * `text-gray-600`
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

Sample user data:
Use this exact mock data:

```ts
type RiskLevel = "High" | "Medium" | "Low";
type UserStatus = "Active" | "Inactive";

type UserRecord = {
  name: string;
  email: string;
  department: string;
  lastLogin: string;
  status: UserStatus;
  risk: RiskLevel;
};

const users: UserRecord[] = [
  {
    name: "John Carter",
    email: "jcarter@corp.io",
    department: "Engineering",
    lastLogin: "2024-10-01",
    status: "Inactive",
    risk: "High",
  },
  {
    name: "Sarah Lim",
    email: "slim@corp.io",
    department: "HR",
    lastLogin: "2024-10-15",
    status: "Inactive",
    risk: "Medium",
  },
  {
    name: "Mark Torres",
    email: "mtorres@corp.io",
    department: "Sales",
    lastLogin: "2024-11-02",
    status: "Active",
    risk: "Low",
  },
  {
    name: "Emily Chen",
    email: "echen@corp.io",
    department: "Finance",
    lastLogin: "2024-09-20",
    status: "Inactive",
    risk: "High",
  },
  {
    name: "Ryan Patel",
    email: "rpatel@corp.io",
    department: "Legal",
    lastLogin: "2024-11-05",
    status: "Active",
    risk: "Low",
  },
  {
    name: "Nina Osei",
    email: "nosei@corp.io",
    department: "Marketing",
    lastLogin: "2024-10-28",
    status: "Active",
    risk: "Low",
  },
  {
    name: "David Kim",
    email: "dkim@corp.io",
    department: "Engineering",
    lastLogin: "2024-10-08",
    status: "Inactive",
    risk: "Medium",
  },
  {
    name: "Laura Green",
    email: "lgreen@corp.io",
    department: "IT Support",
    lastLogin: "2024-11-01",
    status: "Active",
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
* Design should visually match the existing `DashboardPage`

Implementation notes:

* Keep this page independent and reusable
* Make search state controlled
* Make dropdown filters controlled
* Use `useMemo` for `filteredUsers` if appropriate
* Avoid repeated markup where possible
* Make sure TypeScript union types protect risk and status values
* Make sure the empty state appears when no data matches
* Avoid external packages beyond `lucide-react`

After creating the page:

1. Show the final file structure created or modified
2. Explain how to import and render `UsersPage` inside the existing dashboard shell/main content area
3. Explain how it can later be connected to a FastAPI endpoint such as `GET /users`
4. If `lucide-react` is missing, provide the install command:
   `npm install lucide-react`
