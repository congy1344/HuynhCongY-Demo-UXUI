/** Global recipe, favorites, and meal-plan state provider. */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { mockRecipes } from '../data/mockRecipes';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useLocalStorage('gather:favorites', []);
  const [mealPlan, setMealPlan] = useLocalStorage('gather:meal-plan', {});

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRecipes(mockRecipes);
      setIsLoading(false);
    }, 800);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleFavorite = useCallback((recipeId) => {
    setFavorites((current) => current.includes(recipeId)
      ? current.filter((id) => id !== recipeId)
      : [...current, recipeId]);
  }, [setFavorites]);

  const addToMealPlan = useCallback((day, recipeId) => {
    setMealPlan((current) => ({ ...current, [day]: recipeId }));
  }, [setMealPlan]);

  const clearDay = useCallback((day) => {
    setMealPlan((current) => {
      const next = { ...current };
      delete next[day];
      return next;
    });
  }, [setMealPlan]);

  const value = useMemo(() => ({
    recipes, isLoading, favorites, mealPlan, toggleFavorite, addToMealPlan, clearDay,
  }), [recipes, isLoading, favorites, mealPlan, toggleFavorite, addToMealPlan, clearDay]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside AppProvider');
  return context;
}
