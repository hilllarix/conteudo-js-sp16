// Objetos

// Exemplo de objeto simples

const carro = {
    marca: "Porsche",
    modelo: 911,
    ano: 2022,
    acelerar: function () {
        return `${this.marca} ${this.modelo} acelerou. Vruumm...`;
    },
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.acelerar());

const pessoa = {
    nome: "Claudia",
    idade: 22,
    altura: 1.77,
    registro: 99999999999,
    empregado: true,
    apresentar: function () {

let alturaDecimal = this.altura;

let infoEmpregado = (this.empregado === true) ? "Sim" : "Não";

//if (this.empregado === true) {
infoEmpregado = "Sim";
//} else {infoEmpregado = "Não";}

        return `
        Meu nome é: ${this.nome}
        Minhda idade é: ${this.idade}
        Minha altura é: ${alturaDecimal.toFixed(2)}
        Meu registro é: ${this.registro}
        Eu trabalho?: ${infoEmpregado}`
        ;
    },
}

console.log(pessoa.apresentar());

document.querySelector("#ex1").innerHTML - "Claudia Hilario";