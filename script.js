//For Loop Exercise 1
function myFunction(){
  var user = prompt(" Enter a number! > 6");
  var total = 6;
    for(var num = 0; num < 20; num++ ) {
    total = total + num;
    }
    document.write(" The total number is : " + total);
}

//Do. While Excercise 2
function play(){
  var playAgain= "no";
  var string = '';

  var play = prompt("Do you want to play?");

  if(play.toLowerCase() =="yes");{
    do{
      string = prompt("Enter a word:") + " ";
      playAgain = prompt("Do you want to play again?");
    }while (playAgain.toLowerCase() == "yes"){
    }
  }
  document.write(" dog " + string);
}


//while loop Exercise 3
function myName() {
  var yes = prompt("Would you like to print your name?");
  var name = ("Hello. My name is Lyra");

    if (yes=="yes"){
      document.write(name);
      yes = prompt("Would you like to print your name again?");
    } if (yes==="yes"){
      document.write(name + " !");
      yes = prompt("Would you like to print your name again?");
    }if (yes==="yes"){
      document.write(name + " !!");
      yes = prompt("Would you like to print your name again?");
    }while (yes!=="no"){
      exit;
    }
}


//Excercise 4
function myMeal(){
var timeOfDay = prompt ("What time of day is it?");
var time;
var meal;
if ( timeOfDay === "morning") {
  meal = "eat egg and toast!";
  time = "breakfast";
} else if ( timeOfDay === "noon") {
  meal = "a salad";
  time = "lunch";
} else  if ( timeOfDay === "evening") {
  meal= "chicken and rice";
  time = "dinner"
}

document.write("Since it is " + timeOfDay + ","+ " you should be eating  " + time +"." +  " We suggest " + meal + ".");
}
