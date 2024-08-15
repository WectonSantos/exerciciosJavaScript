// atividade 1

let aceleracao = Number(prompt('Digite a aceleração: '))
let velocidadeInicial = Number(prompt('Digite a velocidade inicial'));
let tempo = Number(prompt('Digite o tempo: '));
let calculo = velocidadeInicial + (aceleracao*tempo);
console.log(`O Resultado é = ${calculo}`);

if(calculo<=40){
    console.log('Veículo muito lento');
}else if(calculo>40 && calculo<=60){
    console.log('Veículo permitidad');
}else if(calculo>60 && calculo <=80){
    console.log('Velocidade de cruzeiro');
}else if (calculo >80 && calculo <=120){
    console.log('Veículo rápido');
}else if (calculo >120){
    console.log('Veículo muito rápido');
}

// atividade 2

let populacaoAtual = Number(prompt('Digite a população atual: '));
let taxaCrescimento = Number(prompt('Digite a taxa de crescimento: '));
let anos = Number(prompt('Digite o número de anos futuros'));
let popFinal = populacaoAtual;

for (let pop = 1; pop<= anos ;pop++){
    popFinal = popFinal * (1 + (taxaCrescimento/100));
}
console.log(popFinal);

// atividade 3

const valor = Number(prompt("Digite o valor do número"))
if (valor%2 === 0 || valor%3 === 0){
    console.log("O valor digitado não é primo.")
}
else{
    console.log("O valor digitado é primo.)
}

// atividade 4
let numero = prompt('Digite um número inteiro: ');
let vetor = numero.split('');
let apoio;
let soma =0;

for(let i=0; i<vetor.length; i++){
    apoio = vetor[i];
    apoio = Number(apoio);
    soma = apoio+soma;
}
console.log(soma);

// atividade 5
let salario
let imposto
imposto = 0
 
salario = Number(prompt("Entre com a sua faixa salarial para calcular seu imposto: "))
 
if(salario >= 0 && salario <= 1000)
{
    imposto = salario*(5/100)
    console.log("Seu imposto a ser pago é de: "+ imposto)
}
else if(salario > 1000 && salario <= 3000)
{
    imposto = salario*(10/100)
    console.log("Seu imposto a ser pago é de: "+ imposto)
}
else if(salario > 3000 && salario <= 5000)
{
    imposto = salario*(15/100)
    console.log("Seu imposto a ser pago é de: "+ imposto)
}
else if(salario > 5000)
{
    imposto = salario*(20/100)
    console.log("Seu imposto a ser pago é de: "+ imposto)
}
// atividade 6
const vl_1 = Number(prompt("Digite o primeiro valor:"))
const vl_2 = Number(prompt("Digite o segundo valor:"))
const eq = prompt("Digite (+) para somar, (-) para subtrair, (*) para multiplicar, (/) para dividir: ")
if (eq === "+"){
    let total = vl_1 + vl_2
    console.log("Valor total = " + total)
}
else if (eq === "-"){
    let total = vl_1 - vl_2
    console.log("Valor total = " + total)
}
else if (eq === "*"){
    let total = vl_1 * vl_2
    console.log("Valor total = " + total)
}
else if (eq === "/"){
    if (vl_2 === 0){
        console.log("Inexistente")
    }
    else{
    let total = vl_1 / vl_2
    console.log("Valor total = " + total)
    }
}
// atividade 7
let numRepetições
let primeiroElemento
let razão
let elementoFinal
 
numRepetições = Number(prompt("Digite a quantidade de repetições da P.A"))
primeiroElemento = Number(prompt("Digite o primeiro elemento da P.A"))
razão = Number(prompt("Digite a razão da P.A"))
 
elementoFinal = primeiroElemento + (numRepetições - 1) * razão
console.log(elementoFinal)