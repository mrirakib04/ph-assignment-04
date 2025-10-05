// fine calculation
function totalFine(fare) {
  // You have to write your code here
  if (typeof fare === "number" && fare > 0) {
    // return (fare + fare * (20 / 100) + 30).toFixed(2);
    return fare + fare * (20 / 100) + 30;
  } else {
    return "Invalid";
  }
}
console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-35));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));

console.log("------------------------------");

// character checker
function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str === "string") {
    let newStr = "";
    str.split(" ").forEach((word) => {
      newStr += word;
    });
    return newStr.toUpperCase();
  } else {
    return "Invalid";
  }
}
console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter("Serv er : : Do wn"));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));

console.log("------------------------------");
