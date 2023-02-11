const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputEnter);

function onInputEnter(enter) {
    enter.preventDefault();
    refs.span.textContent = enter.currentTarget.value.trim();
}