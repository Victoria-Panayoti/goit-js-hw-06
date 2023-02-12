const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    const numberSymbol = Number(inputRef.dataset.length);
    if (event.currentTarget.value.length === numberSymbol) {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')
    } else { inputRef.classList.add('invalid') };

  }  

