/** Search, category, and sort controls for recipes. */
import { categories } from '../../data/mockRecipes';
import Button from '../common/Button';
import { useUI } from '../../context/UIPreferencesContext';
export default function FilterBar({ search, onSearch, category, onCategory, sortBy, onSort }) {
  const { t, label } = useUI();
  return <section className="filter-bar" aria-label={t('filters')}><input className="input" value={search} onChange={(event) => onSearch(event.target.value)} placeholder={t('search')} aria-label={t('search')} /><div className="filter-bar__categories">{categories.map((item) => <Button key={item} variant={category === item ? 'primary' : 'ghost'} size="sm" onClick={() => onCategory(item)} aria-pressed={category === item}>{label(item)}</Button>)}</div><select className="select" value={sortBy} onChange={(event) => onSort(event.target.value)} aria-label={t('sort')}><option value="name">{t('nameSort')}</option><option value="prepTime">{t('prepTime')}</option><option value="rating">{t('highestRated')}</option></select></section>;
}
