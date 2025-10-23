let notas = [5.5,7.0,8.2,4.9,9.5];
let notasMaioresQue6 = notas.filter((nota) => nota >=7);
let notasArredondadas = notasMaioresQue6.map((notaArredondada) => Math.round(notaArredondada));
console.log("Notas maiores que 6 e arredondadas", notasArredondadas);