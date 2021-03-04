const getRecipe = require('../get-recipe');

test('returns something', () => {
  expect(getRecipe("https://example.com/recipe").toBeDefined())
})