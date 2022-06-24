import { start } from "./index.js";

export function drawLines(word) {
  const wordContainer = document.querySelector(".word-wrap");

  for (let i = 0; i < word.length; i++) {
    const span = document.createElement("span");
    span.textContent = "_";
    span.style.fontSize = "40px";
    span.style.marginLeft = "10px";
    wordContainer.append(span);
  }
}

// document.getElementById("focusButton").addEventListener("click", () => {
//   document.getElementById("myTextField").focus();
// });

export function getLetters() {
  const spans = document.querySelectorAll("span");
  return Array.from(spans);
}

export function makeChance(word, images) {
  let attempts = 0;
  let spans = getLetters();

  const input = document.querySelector("input");
  // const body = document.body;
  // body.addEventListener('DOMContentLoaded', () => input.focus());
  
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const result = word.split("").reduce((acc, el, i) => {
      console.log(el, i, input.value);
      if (el == input.value) {
        acc.push(i);
      }
      return acc;
    }, []);
    console.log("result", result);

    let img;

    if (attempts < 3) {
      if (result.length === 0) {
        attempts = attempts + 1;
        img = document.querySelector(".img");
        img.src = images[attempts];
        input.value = "";
      } else {
        result.forEach((item) => {
          spans[item].textContent = input.value;

          const filled = spans.every((item) => {
            item.textContent !== "_";
          });
          if (filled) {
            let massageAboutWin = confirm(
              "Вы победили! Хотите начать игру заново?"
            );
  
            if (massageAboutWin) {
              attempts = 0;
              img = document.querySelector(".img");
              img.src = images[0];
              spans.map((item) => item.remove());
              start();
            }else {
              showTheEnd();
            }
          }
          
        });
        input.value = "";

       
      }
    } else {
      input.value = "";
      let startNewGame = confirm("Вы проиграли! Хотите начать игру заново?");
      if (startNewGame) {
        attempts = 0;
        img = document.querySelector(".img");
        img.src = images[0];
        spans.map((item) => item.remove());
        start();
      } else {
        showTheEnd();
      }
    }
  });
}

function showTheEnd() {
  const body = document.body;

  body.style.position = "relative";

  const popUpEnd = document.createElement("img");
  popUpEnd.src = "./img/end.png";
  popUpEnd.style.width = "50%";
  popUpEnd.style.position = "absolute";
  popUpEnd.style.top = "50%";
  popUpEnd.style.left = "50%";
  popUpEnd.style.transform = "-50% -50%";
  popUpEnd.style.transition = "width ";

  body.append(popUpEnd);
}
