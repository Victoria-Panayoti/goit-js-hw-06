const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    const numberSimbol = Number(inputRef.dataset.length);
    if (event.currentTarget.value.length === numberSimbol) {
        inputRef.classList.add('valid')
    } else { inputRef.classList.add('invalid') };
  }  

