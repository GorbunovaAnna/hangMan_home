import { drawLines, getLetters, makeChance } from "./ui.js";
import { generatorNum, generatorWord } from "./utilities.js";




const arrWords = ['школа', 'поезд', 'яблоко', 'пингвин', 'океан', 'метеорит', 'праздник', 'цветок', 'солнце', 'зоопарк'];
const images = ['./img/1.png', './img/2.png', './img/3.png', './img/4.png'];


export function start () {
    const word = generatorWord(arrWords, generatorNum(arrWords.length));
    console.log(word);
    
    drawLines(word);
    
    makeChance(word, images);
}

start();














