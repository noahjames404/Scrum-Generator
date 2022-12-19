var btn_copy = document.getElementById("btn-copy");
var btn_next = document.getElementById("btn-next");
var btn_clear = document.getElementById("btn-clear");
var text_yesterday = document.getElementById("text-yesterday");
var text_today = document.getElementById("text-today");
var text_impediments = document.getElementById("text-impediments");
var date_today = document.getElementById("date-today");

date_today.value = getDateToday();

text_yesterday.value = localStorage.getItem("text_yesterday");
text_today.value = localStorage.getItem("text_today");
text_impediments.value = localStorage.getItem("text_impediments");

btn_copy.addEventListener("click",() => {
  var val = "SCRUM UPDATE\n"+date_today.value + "\nYesterday:\n" + text_yesterday.value;
  val += "\nToday:\n" + text_today.value;
  val += "\nImpediments:\n" + getImpediments();

  navigator.clipboard.writeText(val);

  saveInputs();

  console.log(val);
});

btn_next.addEventListener("click",() => {
  text_yesterday.value = text_today.value;
  text_impediments.value = "";
  text_today.value = "";
});

btn_clear.addEventListener("click",() => {
  text_yesterday.value = "";
  text_impediments.value = "";
  text_today.value = "";
});

document.addEventListener('visibilitychange', () => saveInputs(), false);

function saveInputs(){
  localStorage.setItem("text_yesterday", text_yesterday.value);
  localStorage.setItem("text_today", text_today.value);
  localStorage.setItem("text_impediments", text_impediments.value);
}

function getDateToday(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  return today;
}


function getImpediments(){
  var val = text_impediments.value;
  if(val == ""){
    val = "N/A";
  }

  return val;
}
