/** Editorial landing page highlighting recipes and quick stats. */
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/recipe/RecipeCard';
import SkeletonGrid from '../components/common/SkeletonGrid';
import { useApp } from '../context/AppContext';
import { useUI } from '../context/UIPreferencesContext';

export default function HomePage() {
  const { recipes, isLoading, favorites, mealPlan, toggleFavorite } = useApp();
  const { t } = useUI();
  const featured = useMemo(() => recipes[Math.floor(Math.random() * recipes.length)], [recipes]);
  const popular = useMemo(() => [...recipes].sort((a, b) => b.rating - a.rating).slice(0, 4), [recipes]);
  const stats = [{ value: recipes.length, label: t('consideredRecipes') }, { value: new Set(recipes.map((item) => item.category)).size, label: t('flavorfulCategories') }, { value: Object.keys(mealPlan).length, label: t('mealsWeek') }];
  if (isLoading || !featured) return <div className="page-wrapper"><SkeletonGrid count={3} /></div>;
  return <><section className="hero"><img className="hero__image" src={featured.image} alt="" /><div className="hero__content"><span className="eyebrow">{t('recipeDay')}</span><h1>{t('heroTitle')}</h1><p>{featured.description}</p><div className="hero__actions"><Link className="button button--primary button--lg" to={`/recipes/${featured.id}`}>{t('cook')} {featured.name}</Link><Link className="button button--ghost button--lg" to="/recipes">{t('exploreAll')}</Link></div></div></section><section className="stats">{stats.map((stat) => <div className="stats__item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section><section className="page-wrapper"><header className="page-header"><div><span className="eyebrow">{t('popularWeek')}</span><h2>{t('worthGathering')}</h2></div><Link className="button button--ghost" to="/recipes">{t('browseCollection')}</Link></header><div className="popular-row">{popular.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} isFavorited={favorites.includes(recipe.id)} onToggleFavorite={toggleFavorite} />)}</div></section></>;
}
