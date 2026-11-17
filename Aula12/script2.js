// Objeto

// Criando objetos com construtores
function Carro (marca, modelo, ano, quantidadeRodas, cor) {
this.marca = marca;
this.modelo = modelo;
this.ano = ano;
this.quantidadeRodas = quantidadeRodas;
this.cor = cor;
}

const carroClaudia = new Carro("Honda", "Civic Type R", 2024, 4, "preto" );

const carroRichard = new Carro("Honda", "Civic SI", 2008, 4, "branco" );


console.log(carroClaudia);
console.log(carroRichard);

carroClaudia.quilometragem = 80000;
carroRichard.arRoda = 18;

console.log("");

console.log(carroClaudia);
console.log(carroRichard);