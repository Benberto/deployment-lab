const calculateBtn = document.querySelector("#calculate")

function calculateTip(){
  let billAmt = 
  document.getElementById("billamt");

  let serviceQual =
  document.getElementById("serviceQual");

  let peopleAmt = 
  document.getElementById("peopleamt");

if(billAmt.value === "" || serviceQual.value == 0){
  alert("Please enter values")
  return;
}

 else if(peopleAmt.value === "" || peopleAmt.value <= 1){
   peopleAmt.value = 1;

   document.getElementById("each").style.display = "none";

  } else{

   document.getElementById("each").style.display = "block";

 }

let total = (billAmt.value * serviceQual.value) / peopleAmt.value;

total = Math.round(total * 100) / 100;

total = total.toFixed(2)

document.getElementById("totalTip").style.display = "block"

document.getElementById("tip").innerHTML = total;

}

document.getElementById('totalTip').style.display = "none";
document.getElementById("each").style.display = "none";

calculateBtn.addEventListener('click', calculateTip)