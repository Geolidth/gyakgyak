function terfogat() {
  alert('Szamolom');
}
//File: index.html
//Author: Balázs Réka
//Copyright: 2023, Balázs Réka
//Group: Szoft 1-2-E
//Date: 2023-02-03
//Github: https://github.com/BalazsR2022/Beadando

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  
const sugar = document.querySelector('.form-control');
const r = parseFloat(sugar.value);
const Terfogat = szamitTerfogat(r);
const Felszin = szamitFelszin(r);

const pi = Math.PI;

function szamitTerfogat(r) {
  return (4/3) * pi * Math.pow(r, 3);
}

function szamitFelszin(r) {
  return 4 * pi * Math.pow(r, 2);
}




console.log(`A gömb térfogata: ${Terfogat} cm^3`);
console.log(`A gömb felszíne: ${Felszin} cm^2`);