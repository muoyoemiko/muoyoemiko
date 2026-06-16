You are working inside the `opsinsight-dashboard` project.

Create the first frontend page for the project using the recommended architecture:

Project architecture:

* `frontend/` contains the React app
* React + TypeScript
* Tailwind CSS for styling
* lucide-react for icons
* Component-based structure
* The landing page should be reusable and ready to connect later to dashboard routing

Task:
Create a React + TypeScript landing page component called `LandingPage`.

File location:
`frontend/src/pages/LandingPage.tsx`

Also create any small reusable components if needed under:
`frontend/src/components/`

Requirements:

* Use TypeScript `.tsx`
* Use Tailwind CSS only for styling
* Use `lucide-react` for icons
* Export the component as `LandingPage`
* Component accepts two optional props:

  * `onViewDashboard?: () => void`
  * `onUploadData?: () => void`

Landing page layout:

1. Top navbar

   * Left side: Shield icon + `OpsInsight`
   * Right side: `View Dashboard` link/button
   * Clicking `View Dashboard` should call `onViewDashboard` if provided

2. Hero section

   * Centered on the page
   * Small pill badge: `IT Operations Platform`
   * H1: `OpsInsight IT Automation Dashboard`
   * Blue subtitle: `Review user, device, and ticket risks from one place.`
   * Description paragraph:
     `A full-stack dashboard that analyzes mock IT operations data and highlights inactive users, non-compliant devices, and high-priority support tickets.`
   * Two buttons side by side:

     * Primary button: `View Dashboard` with `ArrowRight` icon
     * Secondary button: `Upload Data`
   * Primary button calls `onViewDashboard`
   * Secondary button calls `onUploadData`

3. Feature card grid

   * Four cards in a responsive grid
   * Desktop: 4 columns
   * Tablet: 2 columns
   * Mobile: 1 column

Feature cards:

1. Icon: `Shield`

   * Icon color: blue
   * Title: `User Risk Review`
   * Description: `Identify inactive users and access anomalies before they become threats.`

2. Icon: `Monitor`

   * Icon color: teal
   * Title: `Device Compliance`
   * Description: `Track device check-ins and flag non-compliant endpoints instantly.`

3. Icon: `Ticket`

   * Icon color: indigo
   * Title: `Ticket SLA Tracking`
   * Description: `Monitor open tickets and escalate high-priority issues before SLA breach.`

4. Icon: `FileBarChart2`

   * Icon color: purple
   * Title: `Risk Reporting`
   * Description: `Generate a consolidated risk report across users, devices, and tickets.`

Design style:

* Light background with subtle gradient:
  `bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50`
* White card surfaces
* Light gray borders
* Subtle shadow
* Blue accent color: `blue-600`
* Cards: `rounded-xl`
* Buttons: `rounded-lg`
* Clean enterprise SaaS look
* Generous spacing
* Responsive design

Footer:
`OpsInsight IT Automation Dashboard · Portfolio Project`

Implementation notes:

* Keep the code clean and readable
* Use arrays/map for the feature cards
* Avoid hardcoding repeated card markup
* Make sure the component works even if the optional props are not passed
* Do not add backend logic yet
* Do not add routing yet unless the app already has routing installed
* Do not use external CSS files unless Tailwind is already configured
* If Tailwind is not configured, tell me what files need to be created or updated

After creating the page:

1. Show the final file structure you created or modified
2. Explain how to import and render `LandingPage` in `App.tsx`
3. Provide the exact command to install missing dependencies such as `lucide-react`
