function updateTime() {
  //for Seattle
  let seattleElement = document.querySelector("#seattle");
  let seattleDateElement = seattleElement.querySelector(".date");
  let seattleTimeElement = seattleElement.querySelector(".time");
  seattleDateElement.innerHTML = moment()
    .tz("America/Vancouver")
    .format("dddd, MMMM D, YYYY");
  seattleTimeElement.innerHTML = moment()
    .tz("America/Vancouver")
    .format("h:mm:ss [<small>]A[</small>]");
  //for london
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd, MMMM D, YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
