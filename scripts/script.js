document.addEventListener("DOMContentLoaded", function () {
  let textBox = document.querySelector("#textfield");
  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  numbers.forEach((num) => {
    num.addEventListener("click", function (e) {
      textBox.value += this.value;
    });
  });

  operators.forEach((num) => {
    num.addEventListener("click", function (e) {
      textBox.value += this.value;
    });
  });
  document.getElementById("equals").addEventListener("click", function (e) {
    textBox.value = eval(textBox.value); //this allows user to run any javascript they want. Need to fix this
  });
  document.getElementById("clear").addEventListener("click", function (e) {
    textBox.value = "";
  });
});
