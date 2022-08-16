// Game States
// "WIN" - Player robot has defeated all enemy-robots.
//  * Fight all enemy-robots.
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less.

var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Function Expression
var fight = function (enemyName) {
  // repeat and execute as long as the enemy-robot is alive.
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = prompt(
      "Would you like to FIGHT or SKIP this battle? Eneter 'FIGHT' or 'SKIP' to choose."
    );

    // if player picks "skip" confirm and then stop the loop.
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip.
      var confirmSkip = confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight.
      if (confirmSkip) {
        alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping.
        playerMoney = playerMoney - 2;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
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
      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while loop since enemy is dead.
      break;
    } else {
      alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //remove player's health by subtracting the amount set in the enemyAttack variable.
    playerHealth = playerHealth - enemyAttack;

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
    // check player's health.
    if (playerHealth <= 0) {
      alert(playerName + " has died!");

      // break out of while loop since player is died.
      break;
    } else {
      alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

var startGame = function () {
  for (var i = 0; i <= enemyNames.length; i++) {
    debugger;
    if (playerHealth > 0) {
      // lets the player know what round they are in.
      alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    } else {
      alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
};
//start the game when the page loads.
startGame();
