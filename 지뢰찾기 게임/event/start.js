let random = new Random();
let start = document.getElementById('start');
let accurate = document.getElementById('accurate');

start.addEventListener('click', (event)=>{
    event.preventDefault();
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
});