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
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player picks "skip" confirm and then stop the loop.
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip.
      var confirmSkip = confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight.
      if (confirmSkip) {
        alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping.
        playerMoney = Math.max(0, playerMoney - 2);
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    // generate random damage value based on players attack power.
    var damage = randomNumber(playerAttack - 3, playerAttack);

    // remove enemy's health by subtracting the amount set in the playerAttack variable.
    enemyHealth = Math.max(0, enemyHealth - damage);
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
    playerHealth = Math.max(0, playerHealth - enemyAttack);

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

// function to start a new game.
var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    // debugger;
    if (playerHealth > 0) {
      // lets the player know what round they are in.
      alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight

      enemyHealth = randomNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if player is still alive and we're not at the last enemy in the array.

      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round.
        var storeConfirm = confirm(
          "The fight is over, visit the store before the next round?"
        );

        // if yes, take to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};
var endGame = function () {
  // if player is still alive
  if (playerHealth > 0) {
    alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    alert("You've lost your robot in battle.");
  }

  var playAgainConfirm = confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart game
    startGame();
  } else {
    alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
var shop = function () {
  // ask player what they's like to do
  var shopOptionPrompt = prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        alert("Refilling player's health by 20 for 7 dollars.");

        //increase health and decrease money.
        playerHealth = playerHealth + 20;
        playerMoney = Math.max(0, playerMoney - 7);
      } else {
        alert("You don't have enough money!");
      }

      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        alert("Upgrading player's attack by 6 for 7 dollars.");

        // increase attack and decrease money.
        playerAttack = playerAttack + 6;
        playerMoney = Math.max(0, playerMoney - 7);
      } else {
        alert(" You don't have enough money!");
      }

      break;
    case "LEAVE":
    case "leave":
      alert("Leaving the store.");
      // do nothing, so function will end.
      break;
    default:
      alert("You did not pick a valid option. Try again.");
      // call shop() again to force player to pick a valid option.
      shop();
      break;
  }
};
var randomNumber = function (min, max) {
  // Math.random() generates numbers 0 - 20.xxx.
  // Math.floor() rounds down number to nearest whole.
  // Math.floor(Math.random() * 21) + 40; -> If the random number is 0, we
  // at least have 40. If the random number is 20, we have our upper limit: 60.
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

//start the game when the page loads.
startGame();
