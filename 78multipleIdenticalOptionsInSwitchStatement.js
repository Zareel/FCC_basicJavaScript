//* Multiple Identical Options in Switch Statements

/*
Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.
*/

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      return (answer = "Low");
      break;
    case 4:
    case 5:
    case 6:
      return (answer = "Mid");
      break;
    case 7:
    case 8:
    case 9:
      return (answer = "High");
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(5));
