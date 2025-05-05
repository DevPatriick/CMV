import Accounts from './modelCompany';
import Category from './modelCategory';
import Ingredients from './modelIngredients';
import CMV_Ingredients from './modelCMVIngredients';

// Ingredients -> Category
Ingredients.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});

// Ingredients -> CMV_Ingredients
Ingredients.hasMany(CMV_Ingredients, {
  foreignKey: 'ingredients_id',
  as: 'history_ingredients',
});

// CMV_Ingredients -> Ingredients
CMV_Ingredients.belongsTo(Ingredients, {
  foreignKey: 'ingredients_id',
  as: 'ingredients',
});

// Category -> Account
Category.belongsTo(Accounts, {
  foreignKey: 'account_id',
  as: 'accounts',
});

// Account -> Category
Accounts.hasMany(Category, {
  foreignKey: 'account_id',
  as: 'categories_ingredients',
});

// Category -> Ingredients
Category.hasMany(Ingredients, {
  foreignKey: 'category_id',
  as: 'ingredients',
});
