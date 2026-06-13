/** Responsive primary application navigation. */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const links = [['/', 'Discover'], ['/recipes', 'Recipes'], ['/meal-planner', 'Meal planner'], ['/favorites', 'Favorites']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <nav className="navbar" aria-label="Primary navigation"><div className="navbar__inner"><NavLink className="navbar__brand" to="/">Gather &amp; Graze</NavLink><button className="navbar__toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>☰</button><div className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>{links.map(([to, label]) => <NavLink className="navbar__link" key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}</div></div></nav>;
}
