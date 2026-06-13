/** Accessible loading spinner. */
import { useUI } from '../../context/UIPreferencesContext';
export default function Spinner() {
  const { language } = useUI();
  return <span className="spinner" role="status" aria-label={language === 'vi' ? 'Đang tải' : 'Loading'} />;
}
