import { useMemo } from 'react';

/** Filters and sorts recipes using the supplied controls. */
export function useFilter(recipes, search, category, sortBy) {
  return useMemo(() => {
    const normalized = search.trim().toLowerCase();
    const filtered = recipes.filter((recipe) => {
      const matchesSearch = recipe.name.toLowerCase().includes(normalized);
      const matchesCategory = category === 'All' || recipe.category === category;
      return matchesSearch && matchesCategory;
    });
    return [...filtered].sort((a, b) => {
      if (sortBy === 'prepTime') return a.prepTime - b.prepTime;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });
  }, [recipes, search, category, sortBy]);
}
