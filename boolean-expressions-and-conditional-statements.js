const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  choice2 = readline.question("You come across a fork in the road: Do you take the left, middle, or right road?");
      if (choice2 ==="left"){
        console.log("You are attacked by a hungry wolf and are eaten.");
      } else if (choice2 ==="middle"){
        console.log("You find your way to the village.");
      } else if (choice2 ==="right"){
        console.log("You come accross a silver sword.");
          swordChoice = readline.question("Do you pick it up?");
          if (swordChoice === "yes"){
            console.log("You pick it up and make your way back to the fork.")
          }
          else if (swordChoice === "no"){
            console.log("You are reminded of an unpleasant experience and do not pick up the sword. You make your way back to the fork.")
          }
          else {
            console.log("You somehow wander aimlessly into the sword and die.");            
          }
          choice3 = readline.question("You come across a fork in the road: Do you take the left or middle road?");
          if(choice3 ==="left" && swordChoice === "yes"){
            console.log("You run into a hungry wolf who attacks. You are able to kill it and take its pelt as a prize. You make your way back to the fork.");
            hasPelt = true
            choice4 = readline.question("You come across a fork in the road: Do you take the middle road? Yes or no?");
            if (choice4 === "yes"){
              console.log("You find your way to the village.");
            }
            else {
              console.log("You have gone mad and wander around aimlessly. Eventually you fall on your own sword.");
            }
          }
          else if (choice3 ==="left" && swordChoice === "no"){
            console.log("You run into a hungry wolf and are eaten.")
          }
          else {
            console.log("You have gone mad and wander aimlessly.");
          }
      } else {
        console.log("You have gone mad and wander aimlessly.");
      }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}