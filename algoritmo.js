// 1. Problema para resolver en Javascript-ANDY PEÑALOZA 
// Tienes un arreglo (llamado myArray) con 5 elementos (enteros en el rango de 1 a 100).
// Escribe un programa en Javascript o nodejs que imprima el número más alto del arreglo
// (Si se repite, solo imprimir una vez). El programa solo debe imprimir el número, sin ningún
// texto.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const myArray = [];

const obtenerNumero = (index) => {
  rl.question(`Ingresa el número #${index + 1} (entre 1 y 100): `, (numero) => {
    const num = parseInt(numero);

    if (!isNaN(num) && num >= 1 && num <= 100) {
      if (!myArray.includes(num)) {
        myArray.push(num);
      }
      if (index === 4) {
        const numeroMasAlto = Math.max(...myArray);
        console.log(numeroMasAlto);
        rl.close();
      } else {
        obtenerNumero(index + 1);
      }
    } else {
      console.log("Número no válido. Debe estar entre 1 y 100.");
      obtenerNumero(index);
    }
  });
};

obtenerNumero(0);


  