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

  for(let i in order){
      let elementColor = createElement(order[i]);
      lightColor(elementColor, Number(i) + 1);
  }

}

let light = (element, number) => {
     
    number *= 500;
    setTimeout(() => {
       element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
      element.classList.remove('selected');
    });
}
