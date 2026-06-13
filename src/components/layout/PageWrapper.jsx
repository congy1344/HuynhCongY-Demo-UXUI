/** Consistent content width and vertical rhythm for pages. */
export default function PageWrapper({ children, className = '' }) { return <div className={`page-wrapper ${className}`}>{children}</div>; }
