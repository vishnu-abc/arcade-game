// Enemies our player must avoid
// Variables applied to each of our instances go here,
// we've provided one for you to get started
//The enemy variable sets a anonymous function() which sets  position of  all enemies
var Enemy = function(x, y) {
  this.x = x;
  this.y = y;
  this.x1 = x;
  this.y1 = y;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
Enemy.prototype.update = function(dt) {
  //Using for we are getting the length of enemy and setting speed for each enenmy
  for (var i = 0; i < allEnemies.length; i++) {
    allEnemies[i].speed = 300;
  }
  this.x = this.x + this.speed * dt;
  //if condition checks the position of the enemy and if the enemy is at the end, then the reset function calls and it returns to it's initial position
  if (this.x >= 500) {
    this.reset();
  }
  //if condition specifies the collision of the player with bugs, if the condition is true then the SweetAlert() function calls, states that the gamer lost his game
  if (player.x >= this.x - 40 && player.x <= this.x + 40 && player.y >= this.y - 40 && player.y <= this.y + 40) {
    player.x = 200;
    player.y = 400;
    swal("", "");
    swal({
      title: "sorry😌🙁",
      text: "You lost the game",
      type: "error",
      confirmButtonText: "Play again"
    }, function() {
      location.reload();
    })
  }

};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [new Enemy(-0, 50), new Enemy(-400, 150), new Enemy(-300, 230), new Enemy(-350, 60)];
// Now write your own player class
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};
Enemy.prototype.reset = function() {
  this.x = this.x1;
  this.y = this.y1;
}
var player = new Player(200, 400);
// Place the player object in a variable called player
// This class requires an update(), render()
Player.prototype.update = function(dt) {

};

// a handleInput() method.
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//The handleInput() method calls an anonymous function() which sets the moment of the player
Player.prototype.handleInput = function(move) {
  if (move == 'left' && this.x > 30) {
    this.x = this.x - 100;
  }
  if (move == 'right' && this.x < 380) {
    this.x = this.x + 100;
  }
  if (move == 'up' && this.y > -1) {
    this.y = this.y - 82;
  }
  if (move == 'down' && this.y < 390) {
    this.y = this.y + 82;
  }
  //If the condition which is mentioned in the statement is true then the SweetAlert() function calls, states that the gamer completes his game
  if (this.y < 40) {
    swal({
      title: "Congratulations🎊🤩🎊",
      text: "You won the game",
      type: "success",
      confirmButtonText: "Play again"
    }, function() {
      location.reload();
    })
    this.removeEventListner(event.type, handleInput);
    document.getElementById("attempt").innerHTML = attempt;
  }
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
