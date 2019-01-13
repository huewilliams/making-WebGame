let word = document.createElement('div');
document.body.append(word);

let form = document.createElement('form');
document.body.append(form);

let result = document.createElement('div');
document.body.append(result);

let input = document.createElement('input');
form.append(input);

let button = document.createElement('button');
button.textContent = '확인';

var first;
var second;

function rand() {
    first = Math.ceil(Math.random() * 9);
    second = Math.ceil(Math.random() * 9);
    word.textContent = `${first} * ${second} = ?`;
}

rand();

word.textContent = `${first} * ${second} = ?`;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (first * second === Number(input.value)) {
        result.textContent = 'correct!';
        rand();
        input.value = '';
    }
    else {
        result.textContent = 'uncorrect';
        input.value = '';
    }
});
form.append(button);
