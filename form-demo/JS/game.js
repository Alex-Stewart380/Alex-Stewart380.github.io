let fname = "";

//function for the greet
function greet() {
    let greetParagraph = document.getElementById("greet");
    // get values from form
    fname = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    greetParagraph.innerHTML = "greetings " + age + " year old " + fname + lname + " ! "

}
function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer")
    //answer
    let chocolateSelected = document.getElementById("chocolate").checked;
    let honeySelected = document.getElementById("honey").checked;
    let cheeseSelected = document.getElementById("cheese").checked;
    let wheatSelected = document.getElementById("wheat").checked;
    // decide what to print
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", Wrong!"
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", You Win!  In fact. Archaeologists have dug up tuna from egyptian tombs and it is still edible"
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. TUNA!, WHAT POSSESED YOU TO SAY TUNA"
    }
    else if (wheatSelected) {
        triviaAnswer.innerHTML = fname + ", You are wrong, Wheat? really?"
    }
}



function truths() {
    let truthAnswer = document.getElementById("truth-answer")
    //answer
    let lieSelected = document.getElementById("lie").checked;
    let truthSelected = document.getElementById("truth").checked;
    let truth2Selected = document.getElementById("truth2").checked;
    // decide what to print
    if (lieSelected) {
        truthAnswer.innerHTML = fname + " You are Right!"
    }
    else if (truthSelected) {
        truthAnswer.innerHTML = fname + "You are wrong."
    }
    else if (truth2Selected) {
        truthAnswer.innerHTML = fname + "You are wrong."
    }
}