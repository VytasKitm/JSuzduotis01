'use strict';


let amzius = 37;

function suages(amzius) {
amzius > 18 ? console.log("Suauges."):console.log("Vaikas.");
}
suages(amzius);



const skaicius = 3;
const zodis = "tipas";

function tipas(a) {
if (typeof(a) == "number") {
    console.log(`Kintamasis ${a} yra skaicius.`);
}
else if (typeof(a) == "string") {
    console.log(`Kintamasis ${a} yra string.`);
}
}

tipas(skaicius);
tipas(zodis);







function max() {
    const a = prompt("Iveskite pirma skaiciu:");
    const b = prompt("Iveskite antra skaiciu:");
    const c = prompt("Iveskite trecia skaiciu:");
    const max = Math.max(a,b,c);
    alert(`Didziausias skaicius yra: ${max}`);
}

max();