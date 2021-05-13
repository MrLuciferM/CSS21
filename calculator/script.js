let display = document.querySelector(".display");

console.log(display.innerHTML)

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

const clr = document.querySelector(".clr");

const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#divide");
const mod = document.querySelector("#modulus");
const eql = document.querySelector("#eql");

const decimal = document.querySelector(".decimal");

one.addEventListener("click",()=>{
    display.textContent+="1";
});
two.addEventListener("click",()=>{
    display.textContent+="2";
});
three.addEventListener("click",()=>{
    display.textContent+="3";
});
four.addEventListener("click",()=>{
    display.textContent+="4";
});
five.addEventListener("click",()=>{
    display.textContent+="5";
});
six.addEventListener("click",()=>{
    display.textContent+="6";
});
seven.addEventListener("click",()=>{
    display.textContent+="7";
});
eight.addEventListener("click",()=>{
    display.textContent+="8";
});
nine.addEventListener("click",()=>{
    display.textContent+="9";
});
zero.addEventListener("click",()=>{
    display.textContent+="0";
});