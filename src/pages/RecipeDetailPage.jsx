/** Full recipe page with scalable ingredients and interactive steps. */
import { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import PageWrapper from '../components/layout/PageWrapper';
import { days } from '../data/mockRecipes';
import { useApp } from '../context/AppContext';
import { useUI } from '../context/UIPreferencesContext';

function stepsReducer(state, action) { return action.type === 'toggle' ? { ...state, [action.id]: !state[action.id] } : {}; }
export default function RecipeDetailPage() {
  const { id } = useParams();
  const { recipes, isLoading, favorites, toggleFavorite, addToMealPlan } = useApp();
  const { t, label } = useUI();
  const recipe = recipes.find((item) => item.id === id);
  const [servings, setServings] = useState(recipe?.servings || 1);
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [done, dispatch] = useReducer(stepsReducer, {});
  useEffect(() => { if (recipe) setServings(recipe.servings); }, [recipe]);
  if (isLoading) return <PageWrapper><div className="skeleton" /></PageWrapper>;
  if (!recipe) return <PageWrapper><h1>{t('recipeMissing')}</h1><Link className="button button--primary" to="/recipes">{t('backRecipes')}</Link></PageWrapper>;
  const ratio = servings / recipe.servings;
  return <PageWrapper><Link className="eyebrow" to="/recipes">← {t('backCollection')}</Link><article className="detail"><div className="detail__visual"><img src={recipe.image} alt={recipe.name} /></div><div className="detail__intro"><Badge>{label(recipe.category)}</Badge><h1>{recipe.name}</h1><p>{recipe.description}</p><div className="detail__meta"><span><strong>{recipe.prepTime}</strong> {t('prepMin')}</span><span><strong>{recipe.cookTime}</strong> {t('cookMin')}</span><span><strong>{recipe.rating}</strong> {t('rating')}</span><span><strong>{label(recipe.difficulty)}</strong> {t('level')}</span></div><div className="detail__actions"><Button onClick={() => toggleFavorite(recipe.id)} variant={favorites.includes(recipe.id) ? 'secondary' : 'primary'}>{t(favorites.includes(recipe.id) ? 'savedFavorite' : 'addFavorite')}</Button><select className="select" value={selectedDay} onChange={(event) => setSelectedDay(event.target.value)} aria-label={t('mealDay')}>{days.map((day) => <option key={day} value={day}>{label(day)}</option>)}</select><Button variant="ghost" onClick={() => addToMealPlan(selectedDay, recipe.id)}>{t('planFor')} {label(selectedDay)}</Button></div></div></article><div className="recipe-workspace"><section className="panel"><div className="panel__header"><div><span className="eyebrow">{t('ingredients')}</span><h2>{t('need')}</h2></div><div className="serving-control"><Button size="sm" variant="ghost" disabled={servings <= 1} onClick={() => setServings((value) => value - 1)} aria-label={t('decrease')}>−</Button><strong>{servings} {t('servings')}</strong><Button size="sm" variant="ghost" onClick={() => setServings((value) => value + 1)} aria-label={t('increase')}>+</Button></div></div><ul className="ingredient-list">{recipe.ingredients.map((ingredient) => <li key={ingredient.id}><span>{ingredient.name}</span><strong>{Number((ingredient.amount * ratio).toFixed(1))} {ingredient.unit}</strong></li>)}</ul></section><section className="panel"><span className="eyebrow">{t('method')}</span><h2>{t('stepsTitle')}</h2><ol className="step-list">{recipe.steps.map((step, index) => <li className={done[step.id] ? 'step-list__item--done' : ''} key={step.id}><button onClick={() => dispatch({ type: 'toggle', id: step.id })} aria-pressed={Boolean(done[step.id])} aria-label={`${t('markStep')} ${index + 1} ${t(done[step.id] ? 'asNotDone' : 'asDone')}`}>{done[step.id] ? '✓' : index + 1}</button><p>{step.instruction}</p></li>)}</ol></section></div></PageWrapper>;
}
