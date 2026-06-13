/** Root application routes and shell. */
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AppErrorBoundary from './components/common/AppErrorBoundary';
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
  return <><ScrollRestoration /><Navbar /><main className="app-main"><AppErrorBoundary><div className="page-transition" key={location.pathname}><Routes location={location}><Route path="/" element={<HomePage />} /><Route path="/recipes" element={<RecipesPage />} /><Route path="/recipes/:id" element={<RecipeDetailPage />} /><Route path="/meal-planner" element={<MealPlannerPage />} /><Route path="/favorites" element={<FavoritesPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></div></AppErrorBoundary></main></>;
}
