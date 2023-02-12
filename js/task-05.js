const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputEnter);

function onInputEnter(enter) {
    
    refs.span.textContent = enter.target.value.trim().length === 0? 'Anonymous': enter.target.value.trim();
}