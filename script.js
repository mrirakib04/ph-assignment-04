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

// best team finder
function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 === "object" && typeof player2 === "object") {
    const player1Sum = player1.foul + player1.cardY + player1.cardR;
    const player2Sum = player2.foul + player2.cardY + player2.cardR;
    if (player1Sum < player2Sum) {
      return player1.name;
    } else if (player1Sum > player2Sum) {
      return player2.name;
    } else {
      return "Tie";
    }
  } else {
    return "Invalid";
  }
}
console.log(
  bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
  )
);
console.log(
  bestTeam(
    { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
    { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
  )
);
console.log(
  bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    { name: "France", foul: 10, cardY: 2, cardR: 1 }
  )
);
console.log(
  bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
);

console.log("------------------------------");
