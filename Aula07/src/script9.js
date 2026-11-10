// Exercicio 9: Calcule a área de um Trapézio.

alert("Área do Trapézio");

let baseMaior = parseFloat(prompt("Informe o valor da base maior do trapézio em centímetros: "));

let baseMenor = parseFloat(prompt("Informe o valor da base menor do trapézio em centímetros: "));

let alturaTrapezio = parseFloat(prompt("Informe o valor da altura do trapézio em centímetros: "));

alert ("A área total do trapézio de base maior " + baseMaior + "cm, base menor " + baseMenor + "cm e altura " + alturaTrapezio + "cm é: " + ((baseMaior + baseMenor) * alturaTrapezio) / 2 + "cm²")