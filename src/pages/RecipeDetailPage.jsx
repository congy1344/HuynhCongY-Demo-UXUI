/** Full recipe page with scalable ingredients and interactive steps. */
import { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import PageWrapper from '../components/layout/PageWrapper';
import { days } from '../data/mockRecipes';
import { useApp } from '../context/AppContext';

function stepsReducer(state, action) { return action.type === 'toggle' ? { ...state, [action.id]: !state[action.id] } : {}; }
export default function RecipeDetailPage() {
  const { id } = useParams();
  const { recipes, isLoading, favorites, toggleFavorite, addToMealPlan } = useApp();
  const recipe = recipes.find((item) => item.id === id);
  const [servings, setServings] = useState(recipe?.servings || 1);
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [done, dispatch] = useReducer(stepsReducer, {});
  useEffect(() => { if (recipe) setServings(recipe.servings); }, [recipe]);
  if (isLoading) return <PageWrapper><div className="skeleton" /></PageWrapper>;
  if (!recipe) return <PageWrapper><h1>Recipe not found.</h1><Link className="button button--primary" to="/recipes">Back to recipes</Link></PageWrapper>;
  const ratio = servings / recipe.servings;
  return <PageWrapper><Link className="eyebrow" to="/recipes">← Back to collection</Link><article className="detail"><div className="detail__visual"><img src={recipe.image} alt={recipe.name} /></div><div className="detail__intro"><Badge>{recipe.category}</Badge><h1>{recipe.name}</h1><p>{recipe.description}</p><div className="detail__meta"><span><strong>{recipe.prepTime}</strong> prep min</span><span><strong>{recipe.cookTime}</strong> cook min</span><span><strong>{recipe.rating}</strong> rating</span><span><strong>{recipe.difficulty}</strong> level</span></div><div className="detail__actions"><Button onClick={() => toggleFavorite(recipe.id)} variant={favorites.includes(recipe.id) ? 'secondary' : 'primary'}>{favorites.includes(recipe.id) ? 'Saved to favorites' : 'Add to favorites'}</Button><select className="select" value={selectedDay} onChange={(event) => setSelectedDay(event.target.value)} aria-label="Meal plan day">{days.map((day) => <option key={day}>{day}</option>)}</select><Button variant="ghost" onClick={() => addToMealPlan(selectedDay, recipe.id)}>Plan for {selectedDay}</Button></div></div></article><div className="recipe-workspace"><section className="panel"><div className="panel__header"><div><span className="eyebrow">Ingredients</span><h2>What you’ll need</h2></div><div className="serving-control"><Button size="sm" variant="ghost" disabled={servings <= 1} onClick={() => setServings((value) => value - 1)} aria-label="Decrease servings">−</Button><strong>{servings} servings</strong><Button size="sm" variant="ghost" onClick={() => setServings((value) => value + 1)} aria-label="Increase servings">+</Button></div></div><ul className="ingredient-list">{recipe.ingredients.map((ingredient) => <li key={ingredient.id}><span>{ingredient.name}</span><strong>{Number((ingredient.amount * ratio).toFixed(1))} {ingredient.unit}</strong></li>)}</ul></section><section className="panel"><span className="eyebrow">Method</span><h2>Take it step by step</h2><ol className="step-list">{recipe.steps.map((step, index) => <li className={done[step.id] ? 'step-list__item--done' : ''} key={step.id}><button onClick={() => dispatch({ type: 'toggle', id: step.id })} aria-pressed={Boolean(done[step.id])} aria-label={`Mark step ${index + 1} as ${done[step.id] ? 'not done' : 'done'}`}>{done[step.id] ? '✓' : index + 1}</button><p>{step.instruction}</p></li>)}</ol></section></div></PageWrapper>;
}
