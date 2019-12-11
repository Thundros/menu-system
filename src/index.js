
	window.onload = function ( ) {

		this.stats = new Stats ( );
		document.body.appendChild ( this.stats.dom );
		this.__game = new Phaser.Game ( this.__config );
		window.focus ( );

	}


