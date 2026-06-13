/** Weekly meal planning page with recipe picker modal. */
import { useMemo, useState } from 'react';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import PageWrapper from '../components/layout/PageWrapper';
import { days } from '../data/mockRecipes';
import { useApp } from '../context/AppContext';
import { useUI } from '../context/UIPreferencesContext';

export default function MealPlannerPage() {
  const { recipes, mealPlan, addToMealPlan, clearDay } = useApp();
  const { t, label } = useUI();
  const [activeDay, setActiveDay] = useState(null);
  const planned = useMemo(() => days.map((day) => recipes.find((recipe) => recipe.id === mealPlan[day])).filter(Boolean), [recipes, mealPlan]);
  return <PageWrapper><header className="page-header"><div><span className="eyebrow">{t('weeklyTable')}</span><h1>{t('planTitle')}</h1><p>{t('planIntro')}</p></div></header><div className="planner-grid">{days.map((day) => { const recipe = recipes.find((item) => item.id === mealPlan[day]); return <article className="day-card" key={day}><header><span className="eyebrow">{label(day).slice(0, 3)}</span><h2>{label(day)}</h2></header>{recipe ? <div className="day-card__meal"><img src={recipe.image} alt="" /><Badge>{label(recipe.category)}</Badge><h3>{recipe.name}</h3><Button size="sm" variant="ghost" onClick={() => setActiveDay(day)}>{t('swapMeal')}</Button><Button size="sm" variant="danger" onClick={() => clearDay(day)}>{t('clearDay')}</Button></div> : <button className="day-card__empty" onClick={() => setActiveDay(day)}><span>+</span>{t('addMeal')}</button>}</article>; })}</div><section className="planner-summary"><div><span className="eyebrow">{t('weeklyRhythm')}</span><h2>{planned.length} {t('mealsPlanned')}</h2></div><p>{new Set(planned.map((recipe) => recipe.category)).size} {t('uniqueCategories')}</p></section><Modal isOpen={Boolean(activeDay)} onClose={() => setActiveDay(null)} title={`${t('chooseMeal')} ${activeDay ? label(activeDay) : ''}`}><div className="picker-list">{recipes.map((recipe) => <button key={recipe.id} onClick={() => { addToMealPlan(activeDay, recipe.id); setActiveDay(null); }}><img src={recipe.image} alt="" /><span><strong>{recipe.name}</strong><small>{label(recipe.category)} · {recipe.prepTime} {t('min')}</small></span></button>)}</div></Modal></PageWrapper>;
}
