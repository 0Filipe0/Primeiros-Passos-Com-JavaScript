// 1) Media de notas
const nota1 = 6;
const nota2 = 8;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log(`Media: ${media.toFixed(2)}`);

if (media < 5) {
    console.log('Reprovacao');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperacao');
} else {
    console.log('Passou de semestre');
}

// 2) IMC
const peso = 80;
const altura = 1.75;

const imc = peso / (altura * altura);

console.log(`IMC: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}

// 3) Condicao de pagamento
const precoEtiqueta = 100;
const formaDePagamento = 2;

let valorFinal;

if (formaDePagamento === 1) {
    valorFinal = precoEtiqueta * 0.9;
} else if (formaDePagamento === 2) {
    valorFinal = precoEtiqueta * 0.85;
} else if (formaDePagamento === 3) {
    valorFinal = precoEtiqueta;
} else {
    valorFinal = precoEtiqueta * 1.1;
}

console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);


