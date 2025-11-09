# Reajt_Js — Study Guide for React.js

Location: `C:/Users/gufra/OneDrive/Desktop/Reajt_Js`

This README outlines a focused plan and suggested project structure for studying React.js inside this folder.

## Purpose
A personal workspace to learn React.js by building small apps and experiments. Emphasis on fundamentals, hooks, routing, state management, testing and deployment.

## Recommended folder structure
- README.md
- package.json
- .gitignore
- public/
    - index.html
- src/
    - index.js
    - App.jsx
    - components/      — reusable UI components
    - pages/           — page-level components (routes)
    - hooks/           — custom hooks
    - contexts/        — React Context providers
    - services/        — API calls and utilities
    - styles/          — CSS / SCSS / styled components
    - assets/          — images, fonts
    - tests/           — unit/integration tests
- build/ or dist/    — production output (generated)

## Getting started (commands)
- Initialize: `npm init -y`
- Install React: `npm install react react-dom`
- Development server (Create React App / Vite recommended):
    - CRA: `npx create-react-app .`
    - Vite: `npm create vite@latest . -- --template react`
- Run: `npm start` or `npm run dev`
- Build: `npm run build`
- Test: `npm test`

## Study plan (incremental)
1. Basics (1–2 days)
     - JSX, components (functional), props
     - Project: small “Hello” component tree
2. State & Events (2–3 days)
     - useState, controlled inputs, lifting state
     - Project: simple counter / todo
3. Effects & Lifecycle (2–3 days)
     - useEffect, cleanup, data fetching basics
     - Project: fetch list from public API
4. Routing & Navigation (1–2 days)
     - react-router, nested routes, params
     - Project: multi-page app with basic nav
5. Advanced Hooks & Patterns (3–5 days)
     - useMemo, useCallback, custom hooks
     - Context API for shared state
6. State Management (3–5 days)
     - Context + reducer, or Redux/RTK, Zustand
     - Project: cart or notes with persistent state
7. Testing (2–4 days)
     - Jest + React Testing Library, component tests
8. Performance & Optimization (2–3 days)
     - Code splitting, lazy, Suspense, memoization
9. Styling & Accessibility (ongoing)
     - CSS Modules / Styled Components, aria attributes
10. Deployment (1 day)
        - Vercel, Netlify, GitHub Pages

## Suggested milestones
- Day 3: Basic app with state and routing
- Day 7: App with data fetching and custom hooks
- Day 14: Production-ready small project with tests and deployment

## Resources
- Official docs: https://reactjs.org
- React Router: https://reactrouter.com
- Testing Library: https://testing-library.com
- Free tutorials: Scrimba, Kent C. Dodds posts, official React tutorial

## Tips
- Build small focused projects; iterate fast.
- Read official docs first for each topic.
- Write tests early to reinforce behavior.
- Use Git and small commits for progress tracking.
- Keep one file/component per responsibility.

Start by scaffolding the repo (CRA or Vite), create the src layout above, and follow the study plan step-by-step. Good luck.