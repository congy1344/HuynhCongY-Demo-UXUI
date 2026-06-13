/** Root application routes and shell. */
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import MealPlannerPage from './pages/MealPlannerPage';
import FavoritesPage from './pages/FavoritesPage';

function ScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0 }), [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  return <><ScrollRestoration /><Navbar /><main className="app-main"><ErrorBoundary fallback={<div className="page-wrapper empty-state"><h1>Something went wrong.</h1><p>Please refresh the page and try again.</p></div>}><div className="page-transition" key={location.pathname}><Routes location={location}><Route path="/" element={<HomePage />} /><Route path="/recipes" element={<RecipesPage />} /><Route path="/recipes/:id" element={<RecipeDetailPage />} /><Route path="/meal-planner" element={<MealPlannerPage />} /><Route path="/favorites" element={<FavoritesPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></div></ErrorBoundary></main></>;
}
