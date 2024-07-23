/*Mikail Alam*/
/*2/18/2024*/

/*5a*/
/*Text color and fontsize will change*/
function jsStyle() {
    var element = document.getElementById("text");
    element.style.color = "red";
    element.style.fontSize = "24px"; 
}

/*5b*/
/*Displays and alert message with whatever is inserted into the first and last name*/
function getFormValues() {
    var firstName = document.getElementById("fname").value; 
    var lastName = document.getElementById("lname").value;
    alert(firstName + " " +  lastName);

}

/*5c*/
/*Displays the number of options in the dropdown box*/
function getOptions() {
	var selectElement = document.getElementById("mySelect");
    var optionsCount = selectElement.options.length;
	alert("Number of options: " + optionsCount);
}

/*5d*/
/*Changes the text color when hovered*/
function changeColorOnHover() {
    var element = document.getElementById("rb");
    element.style.color = 'red'; 
}

function revertColorOnLeave() {
    var element = document.getElementById("rb"); 
    element.style.color = 'black';
}

/*5e*/
/*Functions that divide and multipy two operands*/

/*divide*/
function divide() {
    var firstOperand = parseFloat(document.getElementById("firstoperand").value);
    var secondOperand = parseFloat(document.getElementById("secondoperand").value);

    /*check to see if second operand is 0, and if so, returns an error*/
    if(secondOperand === 0) {
        document.getElementById("result").innerHTML = "ERROR";
        return; 
    }
    var result = firstOperand / secondOperand;
    document.getElementById("result").innerHTML = result;
}

/*multipy*/   
function multiply() {
    var firstOperand = parseFloat(document.getElementById("firstoperand").value);
    var secondOperand = parseFloat(document.getElementById("secondoperand").value);
    var result = firstOperand * secondOperand;
    document.getElementById("result").innerHTML = result;
}