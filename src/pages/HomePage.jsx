/** Editorial landing page highlighting recipes and quick stats. */
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/recipe/RecipeCard';
import SkeletonGrid from '../components/common/SkeletonGrid';
import { useApp } from '../context/AppContext';

export default function HomePage() {
  const { recipes, isLoading, favorites, mealPlan, toggleFavorite } = useApp();
  const featured = useMemo(() => recipes[Math.floor(Math.random() * recipes.length)], [recipes]);
  const popular = useMemo(() => [...recipes].sort((a, b) => b.rating - a.rating).slice(0, 4), [recipes]);
  const stats = [{ value: recipes.length, label: 'considered recipes' }, { value: new Set(recipes.map((item) => item.category)).size, label: 'flavorful categories' }, { value: Object.keys(mealPlan).length, label: 'meals this week' }];
  if (isLoading || !featured) return <div className="page-wrapper"><SkeletonGrid count={3} /></div>;
  return <><section className="hero"><img className="hero__image" src={featured.image} alt="" /><div className="hero__content"><span className="eyebrow">Recipe of the day</span><h1>Make room for something delicious.</h1><p>{featured.description}</p><div className="hero__actions"><Link className="button button--primary button--lg" to={`/recipes/${featured.id}`}>Cook {featured.name}</Link><Link className="button button--ghost button--lg" to="/recipes">Explore all recipes</Link></div></div></section><section className="stats" aria-label="Recipe collection summary">{stats.map((stat) => <div className="stats__item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section><section className="page-wrapper"><header className="page-header"><div><span className="eyebrow">Popular this week</span><h2>Worth gathering for</h2></div><Link className="button button--ghost" to="/recipes">Browse collection</Link></header><div className="popular-row">{popular.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} isFavorited={favorites.includes(recipe.id)} onToggleFavorite={toggleFavorite} />)}</div></section></>;
}
