let hint = document.createElement('h1');
document.body.append(hint);
hint.textContent = 'number baseball game';

let form = document.createElement('form');
document.body.append(form);

let input = document.createElement('input');
form.append(input);

let button = document.createElement('button');
form.append(button);
button.textContent = '입력';

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let select = [];
for (let i = 0; i < 4; i++) {
    let num = numArr.splice(Math.floor(Math.random() * (9 - i)), 1);
    select.push(num);
}
console.dir(select);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);
    console.log(input.value[0]);
    if (input.value === select.join('')) {
        hint.textContent = '홈런!';
        input.value = '';
        input.focus();
    } else {
        let strike = 0, ball = 0;
        for (let i = 0; i < 4; i++) {
            if (input.value[i] == select[i])
                strike++;
            else if (Number(select.indexOf(input.value[i])) >= 0)
                ball++;
        }
        hint.textContent = `${strike} 스트라이크 ${ball} 볼`;
    }
});