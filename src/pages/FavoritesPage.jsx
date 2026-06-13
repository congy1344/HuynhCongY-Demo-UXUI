/** Saved recipe collection page. */
import { Link } from 'react-router-dom';
import EmptyState from '../components/common/EmptyState';
import PageWrapper from '../components/layout/PageWrapper';
import RecipeCard from '../components/recipe/RecipeCard';
import { useApp } from '../context/AppContext';
export default function FavoritesPage() {
  const { recipes, favorites, toggleFavorite } = useApp();
  const saved = recipes.filter((recipe) => favorites.includes(recipe.id));
  return <PageWrapper><header className="page-header"><div><span className="eyebrow">Saved for later</span><h1>Your favorites.</h1><p>A small, considered collection of recipes worth returning to.</p></div></header>{saved.length ? <div className="recipe-grid">{saved.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} isFavorited onToggleFavorite={toggleFavorite} />)}</div> : <EmptyState title="Your shelf is waiting" message="Save recipes that catch your eye and they’ll appear here." action={<Link className="button button--primary" to="/recipes">Explore recipes</Link>} />}</PageWrapper>;
}
