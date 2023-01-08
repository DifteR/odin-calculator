var values = [];

document.addEventListener("DOMContentLoaded", function(){
    var textBox = document.querySelector("#textfield");
    var numbers = document.querySelectorAll(".number");

    numbers.forEach(num => {
        num.addEventListener("click", function(e){
            textBox.value += this.value; 
        })
    });
})


document.addEventListener("DOMContentLoaded", function(){
    var textBox = document.querySelector("#textfield");
    var numbers = document.querySelectorAll(".operator");

    numbers.forEach(num => {
        num.addEventListener("click", function(e){
            values.push(textBox.value);
            textBox.value = this.value; 
            console.table(values);
        })
    });
})