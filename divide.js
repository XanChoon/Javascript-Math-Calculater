function divide(){  
    var txt;
    var number1 = parseInt(prompt("Please enter your number", ""));
	var number2 = parseInt(prompt("Please enter your number", ""));
	var answer = number1 / number2;
    if (number1 && number2 == null || number1 && number2 == "") {
        txt = "User cancelled the prompt.";
    } else {
       alert("The answer is " + answer);
    }
}