/** Responsive primary application navigation. */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUI } from '../../context/UIPreferencesContext';
const links = [['/', 'discover'], ['/recipes', 'recipes'], ['/meal-planner', 'planner'], ['/favorites', 'favorites']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, theme, t, toggleLanguage, toggleTheme } = useUI();
  return <nav className="navbar" aria-label={t('primaryNav')}><div className="navbar__inner"><NavLink className="navbar__brand" to="/">Gather &amp; Graze</NavLink><div className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>{links.map(([to, key]) => <NavLink className="navbar__link" key={to} to={to} onClick={() => setOpen(false)}>{t(key)}</NavLink>)}</div><div className="navbar__actions"><button className="preference-button" onClick={toggleLanguage} aria-label={t('language')}>{language === 'en' ? 'VI' : 'EN'}</button><button className="preference-button" onClick={toggleTheme} aria-label={theme === 'light' ? t('darkMode') : t('lightMode')}>{theme === 'light' ? '◐' : '☀'}</button></div><button className="navbar__toggle" onClick={() => setOpen((value) => !value)} aria-label={t('toggleNav')} aria-expanded={open}>☰</button></div></nav>;
}
