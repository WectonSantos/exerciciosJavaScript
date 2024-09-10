const entrada = require ('prompt-sync') ({sigint: true})

class Garrafa {
    constructor(bebida = 'agua', capacidadeMaxima = 300, capacidadeAtual = 0, mesVencimento = 1, anoVencimento = 2020){
        this.bebida = bebida,
        this.capacidadeMaxima = capacidadeMaxima,
        this.capacidadeAtual = capacidadeAtual,
        this.mesVencimento = mesVencimento,
        this.anoVencimento = anoVencimento
    }

    validade(d=1,a=2024){
        let dataFormatada
        if(d<0 && d>31){
            console.log('Dia inválido!')
        }else if(a<0){
            console.log('Ano inválido!')
        }else{
            dataFormatada = `${d}/${a}`
            console.log(dataFormatada)
            this.dataFormatada = dataFormatada
            this.anoVencimento = a;
        }
    }

    encher(valor){
        let apoio = valor+this.capacidadeAtual
        if(valor<=this.capacidadeMaxima){
            if(apoio<=this.capacidadeMaxima){
                this.capacidadeAtual += valor
                console.log(this.capacidadeAtual)
            }else{
                console.log(`Não é possível encher!`)
            }
        }else{
                console.log(`Não é possível encher!`)
        }
    }
    esvaziar(valor){
        let apoio = this.capacidadeAtual-valor
        if(apoio<0){
            this.capacidadeAtual = 0
        }else{
            this.capacidadeAtual = this.capacidadeAtual - valor
        }
        console.log(this.capacidadeAtual)
    }

    verifica(cAtual, cMaxima){
        if(cAtual<1000){
            this.capacidadeAtual = `${cAtual}ml`
        }else if(cAtual>=1000){
            this.capacidadeAtual = `${cAtual}L`
        }

        if(cMaxima<1000){
            this.capacidadeMaxima = `${cMaxima}ml`
        }else if(cMaxima>=1000){
            this.capacidadeMaxima = `${cMaxima}L`
        }

    }

    exibe(){
        this.verifica(this.capacidadeAtual,this.capacidadeMaxima)
        console.log(`
        Bebida - ${this.bebida}        
        Capacidade Máxima - ${this.capacidadeMaxima}
        Capacidade Atual - ${this.capacidadeAtual}
        Validade - ${this.dataFormatada}`)
    }

}

let bebida = entrada('Digite o nome da sua bebida: ')
let cMaxima = entrada('Digite a capacidade máxima da bebida: ')
if(cMaxima<300){
    cMaxima = 300
}else if(cMaxima<600 && cMaxima>300){
    cMaxima = 600
}else if(cMaxima > 600 && cMaxima <1000){
    cMaxima = 1000
}else if(cMaxima>1000 && cMaxima<1500){
    cMaxima = 1500
}else if(cMaxima>1500 && cMaxima<2000){
    cMaxima = 2000;
}else if(cMaxima>2000){
    console.log('Capacidade inválida!')
    cMaxima = entrada('Digite a capacidade máxima da bebida: ')
}

let cAtual = entrada('Digite a capacidade atual: ')
if(cAtual>2000){
    console.log('Capacidade inválida!')
    cAtual = entrada('Digite a capacidade atual: ')
}

let mes = entrada('Digite o mês de vencimento: ')
if(mes<0 && mes > 12){
    console.log('Mês inválido!')
    mes = entrada('Digite o mês de vencimento: ')
}
let ano = entrada('Digite o ano de vencimento: ')
if(ano<0){
    console.log('Ano inválido!')
    ano = entrada('Digite o ano de vencimento')
}
Garrafa1 = new Garrafa(bebida, cMaxima, cAtual, mes, ano)
Garrafa1.validade(1,2020)
Garrafa1.esvaziar(600)
Garrafa1.encher(250)
Garrafa1.exibe()