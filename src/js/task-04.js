const valueText = document.querySelector('#value');
const decrementButtonRef = document.querySelector('[data-action = "decrement"]');
const incrementButtonRef = document.querySelector('[data-action = "increment"]');
let counterValue = 0; 
decrementButtonRef.addEventListener('click', () => {
    counterValue -= 1;
    valueText.textContent = counterValue;
})
incrementButtonRef.addEventListener('click', () => {
    counterValue += 1;
    valueText.textContent = counterValue;
})
  