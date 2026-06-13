/** Searchable and filterable recipe catalog page. */
import { useState } from 'react';
import FilterBar from '../components/recipe/FilterBar';
import RecipeCard from '../components/recipe/RecipeCard';
import EmptyState from '../components/common/EmptyState';
import SkeletonGrid from '../components/common/SkeletonGrid';
import PageWrapper from '../components/layout/PageWrapper';
import { useApp } from '../context/AppContext';
import { useDebounce } from '../hooks/useDebounce';
import { useFilter } from '../hooks/useFilter';

export default function RecipesPage() {
  const { recipes, isLoading, favorites, toggleFavorite } = useApp();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const results = useFilter(recipes, useDebounce(search), category, sortBy);
  return <PageWrapper><header className="page-header"><div><span className="eyebrow">The recipe index</span><h1>Find your next favorite.</h1><p>Everyday food with enough character to earn a permanent place at your table.</p></div><span className="eyebrow">{results.length} results</span></header><FilterBar search={search} onSearch={setSearch} category={category} onCategory={setCategory} sortBy={sortBy} onSort={setSortBy} />{isLoading ? <SkeletonGrid /> : results.length ? <div className="recipe-grid">{results.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} isFavorited={favorites.includes(recipe.id)} onToggleFavorite={toggleFavorite} />)}</div> : <EmptyState title="No recipes found" message="Try a different search or clear your category filter." />}</PageWrapper>;
}
