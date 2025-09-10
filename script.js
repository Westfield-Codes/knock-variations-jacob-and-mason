
/* Global variables */

/* ALTERNATIVE SETUPS:
 * Wooden shoe, Wooden shoe like to know!
 * Water, Water you doing today?
 * Butter, Butter let me in or I'll freeze!
 * Soup,Superman!
 */   

var who = "Lettuce";
var joke = "Lettuce in, it's cold out here!";
var expected = who + " who?";

/* Simple version */
function knock(){
  prompt("Knock Knock!");
  prompt(who);
  alert(joke);
}

/* Better */
function knockCheck(){
  prompt("Knock Knock!");
  var answer = prompt(who);
  if (answer == expected) alert(joke);
  else alert("Huh?");
}

/* Best */
function knockAgain(){
  prompt("Knock Knock!");
  var answer = prompt(who);
  // what is the difference between = and ==?
  if (answer == expected) alert(joke);
  else askAgain();
}

function askAgain() {
  alert("Huh?");
  var answer = prompt(who);
  if (answer == expected) alert(joke);
  else askAgain(); // recursion
}
