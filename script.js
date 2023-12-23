const form = document.querySelector('.main__form');
const inputEmail = document.querySelector('.main__form--input');
const errorLabel = document.querySelector('.main__form--label')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputEmail.value === "" || validateEmail(inputEmail.value) === true) {
        showError();
    } else {
        hideError();
    }
});

function validateEmail(inputText) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailFormat)) {
        return false;
    }
    return true;
}

function showError() {
    errorLabel.classList.remove('hidden');
    inputEmail.classList.add('border--alert');
}

function hideError() {
    errorLabel.classList.add('hidden');
    inputEmail.classList.remove('border--alert');
}