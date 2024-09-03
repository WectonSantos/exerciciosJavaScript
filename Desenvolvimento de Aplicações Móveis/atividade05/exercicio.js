const entrada = require ('prompt-sync') ({sigint: true})

class Carro{
    constructor(fabricante ='Ford', modelo ='Fiesta', cor='Branco',ano=2010,vm = 160, va = 0){
        this.fabricante = fabricante
        this.modelo = modelo
        this.cor = cor
        this.ano = 2010
        this.vm = vm 
        this.va = va
    }

    Fabricacao(d=1){
        if(d>0 && d<32){
            this.fabricacao = `${d}/${this.ano}`
            console.log(`${d}/${this.ano}`)
        }else{
            console.log(`Dia inválido`)
        }
    }

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

    frear(valor){
        let apoio = this.va-valor
        if(apoio<0){
            this.va = 0
        }else{
            this.va = this.va - valor
        }
        console.log(this.va)
    }

    exibe(){
        console.log(`
        Fabricante - ${this.fabricante}        
        Modelo - ${this.modelo}
        Fabricação - ${this.fabricacao}
        Cor - ${this.cor}
        Velocidade Máxima - ${this.vm}Km/h
        Velocidade Atual - ${this.va}Km/h`)
    }
}

Carro1 = new Carro()
Carro1.Fabricacao(15)
Carro1.acelerar(150)
//Carro1.frear(170)
Carro1.exibe()


