const entrada = require ('prompt-sync') ({sigint: true})

//ATIVIDADE 1
console.log("Calculando bhaskara no formato ax²+bx+c=0")
let bhask = function (a, b, c){
    delta = ((b*b)-4*a*c);
    if (delta<0){
        return "Valor de Delta é negativo";
    }
    x1 = (-b + Math.sqrt(delta))/(2*a)
    x2 = (-b - Math.sqrt(delta))/(2*a)
    return [x1, x2]
}
 
a = entrada("Digite o valor de a: ");
b = entrada("Digite o valor de b: ");
c = entrada("Digite o valor de c: ");
 
console.log(bhask(a,b,c))
//ATIVIDADE 2

let capital = Number(entrada('Digite o capital: '))
let taxaMensal = Number(entrada('Digite a taxa mensal: '))
let tempo = Number(entrada('Digite o tempo: '))

let funcaoPrincipal = (capital,taxaMensal,tempo) => {
    let jurosSimples = funcaoJurosSimples(capital, taxaMensal, tempo)
    let JurosComposto = funcaoJurosComposto(capital, taxaMensal, tempo)
    let diferencaT = diferenca(jurosSimples, JurosComposto)
    console.log(jurosSimples)
    console.log(JurosComposto)   
    console.log(diferencaT)
}

let funcaoJurosSimples = (capital, taxaMensal,tempo) => {
    taxaMensal = taxaMensal/100
    let j = capital*taxaMensal*tempo
    let m = capital+j
    return m
}

let funcaoJurosComposto = (capital, taxaMensal, tempo) =>{
    taxaMensal = taxaMensal/100
    let m = capital * ((1+taxaMensal)**tempo)
    return m
}

let diferenca = (funcaoJurosSimples, funcaoJurosComposto) => {
    console.log(`Montante A = ${funcaoJurosSimples} e Montante B = ${funcaoJurosComposto}`);
    console.log(`Porcentagem = ${((funcaoJurosComposto-funcaoJurosSimples)/(funcaoJurosSimples))*100}%`)
}
funcaoPrincipal(capital, taxaMensal, tempo)

// ATIVIDADE 3
valor = Number(entrada("Digite o valor: R$"))
 
total = function (valor){
    let notas = [0, 0, 0, 0, 0]
    let valores = [100, 50, 10, 5, 1]
    for (let j = 0; j < valores.length; j++){
        while (valor >= valores[j]){
            valor -= valores[j]
            notas[j]++
        }
    }
    for (let i = 0; i < valores.length; i++){
        if (notas[i] === 0){
            continue;
        }
        console.log(notas[i] + " nota(s) de R$" + valores[i])
    }
}
total(valor)