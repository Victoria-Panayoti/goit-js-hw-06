function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChangingBtn = document.querySelector('.change-color');
const changeableBody = document.querySelector('body');
const colorName = document.querySelector('.color');
colorChangingBtn.addEventListener('click', onColorChangingBtnClick);

function onColorChangingBtnClick() {
  // changeableBody.style.backgroundColor = getRandomHexColor();
  // colorName.textContent = `${getRandomHexColor()}`;
  // colorName.textContent = `${getRandomHexColor}`;
  const background = getRandomHexColor();
  changeableBody.style.background = background;
  colorName.textContent = `${background}`;
  console.log(changeableBody);
}