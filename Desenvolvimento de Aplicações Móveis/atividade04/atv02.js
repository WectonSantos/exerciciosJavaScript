const entrada = require ('prompt-sync') ({sigint: true})
const banco = {
    nome: null,
    numero: null,
    saldo: null,

    retirada(valor){
        this.saldo = this.saldo-valor
    },

    deposito(valor){
        this.saldo+=valor
    },

    exibeSaldo(){
        console.log(`O valor do saldo é : ${this.saldo}`)
    }

}
let nome = entrada('Digite o seu nome: ')
let numero = entrada('Digite o numero da conta: ')
let saldoInicial = Number(entrada('Digite o seu saldo inicial: '))

banco.nome = nome;
banco.numero = numero
banco.saldo = saldoInicial
let opcao;
let valorDeposito;
let valorRetirada;


//while(opcao !=4){
function menu(){
    opcao = Number(entrada(`Digite a sua opção: \n1. Deposito\n2. Retirada\n3. Saldo\n4. Sair`))
    console.log(`Digite a sua opção: \n1. Deposito\n2. Retirada\n3. Saldo\n4. Sair`)
    switch(opcao){
        case 1:
            valorDeposito = Number(entrada(`Digite o valor da entrada: `))
            banco.deposito(valorDeposito)
            console.log(`O seu saldo atual é: ${banco.saldo}`)
            menu()
            break

        case 2:
            valorRetirada = Number(entrada(`Digite o valor da retirada: `))
            if(banco.saldo != null){
                if(banco.saldo >=valorRetirada){
                    banco.retirada(valorRetirada)
                    console.log(`O seu saldo atual é: ${banco.saldo}`)
                }else{
                    console.log('Saldo insuficiente')
                }

            }
            menu()
            break

        case 3:
            console.log(banco.exibeSaldo())
            menu()
            break
        case 4:
            console.log('saindo...')
            break
    }
}
menu()


    
//}