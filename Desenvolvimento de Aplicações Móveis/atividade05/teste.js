const entraada = require ('prompt-sync') ({sigint: true})

let carro = {
    fabricante: 'Ford',
    modelo: 'fiesta',
    cor: 'branco',
    ano: 2010,
    vm: 160,
    va: 0,
    anoFabricacao: null,

    fabricacao(dia,ano){
        data = `${dia}/${ano}`
        this.anoFabricacao = data
        console.log(this.anoFabricacao)
    },

    acelerar(valor){
        let apoio = valor+this.va
        if(valor<=this.vm){
            if(apoio<=this.vm){
                this.va += valor
                console.log(this.va)
            }else{
                console.log(`Não é possível acelerar nessa velocidade!`)
            }
        }else{
                console.log(`Não é possível acelerar nessa velocidade!`)
        }
    }
}

carro.fabricacao(10,20)

carro.acelerar(161)