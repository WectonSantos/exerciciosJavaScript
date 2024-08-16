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

exibeMaior(5,54,77);