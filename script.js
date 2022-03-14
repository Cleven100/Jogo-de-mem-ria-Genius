let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

let light = (element, number) => {
  number *= 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, tempo - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length === order.length) {
    alert(`Pontuação: ${score}\n você acertou! Iniciando próximo nível!!`);
    nextLevel();
  }
};

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");

  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  },250);

  
};

let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else {
    return blue;
  }
};

let nextLevel = () => {
  score++;
  shuffleOrder();
};

let gameOver = () => {
  alert(
    `Pontuação: ${score}!\n você perdeu o jogo!\n Clique em OK para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

let playGame = () => {
  alert("Bem vindo ao Geniuuss! iniciando novo jogo");

  score = 0;
  nextLevel();
};

green.addEventListener('click', click(0));
red.addEventListener('click', click(0));
yellow.addEventListener('click', click(0));
blue.addEventListener('click', click(0));

playGame();

