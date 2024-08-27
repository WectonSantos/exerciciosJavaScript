const dolar = 5.49
const arrayReal = [100,200,1050,625,348]
const arrayDolar = arrayReal.map(valor => Number((valor/dolar).toFixed(2)))
let separado = []

arrayDolar.forEach(valor => {
    if (valor > 50) {
        separado.push(valor);
    }
});

let soma = separado.reduce((a,b)=>a+b)
let soma2 = separado.map(valor =>valor+=valor)

let arrayDolar2 = arrayDolar.map(valor => 'U$'+valor)

console.log(arrayDolar)
console.log(separado)
console.log(`U$${soma}`)
console.log(arrayDolar2)