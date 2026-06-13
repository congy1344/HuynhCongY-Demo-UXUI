/** Friendly empty state with optional action. */
export default function EmptyState({ title, message, action }) { return <div className="empty-state"><div className="empty-state__mark" aria-hidden="true">G</div><h2>{title}</h2><p>{message}</p>{action}</div>; }
