let modalButtons = document.querySelector('.js-open-modal'),
overlay = document.querySelector('.overlay-modal'),
closeButtons = document.querySelector('.js-modal-close');
let modalElem = document.querySelector('.modal');
let push = document.querySelector('.push'),
profile = document.getElementById('profile'),
sample = document.getElementById('sample'),
body = document.querySelector('body');


modalButtons.addEventListener("click", (e) => {

e.preventDefault(); 


modalElem.classList.add('active'); 
overlay.classList.add('active'); 
body.classList.add('active');


});

profile.addEventListener("input", (e) => {

if (profile.validity.typeMismatch) {
    profile.setCustomValidity("Неправильный тип данных!");
    profile.classList.add('active');
}
else {
    profile.setCustomValidity("");
    profile.classList.remove('active');
}

if (profile.validity.valueMissing) {
    profile.setCustomValidity("Заполните пустые поля!");
    profile.classList.add('active');
}
else {
    profile.setCustomValidity("");
    profile.classList.remove('active');
}


});


sample.addEventListener("input", (e) => {

if (sample.validity.typeMismatch) {
    sample.setCustomValidity("Неправильный тип данных!");
    sample.classList.add('active');
}
else {
    sample.setCustomValidity("");
    sample.classList.remove('active');
}

if (sample.validity.valueMissing) {
    sample.setCustomValidity("Заполните пустые поля!");
    sample.classList.add('active');
}
else {
    sample.setCustomValidity("");
    sample.classList.remove('active');
}


});
