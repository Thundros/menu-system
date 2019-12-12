
	var PreloaderScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize : 

		function PreloaderScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'PreloaderScene', 
				active : true, 

			} );

		}, 

		centerX : function ( ) {

			return ( this.sys.game.config.width / 2 );

		}, 

		centerY : function ( ) {

			return ( this.sys.game.config.height / 2 );

		}, 

		init : function ( ) {

			this.readyCount = 0;

		}, 

		preload : function ( ) {

			console.log ( 'HELLO FROM PRELOADERSCENE!' );

			this.load.audio ( 'bgMusic', [
				'assets/TownTheme.mp3', 
			] );

		}, 

		ready : function ( ) {

			this.scene.start ( 'Title' );
			this.readyCount++;
			if ( this.readyCount === 2 ) { this.scene.start ( 'Title' ); }

		}

	});


