/** Recipe preview card with favorite and detail actions. */
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import { useUI } from '../../context/UIPreferencesContext';
export default function RecipeCard({ recipe, isFavorited, onToggleFavorite }) {
  const { t, label } = useUI();
  return <article className="recipe-card"><img className="recipe-card__image" src={recipe.image} alt="" /><button className="recipe-card__favorite" onClick={() => onToggleFavorite(recipe.id)} aria-label={`${t(isFavorited ? 'removeFavorite' : 'addFavorite')}: ${recipe.name}`}>{isFavorited ? '♥' : '♡'}</button><div className="recipe-card__body"><div className="recipe-card__top"><Badge>{label(recipe.category)}</Badge><span className="eyebrow">{label(recipe.difficulty)}</span></div><h3 className="recipe-card__title">{recipe.name}</h3><div className="recipe-card__meta"><span>{recipe.prepTime} {t('min')}</span><span>{recipe.rating.toFixed(1)} {t('rating')}</span></div><div className="recipe-card__actions"><Link className="button button--ghost button--sm" to={`/recipes/${recipe.id}`}>{t('viewRecipe')}</Link></div></div></article>;
}
