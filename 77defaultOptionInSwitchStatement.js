//* Adding a Default Option in Switch Statements

/*
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
*/

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return (answer = "apple");
      break;
    case "b":
      return (answer = "bird");
      break;
    case "c":
      return (answer = "cat");
      break;
    default:
      return (answer = "stuff");
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("p"));
