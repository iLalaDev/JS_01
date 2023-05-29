// Trabajo 1: De dos numeros (variables) imprimir el menor

let a = 100;
let b = 99;

// Uso de condicionales terciarios

let valorMenor = a < b ? a : b;
console.log(valorMenor);

// Trabajo 2: De tres numeros (variables) imprimir el mayor

let c = 150;
let d = 200;
let e = 242;

// Uso de la lib Math interna de JavaScript para evitar escribir 3 condicionales

let valorMayor = Math.max(c, d, e);
console.log(valorMayor);