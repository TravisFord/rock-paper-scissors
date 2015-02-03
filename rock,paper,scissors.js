var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} document.write("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2){
        return "<br /> The result is a tie!";
        }
    

else if (choice1 === "rock") {

    if (choice2 === "scissors") {
        return "<br /> Rock wins";
    }
    else {
        return "<br /> Paper wins";
    }
 
}   
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "<br /> paper wins";
        }
        else {
            return "<br /> scissors wins";
            }
    }
    
    else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "<br /> rock wins";
        }
        else {
            return "<br /> scissors wins";
        }
}      
}
    document.write (compare(userChoice, computerChoice));
