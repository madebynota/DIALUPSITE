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
        game.load.image('sprite', 'img/bo2.png', 32, 48);
    },

    create: function() { 
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

    	// Fuction called after 'preload' to setup the game
        this.sprite = game.add.sprite(30, 30, 'sprite');
    },
    
    update: function() {
		// Function called 60 times per second
        var sprite = this.sprite;
        sprite.angle += 1;
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);  
game.state.start('main'); 