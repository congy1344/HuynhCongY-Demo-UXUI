# Gather & Graze

Gather & Graze is a polished React UX/UI demo for discovering recipes, saving favorites, and planning a week of meals. It uses mock data only, so the full experience runs locally without a backend.

## Features

- Editorial home page with a recipe of the day, live collection stats, and popular recipes
- Recipe catalog with debounced search, category filters, sorting, loading skeletons, and empty states
- Recipe details with serving-scaled ingredients, interactive cooking steps, favorites, and meal-plan actions
- Weekly meal planner with an accessible recipe-picker modal, swap, and clear-day actions
- Persistent favorites and meal plans using `localStorage`
- Persistent Vietnamese/English language switcher and light/dark color modes
- Responsive mobile navigation, keyboard focus states, reduced-motion support, and route scroll restoration

## Setup

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

## React Concepts Demonstrated

- Functional components and React Router v6 routes
- `useState` for local controls and `useReducer` for cooking-step progress
- `useEffect` for simulated loading, persistence, focus management, and scroll restoration
- `useMemo` and `useCallback` for derived data and stable shared actions
- Context for recipes, favorites, and weekly meal-plan state
- Custom `useLocalStorage`, `useDebounce`, and `useFilter` hooks
- Route-level error boundary

## Design Decisions

The interface uses a warm, editorial food-journal direction instead of a generic dashboard. Terracotta, cream, and ink colors create strong contrast; Playfair Display gives headings personality while Inter keeps controls easy to scan. Reusable tokens, soft card elevation, generous spacing, and restrained motion keep the experience coherent.

The responsive recipe grid moves from three columns to two and then one. The weekly planner remains horizontally scrollable on compact screens so each day stays readable. Modal focus trapping, Escape dismissal, visible focus rings, semantic controls, and reduced-motion support improve accessibility.

## Structure

```text
src/
├── components/
│   ├── common/       # Button, badge, modal, skeleton, empty state, error boundary
│   ├── layout/       # Responsive navbar and page wrapper
│   └── recipe/       # Recipe card and filter bar
├── context/          # Shared application state
├── data/             # Twelve mock recipes
├── hooks/            # Persistence, debounce, and filtering
├── pages/            # Five routed screens
└── styles/           # Design tokens, animation, and responsive UI
```

## Commit Stages

1. Scaffold Vite, mock recipe data, hooks, and shared state
2. Add the design system and reusable components
3. Implement discovery, recipe detail, favorites, and weekly planning flows
4. Polish accessibility, documentation, and production verification

To reset demo state, remove the `gather:favorites` and `gather:meal-plan` keys from browser `localStorage`.
