var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;
// Function Expression
var fight = function () {
  alert("Welcome to Robot Gladiator!");

  var promptFight = prompt(
    "Would you like to FIGHT or SKIP this battle? Eneter 'FIGHT' or 'SKIP' to choose."
  );
  // if player choses to fight, then fight.
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable.
    enemyHealth = enemyHealth - playerAttack;
    //   Log a resulting message to the console.
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // Check enemy's health
    if (enemyHealth <= 0) {
      alert(enemyName + " has died!");
    } else {
      alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //remove player's health by subtracting the amount set in the enemyAttack variable.
    playerHealth = playerHealth - enemyAttack;

    if (playerHealth <= 0) {
      alert(playerName + " has died!");
    } else {
      alert(playerName + " still has " + playerHealth + " health left.");
    }
    // Log a resulting message to the console to confirm that it worked.
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaing."
    );
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip.
    var confirmSkip = confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight.
    if (confirmSkip) {
      alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping.
      playerMoney = playerMoney - 2;
      console.log("Since you skipped, the players current money is: " + playerMoney);
    } else {
      fight();
    }
  } else {
    alert("You need to choose a valid option. Try again!");
  }
};

fight();
