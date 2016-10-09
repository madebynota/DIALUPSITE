var game = new Phaser.Game(500, 700, Phaser.AUTO, 'game');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() { };  
game_state.main.prototype = {

    preload: function() { 
		// Function called first to load all the assets
        game.load.image('sprite', 'img/bo2.png');
    },

    create: function() { 
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