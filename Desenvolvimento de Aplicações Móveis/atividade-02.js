// EXERCICIO 1
lista = ['Maria', 32, 'João', 25, 'Adriana', 33, 'Roberto', 71, 'Lucas', 42, 'Silvia', 54, 'Alberto', 46, 'Mário', 62, 'Marcelo', 12]

nomeDigitado = prompt('Digite um nome para verificar se existe na lista: ');
existe = 0;

for(let i=0; i<lista.length;i++){
    if(lista[i] == nomeDigitado){
        console.log(`Nome: ${lista[i]}\nIdade: ${lista[i+1]}`);
        existe++
    }
}

if(existe===0){
    console.log('Não existe nenhuma pessoa com este nome na lista')
    
}


// EXERCICIO 2
let vetor = [8, 14, 37, 55, 63, 74, 82, 91];
let digitado = Number(prompt('Digite um valor: '));
let existe = true;

while (existe) {
    if (vetor.indexOf(digitado) !== -1) {
        digitado = Number(prompt('Valor já existe. Digite um novo valor: '));
    } else {
        existe = false;
    }
}

for (let i = 0; i < vetor.length; i++) {
    if (digitado <= vetor[i]) {
        vetor.splice(i, 0, digitado);
        break;
    }
}

if (digitado > vetor[vetor.length - 1]) {
    vetor.push(digitado);
}

console.log(vetor);


// EXERCICIO 3
let a = prompt('Digite um texto: ')
let b = prompt('Digite um texto: ')
let c = prompt('Digite um texto: ')

a = a.toLowerCase();
b = b.toLowerCase();
c = c.toLowerCase();

const comprimentoA = a.length;
const comprimentoB = b.length;
const comprimentoC = c.length;

let igual = 'não'
 
let maior = 'nenhum';

if(comprimentoA>comprimentoB || comprimentoA>comprimentoC){
    maior = 'a'
}
if(comprimentoB>comprimentoA || comprimentoB>comprimentoC){
    maior = 'b'
}
if(comprimentoC>comprimentoA || comprimentoC>comprimentoB){
    maior = 'c'
}

console.log(`O MAIOR É O TEXTO ${maior}`)

if(comprimentoA==comprimentoB || comprimentoA==comprimentoC){
    igual = 'sim'
}
if(comprimentoB==comprimentoA || comprimentoB==comprimentoC){
    igual = 'sim'
}
if(comprimentoC==comprimentoA || comprimentoC==comprimentoB){
    igual = 'sim'
}

console.log(`POSSUI ALGUM VALOR IGUAL: ${igual}`)

//EXERCICIO 4
let digitado = prompt('Digite um texto: ');
let resultado = '';

for (let i = 0; i < digitado.length; i++) {
    let char = digitado[i];
    
    if (char === 'A' || char === 'a') {
        resultado += '4';
    } else if (char === 'B' || char === 'b') {
        resultado += '8';
    } else if (char === 'T' || char === 't') {
        resultado += '7';
    } else if (char === 'E' || char === 'e') {
        resultado += '3';
    } else if (char === 'S' || char === 's') {
        resultado += '5';
    } else if (char === 'I' || char === 'i') {
        resultado += '1';
    } else if (char === 'O' || char === 'o') {
        resultado += '0';
    } else if (char === 'Z' || char === 'z') {
        resultado += '2';
    } else {
        resultado += char;
    }
}

console.log(resultado);