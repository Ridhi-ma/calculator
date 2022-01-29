"use script";
const boxx = document.querySelector(".boxx");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const mul = document.querySelector("#mul");
const divide = document.querySelector("#divide");

const allclear = document.querySelector("#allclear");
const equal = document.querySelector("#equal");
const numbers = [one, two, three, four, five, six, seven, eight, nine, zero];

const display = (val) => {
  boxx.value += val;
  return val;
};

const solve = () => {
  let x = boxx.value;
  let y = eval(x);
  boxx.value = y;
  return y;
};
const clear = () => {
  boxx.value = " ";
};
