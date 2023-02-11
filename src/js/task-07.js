const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}
refs.input.addEventListener('input', onInputScroll);

function onInputScroll(event) {
    refs.span.style.fontSize = event.target.value + 'px';
}
console.log(refs.input);
console.log(refs.span);