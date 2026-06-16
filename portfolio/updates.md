# Portfolio Updates

## Completed

- Step 2 hero improvements are complete in `portfolio/index.html`.
- Step 3 About section rewrite is complete in `portfolio/index.html`.
- Step 4 OpsInsight project card and local demo link are complete in `portfolio/index.html`.
- Steps 5-10 portfolio hardening tasks are complete.
- Recipe Finder has been replaced with the Mobile Expense Tracker project.
- Mortgage Calculator layout refresh is complete.
- The About image now uses a local fun placeholder asset.
- OpsInsight now uses a real dashboard screenshot instead of the hero graphic.
- OpsInsight frontend lint and production build checks pass.

## Step 2: Strengthen The Hero

Status: Complete

Update the hero section in `portfolio/index.html` so visitors immediately understand who Muoyo is, what kind of work he does, and where they can go next.

### 1. Add a clearer value statement

Current issue: the hero headline says "Hi, I'm Muoyo" and the supporting text depends entirely on the typing animation. If JavaScript fails or motion is reduced, the hero becomes too vague.

Find this section:

```html
<h1 class="display-4 fw-bold">Hi, I'm Muoyo</h1>
<p class="lead">
    <span id="typing-text"></span>
</p>
<a href="#projects" class="btn btn-primary btn-lg mt-3">View My Work</a>
```

Replace it with a stronger headline, a permanent value statement, the typing text, and multiple action buttons:

```html
<h1 class="display-4 fw-bold">Muoyo Emiko</h1>
<p class="lead mb-2">Web developer building responsive tools, business-facing apps, and user-friendly digital experiences.</p>
<p class="lead">
    <span id="typing-text">Frontend Developer</span>
</p>
<div class="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3">
    <a href="#projects" class="btn btn-primary btn-lg">View My Work</a>
    <a href="https://github.com/muoyoemiko" class="btn btn-outline-light btn-lg" target="_blank" rel="noopener">GitHub</a>
    <a href="#contact" class="btn btn-outline-light btn-lg">Contact Me</a>
</div>
```

### 2. Make the navigation match the hero

If the hero includes GitHub and Contact calls to action, make sure the navbar also gives visitors a clear path to important sections.

Add a Skills link between Projects and Contact:

```html
<li class="nav-item">
    <a class="nav-link" href="#skills">Skills</a>
</li>
```

### 3. Check reduced-motion behavior

Because the hero currently uses a typing animation, make sure the static fallback text remains visible:

```html
<span id="typing-text">Frontend Developer</span>
```

This ensures the role still appears if JavaScript is disabled or the user prefers reduced motion.

### 4. Verify before marking complete

After editing, open the page locally:

```zsh
open portfolio/index.html
```

Confirm that:

- The hero clearly shows Muoyo's name.
- The value statement is visible before any scrolling.
- The project, GitHub, and contact buttons work.
- The hero still looks good on mobile.
- The typing text has a visible fallback.

Then check the changed files:

```zsh
git status
```

### 5. Completion note

Step 2 has been completed and marked in the `Completed` section near the top of this file.

## Step 3: Rewrite The About Section

Status: Complete

Update the About section in `portfolio/index.html` so it sounds specific to Muoyo's work and gives visitors a clearer reason to trust the portfolio.

### 1. Replace generic copy

Current issue: the original About section used broad wording:

```html
<p>
    I am a passionate developer who builds responsive and user-friendly web applications.
    I enjoy solving real-world problems through clean and scalable code.
</p>
```

Replace it with more specific copy that mentions tools, project types, and design priorities:

```html
<p>
    I build responsive web experiences and practical digital tools with HTML, CSS, JavaScript, Bootstrap, and React.
    My projects focus on clear interfaces, useful interactions, and reliable workflows that help people get tasks done.
</p>
<p>
    I am continuing to grow as a developer by turning real ideas into working applications, from calculators and API-powered apps to digital operations tools.
    I care about clean structure, accessible design, and pages that feel simple to use on both desktop and mobile.
</p>
```

### 2. Verify the section reads well

After editing, confirm that:

- The About section says what Muoyo builds.
- It names relevant tools without becoming just a list of technologies.
- It connects the portfolio projects to real skills.
- It avoids vague phrases like "passionate developer" without proof.
- The copy still fits cleanly beside the profile image on desktop and above it on mobile.

### 3. Completion note

Step 3 has been completed and marked in the `Completed` section near the top of this file.

## Step 4: Finish Project Cards

Status: Complete With Remaining Polish Recommendations

Replace the placeholder third project card with the real OpsInsight Dashboard project, now copied into `portfolio/opsinsight-dashboard`.

### 1. Replace Project Three content

Current issue: the third project card used placeholder content:

```html
<img src="./Assets/codingIcon.png" class="card-img-top" alt="Screenshot of Project Three" loading="lazy">
<h5 class="card-title">Project Three</h5>
<p class="card-text">Short description of the project and the technologies used.</p>
<a href="#" class="btn btn-outline-primary mt-auto">View Project</a>
```

Replace it with OpsInsight-specific content:

```html
<img src="./Assets/opsinsight-hero.png" class="card-img-top" alt="OpsInsight IT Automation Dashboard preview" loading="lazy">
<h5 class="card-title">OpsInsight Dashboard</h5>
<p class="card-text">An IT operations dashboard concept for reviewing user, device, and ticket risks from one place using React, TypeScript, and automation-focused workflows.</p>
<a href="#" class="btn btn-outline-primary mt-auto" data-bs-toggle="modal" data-bs-target="#project3Modal">View Project</a>
```

### 2. Add the project thumbnail asset

Copy the OpsInsight hero image into the portfolio assets folder so the portfolio does not depend on a file outside this repo:

```zsh
cp ~/Documents/opsinsight-dashboard/frontend/src/assets/hero.png portfolio/Assets/opsinsight-hero.png
```

### 3. Add an OpsInsight project modal

Add a third Bootstrap modal with:

- A project title: `OpsInsight Dashboard`
- The local `opsinsight-hero.png` preview image
- A short explanation of the problem the project solves
- A short note about the tech stack and current next step

### 4. Make the local demo link work

Because the populated OpsInsight folder includes a Vite frontend, configure the build to work from a nested portfolio path:

```ts
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
```

Then rebuild:

```zsh
cd portfolio/opsinsight-dashboard/frontend
npm run build
```

Add a modal button that links to the built demo:

```html
<a href="./opsinsight-dashboard/frontend/dist/index.html" class="btn btn-primary" target="_blank" rel="noopener">Launch Demo</a>
```

### 5. Recommended follow-up for better results

These steps should be completed before treating the project as fully polished:

- Create or confirm a public GitHub repository for `opsinsight-dashboard`.
- Deploy the frontend to GitHub Pages, Vercel, Netlify, or another public host if you want a cleaner URL than the nested local demo path.
- Add a real `GitHub` button to the modal after the repository is public.
- Update `~/Documents/opsinsight-dashboard/frontend/README.md`; it currently still looks like the default Vite README.
- Add at least one real dashboard screenshot, not only the hero graphic.
- Confirm whether the backend/API exists yet. If not, describe the project as a frontend dashboard prototype until the backend is built.
- Run the project's lint command before linking it publicly:

```zsh
cd portfolio/opsinsight-dashboard/frontend
npm run lint
```

### 6. Completion note

The placeholder Project Three card has been replaced with OpsInsight content, the local static demo has been linked, and Step 4 is marked in the `Completed` section near the top of this file.

## Steps 5-10: Portfolio Hardening

Status: Complete

### 5. Fix Contact Form Before Publishing

The broken EmailJS placeholder setup was removed from `portfolio/script.js`, and the EmailJS CDN script was removed from `portfolio/index.html`.

The contact form now drafts an email to `contact@muoyoemiko.dev` with the visitor's name, email, and message. The contact section also includes direct GitHub and LinkedIn links.

### 6. Fix JavaScript Bugs

The script now guards optional elements before using them:

- `themeToggle`
- `.glass-navbar`
- `.navbar-collapse`
- particle animation visibility handlers

The duplicate out-of-scope particle visibility listener was removed.

### 7. Fix CSS Variable

`--section-spacing` is now defined in `:root`, so `.section-spacing` has a valid spacing value.

### 8. Rethink Skill Percentages

The arbitrary progress bars were replaced with skill cards that explain practical abilities:

- HTML & CSS
- JavaScript
- Bootstrap & UI Systems
- React & TypeScript

### 9. Add Missing Nav Item

The navbar includes a `Skills` link between `Projects` and `Contact`.

### 10. Clean Files Before Commit

`.DS_Store` files were removed, and a repo-level `.gitignore` now ignores:

```gitignore
.DS_Store
node_modules/
.npm-cache/
```

The old misspelled `porfolio/` folder is no longer present.

## Recent Portfolio Updates

Status: Complete

These updates were completed after the original Steps 2-10 checklist.

### 11. Replace Recipe Finder With Mobile Expense Tracker

The Recipe Finder project card and Expo Snack modal were replaced with a local Mobile Expense Tracker project.

Completed work:

- Added `portfolio/mobile-expense-tracker-proposal.txt`.
- Added the new static app folder: `portfolio/expense-tracker`.
- Created `portfolio/expense-tracker/index.html`.
- Created `portfolio/expense-tracker/styles.css`.
- Created `portfolio/expense-tracker/script.js`.
- Updated the second project card in `portfolio/index.html` to use the title `Mobile Expense Tracker`.
- Updated the second project modal with a description of the expense tracker.
- Added a `Launch Demo` button that opens `./expense-tracker/index.html`.

The Mobile Expense Tracker includes:

- Income and expense entry.
- Category selection.
- Current balance, total income, and total expense summaries.
- Recent transaction list.
- Category filtering.
- Delete and reset behavior.
- Category summary bars.
- `localStorage` persistence so transactions remain after refresh.

Validation:

```zsh
node --check portfolio/expense-tracker/script.js
```

Result: JavaScript syntax check passed.

### 12. Improve Mortgage Calculator Layout

The Mortgage Calculator app was refreshed to look more polished and easier to use.

Completed work:

- Updated `portfolio/MortgageCalculator/calculator.html`.
- Replaced the older stacked Bootstrap layout with a cleaner calculator page structure.
- Added a hero intro with the title `Mortgage Payment Calculator`.
- Created a two-panel layout with loan details on one side and payment summary on the other.
- Added visual input helpers for `$`, `%`, and `yrs`.
- Added mobile-friendly `inputmode` attributes.
- Fixed the Bootstrap navbar toggler icon class.
- Deferred the local calculator script so markup loads first.
- Rebuilt `portfolio/MortgageCalculator/styles.css` with responsive styling.
- Updated `portfolio/MortgageCalculator/changes_summary.txt` with the layout refresh details.

Validation:

```zsh
node --check portfolio/MortgageCalculator/script.js
```

Result: JavaScript syntax check passed.

### 13. Add Fun Profile Placeholder

The About section image now uses a local 500x500 placeholder asset that matches the original `Untitled.png` dimensions.

Completed work:

- Added `portfolio/Assets/fun-profile-placeholder.svg`.
- Updated the About image in `portfolio/index.html` from `./Assets/Untitled.png` to `./Assets/fun-profile-placeholder.svg`.
- Updated the image alt text to describe the placeholder.

Note:

- Social preview meta tags still point to `Untitled.png`.
- Only the visible About section image was changed.

### 14. Replace OpsInsight Hero Graphic With Dashboard Screenshot

The OpsInsight project now uses a real dashboard screenshot instead of the previous hero graphic.

Completed work:

- Confirmed the screenshot asset exists at `portfolio/Assets/opsinsight-dashboard-screenshot.png`.
- Updated the OpsInsight project card image in `portfolio/index.html`.
- Updated the OpsInsight modal preview image in `portfolio/index.html`.
- Updated image alt text to describe the screenshot.

### 15. Verify OpsInsight Frontend

The OpsInsight frontend checks were run before preparing the portfolio commit.

Validation:

```zsh
cd portfolio/opsinsight-dashboard/frontend
npm run lint
npm run build
```

Result:

- ESLint passed.
- TypeScript and Vite production build passed.
- The built demo remains available at `portfolio/opsinsight-dashboard/frontend/dist/index.html`.

## Remaining Optional Polish

These are not blockers for the completed checklist, but they would make the portfolio stronger before public sharing:

- Create or confirm a public GitHub repository for `opsinsight-dashboard`.
- Deploy OpsInsight to GitHub Pages, Vercel, Netlify, or another public host.
- Add a GitHub button to the OpsInsight modal after the repository is public.
- OpsInsight has been confirmed as a frontend dashboard prototype with local mock data; there is no backend/API implementation in this repo yet.
