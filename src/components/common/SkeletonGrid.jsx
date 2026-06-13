/** Loading placeholders for a recipe grid. */
import { useUI } from '../../context/UIPreferencesContext';
export default function SkeletonGrid({ count = 6 }) {
  const { language } = useUI();
  return <div className="recipe-grid" aria-label={language === 'vi' ? 'Đang tải công thức' : 'Loading recipes'}>{Array.from({ length: count }, (_, index) => <div className="skeleton" key={index} />)}</div>;
}
