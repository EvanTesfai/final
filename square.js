// Select the button element
const redirectButton = document.getElementById("homeBtn");

// Add event listener to the button
redirectButton.addEventListener("click", function () {
  // Redirect to the desired HTML page
  window.location.href = "index.html";
});

document.getElementById("calc-btn").addEventListener("click", calcAll);

function calcAll() {
  //input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  let volOut = num1 * num2 * num3;

  document.getElementById("volOut").innerHTML = volOut;
}
