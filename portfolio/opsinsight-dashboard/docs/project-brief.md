# OpsInsight IT Automation Dashboard

## Project Overview
OpsInsight is a frontend IT automation dashboard prototype that helps IT teams review user, device, and ticket data from one place.

The current app analyzes local mock IT operations data, identifies inactive users, non-compliant devices, and high-priority support risks, then displays the results in a clean dashboard.

## Problem
IT teams often review user activity, device compliance, and support ticket status manually across spreadsheets, ticketing systems, and admin portals.

This can make it harder to quickly identify risks such as inactive accounts, non-compliant devices, and unresolved high-priority tickets.

## Solution
OpsInsight provides a dashboard where IT data can be reviewed in one place.

The current version uses a React frontend with local mock data. A future version can add a FastAPI backend, SQL database, and REST API endpoints to process uploaded or stored IT operations data.

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
- Local mock data
- CSV-style risk report export
- Simulated data upload workflow

## Future Backend Roadmap
- REST API connection
- FastAPI service layer
- SQL-backed data storage
- Backend tests

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
- TypeScript
- HTML
- CSS
- Git and GitHub
- Vite
- Tailwind CSS
- Figma planning prompts

## Portfolio Positioning
OpsInsight demonstrates my ability to combine IT operations experience with software development skills.

The project shows that I can design and build practical frontend tools using React, TypeScript, dashboard UI patterns, and automation-focused workflows.

## Success Criteria
The current frontend prototype is complete when:
- The frontend displays dashboard data
- Mock users, devices, tickets, and risks are visible
- Risk levels are calculated correctly
- The app builds successfully
- The README explains the prototype scope
- The project is added to my portfolio page
