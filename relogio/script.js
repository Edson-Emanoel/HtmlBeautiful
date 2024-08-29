const horas = document.getElementById("horas")
const minutos = document.getElementById("min")
const segundos = document.getElementById("secs")

const relogio = setInterval(function(){
      let dateToday = new Date();
      let hr = dateToday.getHours();
      let min = dateToday.getMinutes();
      let s = dateToday.getSeconds();

      if (hr < 10 ) hr = "0" + hr;

      if (min < 10 ) min = "0" + min;

      if (s < 10 ) s = "0" + s;

      horas.textContent    = hr;
      minutos.textContent  = min;
      segundos.textContent = s;
});