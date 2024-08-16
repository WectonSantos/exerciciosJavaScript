const entrada = require ('prompt-sync') ({sigint: true})

let a = Number(entrada('Digite o valor 1: '))
let b = Number(entrada('Digite o valor 2: '))

console.log(`A soma dos valores é: ${a+b}`)