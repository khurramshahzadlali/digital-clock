// const hourEl = document.getElementById("hours");
// const minuteEl = document.getElementById("minutes");
// const secondEl = document.getElementById("seconds");
// const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
//  let ampm = "AM";

  if (h > 12) { 
    ampm = "PM";
  } else {
    ampm = "AM"
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
  document.getElementById("ampm").innerText = ampm;
}

setInterval(updateClock,1000);

