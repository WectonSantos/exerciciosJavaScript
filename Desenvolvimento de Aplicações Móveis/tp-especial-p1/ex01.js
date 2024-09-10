const maior = function (array){
    let maior = array[0];
    for(let i=0; i<array.length;i++){
        if (array[i]>=maior){
            maior = array[i];
        }
    }
    return maior;
}

const menor = function (array){
    let menor= array[0];
    for(let i=0; i<array.length;i++){
        if (array[i]<menor){
            menor = array[i]
        }
    }
    return menor
}

const media = function (array, funcMaior, funcMenor){
    let media = (funcMaior(array)+funcMenor(array))/2
    return media;
}
let array = [1,7,3,5]
let array2 = [7,2,9,6,25,7,12]
a = maior(array)
b = menor(array)
console.log(a)
console.log(b)
console.log(media(array2, maior, menor))