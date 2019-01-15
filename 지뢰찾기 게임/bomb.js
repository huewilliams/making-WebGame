let start = document.getElementById('start');
let accurate = document.getElementById('accurate');

let random = new Random(), bomb, next, stake, cashout;

function touch(event) {
    time++;
    if(bomb === Number(event.getAttribute('num')))
    {
        event.style.backgroundColor = 'red';
        remain = '0';
        stake.textContent = 'stake : ' + remain;
    }
    else
    {
        event.style.backgroundColor = 'forestgreen';
        event.textContent = value;
        console.log(time);
        value = Math.floor(Number(input.value) / 25 * bomber + (time * 3 * bomber * 0.001 * input.value));
        remain = Number(remain) + value;
        next.textContent = 'next : ' + String(value);
        stake.textContent = 'stake : ' + String(remain);
        event.style.textAlign = 'center';
        // 클릭 후 재클릭 방지
        event.style.pointerEvents = 'none';
    }
}

form = document.getElementById('bet');
input = document.getElementById('text');

let bomber = 1; // 폭탄 개수
let time = 0; // 횟수
let value; // next 값
let remain =0; // stake 값
let cash  = 1;

form.addEventListener('submit', (event)=>{
    next = document.createElement('p');
    next.textContent = 'next :';
    accurate.append(next);

    stake = document.createElement('p');
    stake.textContent = 'stake :';
    accurate.append(stake);

    cashout = document.createElement('button');
    cashout.textContent = 'CashOut!';
    accurate.append(cashout);
    bomb = random.integer(1,25);
    start.style.pointerEvents = 'none';
    event.preventDefault();
    if(cash)
    {
        value = Math.floor(Number(input.value) / 25 * bomber + (time * 3 * bomber * 0.001 * input.value));
        next.textContent += String(value);
        remain = input.value;
        stake.textContent += remain;
        console.log(input.value);
        cash = 0;
    }
    else
    {
        alert('새 게임을 시작하기 전에 먼저 cashout 을 해야 합니다.');
    }
});