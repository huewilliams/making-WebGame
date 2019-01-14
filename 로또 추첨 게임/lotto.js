let random = new Random();

let list = Array(45)
    .fill()
    .map((element, index) => {
        return index + 1;
    });
for (let i = 0; i < list.length; i++) {
    let rand = random.integer(0, list.length - 1);
    let temp = list[rand];
    list[rand] = list[i];
    list [i] = temp;
}

list.join('');
let select = list.splice(0, 6);
let bonus = list[list.length - 1];

let result = document.createElement('div');
document.body.appendChild(result);

function color(num) {
    let value;
    switch (Math.floor((num - 1) / 10)) {
        case 0:
            value = 'yellow';
            break;
        case 1:
            value = 'blue';
            break;
        case 2:
            value = 'red';
            break;
        case 3:
            value = 'black';
            break;
        case 4:
            value = 'green';
            break;
    }
    return value;
}
let audio = document.getElementById('play');

test = function () {
    for (let i=0; i < 6; i++) {
        (function(x) {
            setTimeout(function() {
                audio.currentTime = 0;
                audio.play();
                let num = document.createElement('div');
                num.classList.add('ball');
                //num.style.backgroundImage = 'url(./plus.png)';
                num.style.backgroundColor = color(select[x]);
                num.textContent = String(select[x]);
                result.appendChild(num);
            }, 1000*x);
        })(i);
    }
};


let button = document.createElement('button');
button.textContent = '로또 추첨하기';
button.style.backgroundImage = 'url(./plus.png)';
button.addEventListener('click', ()=>{
    test();
});
document.body.append(button);