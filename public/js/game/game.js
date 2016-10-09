var game = new Phaser.Game(500, 700, Phaser.AUTO, 'game');
var game_state = {};
var platforms;

// Creates a new 'main' state that wil contain the game
game_state.main = function() { };  
game_state.main.prototype = {

    preload: function() { 
		// Function called first to load all the assets
        game.load.image('sky', 'img/game/sky.jpg');
        game.load.image('ground', 'img/game/ground.png');
        game.load.image('sprite', 'img/bo2.png', 3, 4);
    },

    create: function() { 
        cursors = game.input.keyboard.createCursorKeys();

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A simple background for our game
        game.add.sprite(0, 0, 'sky');

        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = game.add.group();

        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;

        // Here we create the ground.
        var ground = platforms.create(-10, game.world.height - 64, 'ground');

        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        ground.scale.setTo(2, 2);

        //  This stops it from falling away when you jump on it
        ground.body.immovable = true;


      // The player and its settings
      player = game.add.sprite(32, game.world.height - 350, 'sprite');

      //  We need to enable physics on the player
      game.physics.arcade.enable(player);

      //  Player physics properties. Give the little guy a slight bounce.
      player.body.bounce.y = 0.2;
      player.body.gravity.y = 300;
      player.body.collideWorldBounds = true;

      player.scale.setTo(0.25, 0.25);
    },
    
    update: function() {
   var hitPlatform = game.physics.arcade.collide(player, platforms);
		// Function called 60 times per second
      player.body.velocity.x = 0;
    if (cursors.left.isDown)
      {
          //  Move to the left
          player.body.velocity.x = -150;
      }
      else if (cursors.right.isDown)
      {
          //  Move to the right
          player.body.velocity.x = 150;
      }
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);  
game.state.start('main'); 
