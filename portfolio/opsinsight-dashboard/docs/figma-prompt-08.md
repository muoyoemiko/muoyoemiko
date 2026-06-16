You are working inside the `opsinsight-dashboard` project.

Create the Upload Data page using the recommended frontend architecture:

Project architecture:

* `frontend/` contains the React app
* React + TypeScript
* Tailwind CSS for styling
* lucide-react for icons
* Component-based structure
* This page should fit inside the existing dashboard shell created for `DashboardPage`
* This page should be ready to connect later to a FastAPI upload endpoint
* Do not add backend logic yet
* Simulate upload processing for now

Task:
Create a React + TypeScript page component called `UploadPage`.

File location:
`frontend/src/pages/UploadPage.tsx`

Required export:

* `UploadPage`

Requirements:

* Use TypeScript `.tsx`
* Use Tailwind CSS only
* Use `lucide-react` for icons
* Use `useState` for drag state, uploaded file list, and success state
* Use clean, readable component structure
* Do not connect to real APIs yet
* Do not add authentication
* Do not add routing unless routing already exists

Important architecture note:
This page should be designed as the **main content page only**, not a full duplicated app shell.

Assume `Sidebar` and `PageHeader` already exist from `DashboardPage`.

The `UploadPage` component should render:

* Page heading
* Upload state
* Success state

It should not recreate:

* Sidebar
* Top header
* Full dashboard shell

Page layout:

* Main content is a flex column
* Use spacing between sections
* Max width: `max-w-2xl`
* Background should work on `bg-gray-50`

Page heading:

* Title: `Upload Data`
* Subtext: `Upload CSV files containing user, device, or ticket data for analysis.`

State variables:

* `dragging: boolean`

  * true when a file is being dragged over the drop zone
* `uploaded: string[]`

  * list of queued file names
* `success: boolean`

  * true after `Process Files` is clicked with files queued

The page has two main states:

1. Upload state
2. Success state

SUCCESS STATE:
Show this after the user clicks `Process Files` when files are queued.

Success state container:

* `bg-green-50`
* `border border-green-200`
* `rounded-xl`
* `p-6`
* Centered flex column layout
* Gap between elements

Success state content:

* Icon: `CheckCircle`

  * size: `36`
  * color: `text-green-500`
* Heading:

  * Text: `Data processed successfully`
  * Style: `font-semibold text-green-800`
* Subtext:

  * Text: `{n} file(s) analyzed. Dashboard data has been updated.`
  * `n` should equal the uploaded file count
  * Style: `text-sm text-green-600`
* Link button:

  * Text: `Upload more files`
  * Style: `text-sm text-green-700 underline`
  * On click:

    * Set success to false
    * Clear uploaded files list

UPLOAD STATE:
Show this by default when no files have been processed.

1. Drag and drop zone:

* `border-2`
* `border-dashed`
* `rounded-xl`
* `p-10`
* Flex column centered
* Gap between elements
* `cursor-pointer`

Default style:

* `border-gray-200`
* `bg-gray-50`
* `hover:border-blue-300`
* `hover:bg-blue-50/30`

Active drag style:

* `border-blue-400`
* `bg-blue-50`

Drop zone content:

* Icon: `Upload`

  * size: `32`
  * color: `text-gray-400`
* Heading:

  * Text: `Drag & drop CSV files here`
  * Style: `text-sm font-medium text-gray-700`
* Subtext:

  * Text: `or click to browse files`
  * Style: `text-xs text-gray-400`
* Accepted format note:

  * Text: `Supported: .csv, .xlsx`
  * Style: `text-xs text-gray-400`

Hidden file input:

* `id="file-input"`
* `type="file"`
* `multiple`
* `accept=".csv,.xlsx"`
* Hidden from view
* On change:

  * Append selected file names to the uploaded list
  * Do not overwrite previous queued files

Drop zone click behavior:

* Clicking the drop zone should trigger the hidden file input
* Use `document.getElementById("file-input")?.click()` or a React ref

Drag events:

* `onDragOver`

  * call `preventDefault()`
  * set dragging to true
* `onDragLeave`

  * set dragging to false
* `onDrop`

  * call `preventDefault()`
  * set dragging to false
  * Extract file names from `event.dataTransfer.files`
  * Append those names to the uploaded list

2. Queued Files List:
   Show this only when uploaded list is not empty.

Queued files container:

* `bg-white`
* `rounded-xl`
* `border border-gray-100`
* `shadow-sm`
* `p-4`
* `flex flex-col gap-2`

Section label:

* Text: `Queued Files`
* Style:

  * `text-xs`
  * `font-medium`
  * `text-gray-500`
  * `uppercase`
  * `tracking-wide`

Each file row:

* `bg-gray-50`
* `rounded-lg`
* `px-3`
* `py-2`
* Flex row
* Items center
* Justify between

Left side:

* `FileText` icon

  * size: `14`
  * color: `text-blue-500`
* File name:

  * `text-sm text-gray-700`

Right side:

* `X` icon button

  * icon size: `14`
  * default color: `text-gray-400`
  * hover color: `hover:text-red-500`
  * `transition-colors`
  * On click: remove that specific file from the uploaded list by index

3. Action buttons row:
   Show below the drop zone and queued files.

Primary button:

* Text: `Process Files`
* Styles:

  * `bg-blue-600`
  * `hover:bg-blue-700`
  * `text-white`
  * `px-5`
  * `py-2`
  * `rounded-lg`
  * `text-sm`
  * `font-medium`
  * `shadow-sm`
* Disabled when uploaded list is empty:

  * `opacity-40`
  * `cursor-not-allowed`
* On click:

  * If uploaded list is not empty, set success to true
  * Simulate processing only

Secondary button:
Show only when uploaded list is not empty.

* Text: `Clear All`
* Styles:

  * `bg-white`
  * `hover:bg-gray-50`
  * `text-gray-600`
  * `border border-gray-200`
  * `px-5`
  * `py-2`
  * `rounded-lg`
  * `text-sm`
  * `font-medium`
* On click:

  * Clear uploaded files list

4. Info box:
   Always visible in upload state.

Info box container:

* `bg-blue-50`
* `border border-blue-100`
* `rounded-xl`
* `p-4`
* `text-sm text-blue-700`

Info box heading:

* Text: `Expected file format`
* Style: `font-medium mb-1`

Bullet list:

* Style:

  * `text-xs text-blue-600`
  * `list-disc list-inside`
  * `space-y-0.5`

Bullets:

* `Users CSV: Name, Email, Department, LastLogin, Status`
* `Devices CSV: DeviceName, AssignedUser, ComplianceStatus, LastCheckin`
* `Tickets CSV: TicketID, Title, AssignedUser, Priority, Status, LastUpdated`

Design style:

* Light gray app background: `bg-gray-50`
* White surfaces for queued files card
* Blue-tinted info box at the bottom
* Green-tinted success state container
* Blue accent: `blue-600`
* Rounded corners:

  * `rounded-xl` for all cards and drop zone
  * `rounded-lg` for buttons
* Clean, professional enterprise SaaS look
* Design should visually match the existing `DashboardPage`, `UsersPage`, `DevicesPage`, `TicketsPage`, and `RiskReportPage`

Implementation notes:

* Keep this page independent and reusable
* Use a React `useRef<HTMLInputElement | null>` for the file input if possible
* Avoid repeated markup where possible
* Ensure drag-and-drop and click-to-browse both work
* Ensure selected files are appended, not overwritten
* Ensure each queued file can be removed
* Ensure Clear All works
* Ensure Process Files is disabled when there are no queued files
* Ensure Upload More Files resets success state and clears files
* Avoid external packages beyond `lucide-react`
* Do not use backend APIs yet
* Do not use Node.js filesystem APIs

After creating the page:

1. Show the final file structure created or modified
2. Explain how to import and render `UploadPage` inside the existing dashboard shell/main content area
3. Explain how it can later be connected to a FastAPI endpoint such as `POST /upload-csv`
4. Confirm that drag-and-drop, click-to-browse, remove file, clear all, and success reset work
5. If `lucide-react` is missing, provide the install command:
   `npm install lucide-react`
