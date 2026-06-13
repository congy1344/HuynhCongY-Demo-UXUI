const images = {
  chicken: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80',
  toast: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
  oats: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1200&q=80',
  bowl: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1200&q=80',
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  pasta: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
  salmon: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',
  tacos: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80',
  bites: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=1200&q=80',
  hummus: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=1200&q=80',
  cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
  pear: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1200&q=80',
};

const makeIngredients = (main, unit = 'g') => [
  { id: 'ing-1', name: main, amount: 400, unit },
  { id: 'ing-2', name: 'Extra virgin olive oil', amount: 2, unit: 'tbsp' },
  { id: 'ing-3', name: 'Sea salt', amount: 1, unit: 'tsp' },
  { id: 'ing-4', name: 'Fresh herbs', amount: 2, unit: 'tbsp' },
];

const makeSteps = (name) => [
  { id: 'step-1', instruction: `Prepare and season the ingredients for ${name}.` },
  { id: 'step-2', instruction: 'Cook gently until golden and fragrant.' },
  { id: 'step-3', instruction: 'Plate, garnish with fresh herbs, and serve.' },
];

const base = [
  ['Lemon Herb Roasted Chicken', 'Dinner', images.chicken, 35, 60, 4, 'Medium', 4.8, 'whole chicken'],
  ['Smashed Avocado Toast', 'Breakfast', images.toast, 10, 5, 2, 'Easy', 4.6, 'sourdough bread'],
  ['Berry Almond Overnight Oats', 'Breakfast', images.oats, 10, 0, 2, 'Easy', 4.5, 'rolled oats'],
  ['Golden Grain Nourish Bowl', 'Lunch', images.bowl, 25, 20, 4, 'Medium', 4.7, 'quinoa'],
  ['Citrus Fennel Salad', 'Lunch', images.salad, 15, 0, 2, 'Easy', 4.4, 'fennel'],
  ['Wild Mushroom Tagliatelle', 'Dinner', images.pasta, 30, 25, 4, 'Hard', 4.9, 'tagliatelle'],
  ['Miso Glazed Salmon', 'Dinner', images.salmon, 20, 18, 4, 'Medium', 4.8, 'salmon fillet'],
  ['Charred Corn Street Tacos', 'Lunch', images.tacos, 20, 15, 3, 'Medium', 4.6, 'corn tortillas'],
  ['Tahini Date Energy Bites', 'Snack', images.bites, 15, 0, 6, 'Easy', 4.3, 'medjool dates'],
  ['Roasted Beet Hummus', 'Snack', images.hummus, 20, 40, 5, 'Easy', 4.5, 'chickpeas'],
  ['Dark Chocolate Olive Oil Cake', 'Dessert', images.cake, 25, 45, 8, 'Hard', 4.9, 'dark chocolate'],
  ['Spiced Pear Galette', 'Dessert', images.pear, 35, 40, 6, 'Medium', 4.7, 'ripe pears'],
];

export const mockRecipes = base.map(([name, category, image, prepTime, cookTime, servings, difficulty, rating, main], index) => ({
  id: `rec-${String(index + 1).padStart(3, '0')}`,
  name, category, image, prepTime, cookTime, servings, difficulty, rating,
  description: `A vibrant, unfussy ${name.toLowerCase()} made for sharing around the table.`,
  tags: [category.toLowerCase(), difficulty.toLowerCase(), main.split(' ')[0]],
  ingredients: makeIngredients(main),
  steps: makeSteps(name),
}));

export const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];
export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
