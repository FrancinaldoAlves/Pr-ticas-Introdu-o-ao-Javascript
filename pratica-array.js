const nomes = ["fracinaldo", "josé", "pedro", "lucas", "tiago"];
nomes.forEach((nome) => console.log("nome:", nome));

console.log("---------------------------------------------");

const numeros = [1,2,3,4,5];
const arrayDobro = numeros.map((numero) => console.log("numero dobrado:", numero * 2));

console.log("---------------------------------------------");

const arrayImpares = numeros.filter((numero) => (numero % 2 === 0));
console.log("numeros ímpares:", arrayImpares);
