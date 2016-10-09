var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() { };  
game_state.main.prototype = {

    preload: function() { 
		// Function called first to load all the assets
        game.load.image('hello', 'img/bo2.png');
    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game
        this.hello_sprite = game.add.sprite(250, 300, 'hello');
    },
    
    update: function() {
		// Function called 60 times per second
        this.hello_sprite.angle += 1;
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);  
game.state.start('main'); 