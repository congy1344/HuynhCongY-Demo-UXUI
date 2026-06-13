/** Recipe preview card with favorite and detail actions. */
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
export default function RecipeCard({ recipe, isFavorited, onToggleFavorite }) {
  return <article className="recipe-card"><img className="recipe-card__image" src={recipe.image} alt="" /><button className="recipe-card__favorite" onClick={() => onToggleFavorite(recipe.id)} aria-label={`${isFavorited ? 'Remove' : 'Add'} ${recipe.name} ${isFavorited ? 'from' : 'to'} favorites`}>{isFavorited ? '♥' : '♡'}</button><div className="recipe-card__body"><div className="recipe-card__top"><Badge>{recipe.category}</Badge><span className="eyebrow">{recipe.difficulty}</span></div><h3 className="recipe-card__title">{recipe.name}</h3><div className="recipe-card__meta"><span>{recipe.prepTime} min</span><span>{recipe.rating.toFixed(1)} rating</span></div><div className="recipe-card__actions"><Link className="button button--ghost button--sm" to={`/recipes/${recipe.id}`}>View recipe</Link></div></div></article>;
}
