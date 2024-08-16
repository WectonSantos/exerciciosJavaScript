const entrada = require ('prompt-sync') ({sigint: true})

const exibeMaior = (a,b,c) => {
    let maior = a
    let vetor = [a,b,c]
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]>maior){
            maior = vetor[i]
        }
    }

    console.log(`O maior valor é: ${maior}`)
}

a = entrada('Digite o valor A: ')
b = entrada('Digite o valor B: ')
c = entrada('Digite o valor C: ')

exibeMaior(a,b,c);