// Operador de Comparação

// Operador Comparador de Igualdade
let a = 5;

let comparadorIgualdade1 = a == 5;
let comparadorIgualdade2 = a == 8;
let comparadorIgualdade3 = a == "5";

console.log(comparadorIgualdade1);
console.log(comparadorIgualdade2);
console.log(comparadorIgualdade3);

console.log("");

// Operador Comparador de Igualdade E Tipo
let comparadorIgualdadeTipo1 = (a == 5);
let comparadorIgualdadeTipo2 = (a == 8);
let comparadorIgualdadeTipo3 = (a == "5");

console.log(comparadorIgualdadeTipo1);
console.log(comparadorIgualdadeTipo2);
console.log(comparadorIgualdadeTipo3);

console.log("");

// Operador Comparador de Diferença
let comparadorDiferenca1 = (a != 5);
let comparadorDiferenca2 = (a != 8);
let comparadorDiferenca3 = (a != "5");

console.log(comparadorDiferenca1);
console.log(comparadorDiferenca2);
console.log(comparadorDiferenca3);

console.log("");

// Operador Comparador de Diferença entre Tipo e Valor
let comparadorDiferencaTipoValor1 = (a !== 5);
let comparadorDiferencaTipoValor2 = (a !== 8);
let comparadorDiferencaTipoValor3 = (a !== "5");

console.log(comparadorDiferencaTipoValor1);
console.log(comparadorDiferencaTipoValor2);
console.log(comparadorDiferencaTipoValor3);

console.log("");

// Operador Comparador Maior Que

let comparadorMaiorQue1 = (5 > 5);
let comparadorMaiorQue2 = (5 > 8);
let comparadorMaiorQue3 = (5 > 3);

console.log(comparadorMaiorQue1);
console.log(comparadorMaiorQue2);
console.log(comparadorMaiorQue3);

console.log("");

// Operador Comparador Menor Que

let comparadorMenorQue1 = (5 < 5);
let comparadorMenorQue2 = (5 < 8);
let comparadorMenorQue3 = (5 < 3);

console.log(comparadorMenorQue1);
console.log(comparadorMenorQue2);
console.log(comparadorMenorQue3);

console.log("");

// Operador Comparador Maior ou Igual Que

let comparadorMaiorIgualQue1 = (5 >= 5);
let comparadorMaiorIgualQue2 = (5 >= 8);
let comparadorMaiorIgualQue3 = (5 >= 3);

console.log(comparadorMaiorIgualQue1);
console.log(comparadorMaiorIgualQue2);
console.log(comparadorMaiorIgualQue3);

console.log("");

// Operador Comparador Maior ou Igual Que

let comparadorMenorIgualQue1 = (5 <= 5);
let comparadorMenorIgualQue2 = (5 <= 8);
let comparadorMenorIgualQue3 = (5 <= 3);

console.log(comparadorMenorIgualQue1);
console.log(comparadorMenorIgualQue2);
console.log(comparadorMenorIgualQue3);

console.log("");

// Operador Comparador em Estrutura Condicional
let idade = 13;
let mensagem;

if (idade < 18) {
    mensagem = "Você é menor de idade";
    console.log(mensagem);
}

let idade2 = parseInt(prompt("Informe sua idade:"));

if (idade >= 18) {
    alert("Você é maior de idade e já pode dirigir.")
}


if (idade < 18) {
mensagem = "Você é menor de idade"
} else {
    mensagem ("Você é menor de idade")
    console.log(mensagem)
}


