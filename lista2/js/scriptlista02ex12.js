let codigo = 2;
let quantidade = 3;

let precos = {
    1: 10,
    2: 20,
    3: 15
};

if (precos[codigo]) {
    console.log("Total:", precos[codigo] * quantidade);
} else {
    console.log("Código inválido");
}