/** Reusable action button with visual variants. */
export default function Button({ children, variant = 'primary', size = 'md', loading = false, className = '', ...props }) {
  return <button className={`button button--${variant} button--${size} ${className}`} disabled={loading || props.disabled} {...props}>{loading && <span className="spinner" aria-hidden="true" />}{children}</button>;
}
