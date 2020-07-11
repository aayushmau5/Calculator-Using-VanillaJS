let history = document.querySelector('.history');
let result = document.querySelector('.result');
let btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', calculator);
}

function calculator() {
    if (this.value == 'AC') {
        history.innerHTML = '';
        result.innerHTML = '';
    } else if (this.value == '=') {
        result.innerHTML = eval(history.innerHTML);
        setTimeout(() => history.innerHTML = '', 1000);
    } else {
        history.innerHTML += this.value;
    }
}