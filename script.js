 

let yourName = window.prompt('İsminiz nedir? ');
document.querySelector("#myName").innerHTML = yourName


function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(showTime, 1000);
if (h>= 6 && h <12) {
    document.querySelector("#selamlama").innerHTML = "Günaydın" 
} else if (h>= 12 && h <20) {
    document.querySelector("#selamlama").innerHTML = "Tünaydın" 
} else if (h>=20 && h<24) {
    document.querySelector("#selamlama").innerHTML = "İyi Akşamlar" 
}
}


function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
showTime()
