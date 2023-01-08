/*const textfield = document.getElementById("textfield");
const numberElements = document.getElementsByClassName("number");

numberElements.addEventListener(click, function (textfield) {
    textfield = textfield + this.value;
})*/

document.addEventListener("DOMContentLoaded", function(){
    var textBox = document.querySelector("#textfield");
    var numbers = document.querySelectorAll(".number");

    numbers.forEach(num => {
        num.addEventListener("click", function(e){
            console.log(this.value)
            textBox.value += this.value; 
        })
    });
})


document.addEventListener("DOMContentLoaded", function(){
    var textBox = document.querySelector("#textfield");
    var numbers = document.querySelectorAll(".operator");

    numbers.forEach(num => {
        num.addEventListener("click", function(e){
            console.log(this.value)
            textBox.value += this.value; 
        })
    });
})