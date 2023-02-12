const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('Всі поля повинні бути заповнені');
    } else {
        const Object = {
            Email: email.value,
            Password: password.value,
        }
        console.log(Object);
        event.currentTarget.reset();
    }
}