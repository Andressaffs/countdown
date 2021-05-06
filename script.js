import Countdown from "./countdown.js"

const tempoDoEvento = new Countdown("19 August 2021 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");


function mostrarTempo(){
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoDoEvento.total[index];
    });
}

mostrarTempo();
setInterval(mostrarTempo, 1000);