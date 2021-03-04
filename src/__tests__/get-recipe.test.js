const getRecipe = require('../get-recipe');

test('Returns something', () => {
  expect(getRecipe("https://example.com/recipe")).toBeDefined()
})