# OpsInsight IT Automation Dashboard

## Project Overview
OpsInsight is a full-stack IT automation dashboard that helps IT teams review user, device, and ticket data from one place.

The app analyzes mock IT operations data, identifies inactive users, non-compliant devices, and high-priority support risks, then displays the results in a clean dashboard.

## Problem
IT teams often review user activity, device compliance, and support ticket status manually across spreadsheets, ticketing systems, and admin portals.

This can make it harder to quickly identify risks such as inactive accounts, non-compliant devices, and unresolved high-priority tickets.

## Solution
OpsInsight provides a dashboard where IT data can be reviewed in one place.

The app will use a React frontend, Python FastAPI backend, SQL database, and REST API endpoints to process and display IT operations data.

## Target Users
- IT Operations Analysts
- Helpdesk Leads
- Systems Administrators
- Application Support Analysts
- Technical Support Engineers

## Core Features for Version 1
- Dashboard summary cards
- Users table
- Devices table
- Tickets table
- Risk report page
- Search and filtering
- REST API connection
- SQL-backed mock data
- Basic backend tests

## Risk Rules

### High Risk
- User inactive for 30+ days
- Device is non-compliant
- High-priority ticket is still open

### Medium Risk
- User inactive for 15–29 days
- Ticket is open but not high priority
- Device check-in is outdated

### Low Risk
- User is recently active
- Device is compliant
- Ticket is closed or low priority

## Tech Stack
- React
- JavaScript
- HTML
- CSS
- Python
- FastAPI
- SQLite
- REST APIs
- Git and GitHub
- Figma
- Render or Vercel for deployment

## Portfolio Positioning
OpsInsight demonstrates my ability to combine IT operations experience with software development skills.

The project shows that I can design and build practical tools using React, Python, SQL, REST APIs, and automation-focused workflows.

## Success Criteria
The project is complete when:
- The frontend displays dashboard data
- The backend provides API endpoints
- The database stores mock users, devices, and tickets
- Risk levels are calculated correctly
- The app is deployed
- The GitHub repo has a clear README
- The project is added to my portfolio page