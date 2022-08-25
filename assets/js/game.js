// Game States
// "WIN" - Player robot has defeated all enemy-robots.
//  * Fight all enemy-robots.
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less.

// Function Expression
var fight = function (enemy) {
  // console.log(enemy);

  // repeat and execute as long as the enemy-robot is alive.
  while (playerInfo.health > 0 && enemy.health > 0) {
    var promptFight = prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player picks "skip" confirm and then stop the loop.
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip.
      var confirmSkip = confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight.
      if (confirmSkip) {
        alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerInfo.money for skipping.
        playerInfo.money = Math.max(0, playerInfo.money - 2);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }
    // generate random damage value based on players attack power.
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable.
    enemy.health = Math.max(0, enemy.health - damage);
    //   Log a resulting message to the console.
    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    // Check enemy's health
    if (enemy.health <= 0) {
      alert(enemy.name + " has died!");
      // award player money for winning
      playerInfo.money = playerInfo.money + 20;
      // leave while loop since enemy is dead.
      break;
    } else {
      alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    //remove player's health by subtracting the amount set in the enemy.attack variable.
    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);

    // Log a resulting message to the console to confirm that it worked.
    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaing."
    );
    // check player's health.
    if (playerInfo.health <= 0) {
      alert(playerInfo.name + " has died!");

      // break out of while loop since player is died.
      break;
    } else {
      alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  }
};

// function to start a new game.
var startGame = function () {
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    
    if (playerInfo.health > 0) {
      // lets the player know what round they are in.
      alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight

      pickedEnemyObj.health = randomNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code

      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array.

      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
    alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
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
      playerInfo.refillHealth();
      break;
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
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

var getPlayerName = function (){
  var name = "";

  while (name === "" || name === null){
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
};
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      alert("You don't have enough money!");
    }
  },
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];

//start the game when the page loads.
startGame();
