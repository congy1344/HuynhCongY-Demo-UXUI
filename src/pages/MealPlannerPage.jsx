/** Weekly meal planning page with recipe picker modal. */
import { useMemo, useState } from 'react';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import PageWrapper from '../components/layout/PageWrapper';
import { days } from '../data/mockRecipes';
import { useApp } from '../context/AppContext';

export default function MealPlannerPage() {
  const { recipes, mealPlan, addToMealPlan, clearDay } = useApp();
  const [activeDay, setActiveDay] = useState(null);
  const planned = useMemo(() => days.map((day) => recipes.find((recipe) => recipe.id === mealPlan[day])).filter(Boolean), [recipes, mealPlan]);
  return <PageWrapper><header className="page-header"><div><span className="eyebrow">Your weekly table</span><h1>A plan with room to breathe.</h1><p>Choose one anchor meal for each day. Keep the rest delightfully spontaneous.</p></div></header><div className="planner-grid">{days.map((day) => { const recipe = recipes.find((item) => item.id === mealPlan[day]); return <article className="day-card" key={day}><header><span className="eyebrow">{day.slice(0, 3)}</span><h2>{day}</h2></header>{recipe ? <div className="day-card__meal"><img src={recipe.image} alt="" /><Badge>{recipe.category}</Badge><h3>{recipe.name}</h3><Button size="sm" variant="ghost" onClick={() => setActiveDay(day)}>Swap meal</Button><Button size="sm" variant="danger" onClick={() => clearDay(day)}>Clear day</Button></div> : <button className="day-card__empty" onClick={() => setActiveDay(day)}><span>+</span>Add a meal</button>}</article>; })}</div><section className="planner-summary"><div><span className="eyebrow">Weekly rhythm</span><h2>{planned.length} meals planned</h2></div><p>{new Set(planned.map((recipe) => recipe.category)).size} unique categories across your week.</p></section><Modal isOpen={Boolean(activeDay)} onClose={() => setActiveDay(null)} title={`Choose a meal for ${activeDay || ''}`}><div className="picker-list">{recipes.map((recipe) => <button key={recipe.id} onClick={() => { addToMealPlan(activeDay, recipe.id); setActiveDay(null); }}><img src={recipe.image} alt="" /><span><strong>{recipe.name}</strong><small>{recipe.category} · {recipe.prepTime} min</small></span></button>)}</div></Modal></PageWrapper>;
}
