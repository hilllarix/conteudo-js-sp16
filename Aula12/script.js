// Objetos
const pessoa = {
    nome: "Claudia",
    altura: 1.77,
    idade: 22,
};

console.log (pessoa);

//let respostaUsuario = prompt ("Informe o identificador de alguma propriedade no objeto pessoa:");
//console.log(pessoa[respostaUsuario]);

console.log(pessoa.nome)
console.log(pessoa["idade"]);

console.log("");

// Alterando, adicionando e excluindo propriedades

pessoa.idade = 20;

console.log(pessoa);

console.log("");

delete pessoa.altura;

console.log(pessoa);

console.log("");

// Verificando existência de propriedade em objeto
let testePropriedade = ("idade" in pessoa);

console.log(testePropriedade)

// Objetos Aninhados
const pessoa2 = {
    nome: "Edward",
    sobrenome: "Elric",
    profissao: "Alquimista",
    instrumento: {
        tipo: "manipulação de matéria",
        material: "Tudo",
    },
};

console.log(pessoa2);
console.log(pessoa2.instrumento)

//Metodos de Objetos
const carro = {
    marca: "Toyota",
    modelo: "Supra",
    ano: 1998,
    acelerar: function () {
        return `O ${this.marca} ${this.modelo} acelerou`
    }
};

console.log(carro.acelerar());
console.log("")

// Adicionando Método em Objeto
carro.derrapar = function () {
    return `O ${this.marca} ${this.modelo} derrapou`
};

console.log(carro.derrapar());
console.log(carro);