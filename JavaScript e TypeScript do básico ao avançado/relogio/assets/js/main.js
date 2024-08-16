let relogio = document.getElementById('relogio');
let valor = relogio.textContent;
let horas = 0;
let minutos = 0;
let segundos = 0;
let contador;

function formatNumber(num) {
  return num.toString().padStart(2, '0');
}


function comecar(){
  contador = setInterval(function () {segundos+=1;

    if (segundos == 60){
      minutos += 1;
      segundos = 0;
    }
    
    if (minutos == 60){
      horas += 1;
      minutos = 0;
      segundos = 0;
    }

  }, 1000);
}

function pausar(){
  setTimeout(function(){
    clearInterval(contador);
  }, 1)
}

function zerar(){
  segundos = 0;
  minutos = 0;
  hora = 0;
}

setInterval(function () {
  valor = `${formatNumber(horas)}:${formatNumber(minutos)}:${formatNumber(segundos)}`
  relogio.innerHTML = valor;

}
,1000);
