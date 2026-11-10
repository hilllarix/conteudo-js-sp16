// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, dias e meses ela tem.


alert("Idade expressa em dias");

let idadeAnos = parseFloat(prompt("Informe sua idade em anos: "));

let idadeMeses = parseFloat(prompt("Informe quantos meses: "));

let idadeDias = parseFloat(prompt("Informe quantos dias: "));

alert ("Sua idade expressa apenas em dias é: " + (idadeAnos * 365 + idadeMeses * 30 + idadeDias) + " dias");