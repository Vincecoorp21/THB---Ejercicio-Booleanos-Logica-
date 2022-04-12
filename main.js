// 1. Booleanos
// 	Dados 2 variables booleanas:
booleano1 = true;
booleano2 = false;

// 1.Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2

let booleanoAnd = booleano1 && booleano2;

console.log(booleanoAnd);

// 2.Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2

let booleanoOr = booleano1 || booleano2;

console.log(booleanoOr);

// 3.Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1

let booleanoNot = !booleano1;
console.log(booleanoNot);

// 4.Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)

let booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log(booleanoMix0);

/***************************************** */
// 2.Operadores
// Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado

let valorDivisión = (17 / 3).toFixed(2);
console.log(valorDivisión);

// Crear variable valorResto cuyo valor sea el resto de 17 entre 7
let valorResto = 17 % 7;
console.log(valorResto);

/*****************+******************************************* */
// 3.Lógica de programación

// 5. Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

let A = 9;
let B = 9;

if (A == B) {
  console.log('Son iguales');
} else {
  console.log('No son iguales');
}

if (A === B) {
  console.log('Son iguales');
} else {
  console.log('No son iguales');
}

// En este caso la comparación No estricta (==) es igual a la comparación estricta (===)

// 6. Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”

let mochila = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (mochila.length > 10) {
  console.log('No puedo cargar con tantas cosas');
} else if (mochila.length >= 2 && mochila.length <= 10) {
  console.log('Que bien voy con mi mochila');
} else {
  console.log('Creo que no necesito una mochila');
}

// 7. Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10

let contarHasta10 = 0;
for (contarHasta10; contarHasta10 <= 10; contarHasta10++) {
  console.log(contarHasta10);
}

// 8. Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’

let diaFestivo = true;

diaFestivo ? console.log('Hoy no trabajo') : console.log('Hoy trabajo');

// Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

let arrayBucle = [];

for (let i = 4; i < 19; i++) {
  arrayBucle.push(i);
}

console.log(arrayBucle);

// 9. Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado

let resultado = 0;
for (let i = 0; i < arrayBucle.length; i++) {
  resultado += arrayBucle[i];
}
console.log(resultado);

// 10. Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos

let array = ['Con', 'Sofia', 'aprendiendo', 'bucles'];

for (elem of array) {
  console.log(elem);
}

// 11. Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3

let i = 0;

while (i < 21) {
  if (i % 3 === 0) {
    console.log(` Patata El num ${i} es múltiplo de 3`);
  } else {
    console.log(`El num ${i} no es múltiplo de 3`);
  }
  i++;
}

// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

let num = Number(prompt('Dime una nota del 0 al 10'));

switch (num) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    alert('Insuficiente');
    break;
  case 5:
  case 6:
    alert('Suficiente');
    break;
  case 7:
  case 8:
    alert('Notable');
    break;
  case 9:
  case 10:
    alert('Sobresaliente');
    break;
  default:
    alert('No es un num válido');
}

// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.

function devuelveLaResta(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else if (num2 > num1) {
    return num2 - num1;
  }
}
console.log(devuelveLaResta(9, 8));

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’
/*********************************************** */

function duplicaNum(num) {
  if (typeof num == 'number') {
    return num * 2;
  } else {
    return 'Debo ser ejecutada con un número';
  }
}

console.log(duplicaNum(2));
