let list = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let word = list[Math.floor(Math.random() * list.length)];
console.log('끝말잇기 시작! 첫 제시어 : ',word);
while(true)
{
    let input = prompt(word);
    if(word[word.length-1] == input[0])
        word = input;
    else
        alert('땡');
}