/** Loading placeholders for a recipe grid. */
export default function SkeletonGrid({ count = 6 }) { return <div className="recipe-grid" aria-label="Loading recipes">{Array.from({ length: count }, (_, index) => <div className="skeleton" key={index} />)}</div>; }
