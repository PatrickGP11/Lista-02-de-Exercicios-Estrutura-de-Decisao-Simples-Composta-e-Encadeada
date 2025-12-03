let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) console.log("Magreza");
else if (imc < 25) console.log("Normal");
else if (imc < 30) console.log("Sobrepeso");
else console.log("Obesidade");