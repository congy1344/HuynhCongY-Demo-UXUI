/** Search, category, and sort controls for recipes. */
import { categories } from '../../data/mockRecipes';
import Button from '../common/Button';
export default function FilterBar({ search, onSearch, category, onCategory, sortBy, onSort }) {
  return <section className="filter-bar" aria-label="Recipe filters"><input className="input" value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search recipes..." aria-label="Search recipes" /><div className="filter-bar__categories">{categories.map((item) => <Button key={item} variant={category === item ? 'primary' : 'ghost'} size="sm" onClick={() => onCategory(item)} aria-pressed={category === item}>{item}</Button>)}</div><select className="select" value={sortBy} onChange={(event) => onSort(event.target.value)} aria-label="Sort recipes"><option value="name">Name A–Z</option><option value="prepTime">Prep time</option><option value="rating">Highest rated</option></select></section>;
}
