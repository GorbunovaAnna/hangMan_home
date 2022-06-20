const arrWords = ['школа', 'поезд', 'яблоко', 'пингвин', 'океан', 'метеорит', 'праздник', 'цветок', 'солнце', 'зоопарк'];
const images = ['./img/2.gif', './img/3.png', './img/4.jpg'];

function generatorNum () {
    let num = Math.floor(Math.random() * arrWords.length);
    return num;
}


function generatorWord (arr, randNum) {
    return arr[randNum];
}
const word = generatorWord(arrWords, generatorNum());
console.log(word);

function drawLines (word) {
    const wordContainer = document.querySelector('.word-wrap');
    
    for (let i = 0; i < word.length; i++) {
        const span = document.createElement('span');
        span.textContent = '_';
        span.style.fontSize = '40px';
        span.style.marginLeft = '10px'
        wordContainer.append(span);
    }
    
}
drawLines(word);

const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', checkCoincidences);

// isValidUserMeaning (meaning) {
// if (menubar === /[а-яА-Я]/.test(c)) {

// }
// }

function insertLetter () {
    const spans = document.querySelectorAll('span');
    arrSpans = Array.from(spans);
    console.log(arrSpans);
    
    
}
insertLetter();

function changeImg (images) {
    const img = document.querySelector('.img');
    img.src = images[1];
}


function checkCoincidences() {

    const index = word.indexOf(input.value);
    console.log(index);

}





