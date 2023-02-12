const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
})
console.log(ingredientsRef);

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...ingredientsRef);
console.log(ingredientsListRef);