class carro{
    constructor(fabricante = "Hyundai", modelo = "HB20", cor = "Cinza", mes = 1, ano = 2010, vmax = 160, vatual = 0){
        this.fabricante = fabricante
        this.modelo = modelo
        this.cor = cor
        this.mes = mes
        this.ano = ano
        this.vmax = vmax
        this.vatual = vatual
    }

    set fabricacao(d){
        if (d>0 && d<32){
            if (d<10){
                this.data = "0"+d+"/"+this.ano
                console.log("0"+d+"/"+this.ano)
            }
            else{
                console.log(d+"/"+this.ano)
            }
        }
        else{
            console.log("Valor do dia está incorreto.")
        }
    }

   set acelerar(v){
       if(v>=0){
            if (v<this.vmax){
                this.vatual += v
                if (this.vatual <= this.vmax){
                    console.log("Valor atual (acelerado): " + this.vatual + "km/h");
                }
                else{
                    console.log((this.vatual - this.vmax) + "km/h a mais do permitido");
                }
            }
            else{
                console.log("Valor excedeu o limite máximo em "+ (v - this.vmax) + "km/h")
            }
        }
        else{
            console.log("Valor da aceleração deve ser positivo.")
        }
    }

    set frear(v){
        if (v>=0){
            if (v>=this.vatual){
                this.vatual = 0;
                console.log("Valor de freio maior que o limite -> " + "Valor atual: " + this.vatual + "km/h")
            }
            else{
                this.vatual -= v
                console.log("Valor atual (reduzido): " + this.vatual + "km/h")
            }
        }
        else{
            console.log("Valor informado deve ser negativo.")
        }
    }

    get exibe(){
        console.log("Fabricante - " + this.fabricante)
        console.log("Modelo - " + this.modelo)
        console.log("Fabricação - " + this.data)
        console.log("Cor - " + this.cor)
        console.log("Velocidade Máxima - " + this.vmax + "km/h")
        console.log("Velocidade Atual - " + this.vatual + "km/h")
    }
}

const teste = new carro();
teste.fabricacao = 5;
console.log("");
teste.acelerar = 20;
console.log("");
teste.frear = 10;
console.log("");
teste.exibe