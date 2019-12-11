
	var GameScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize : 

		function GameScene ( )

		{

			Phaser.Scene.call (

				this, {
					key : 'GameScene', 
					active : false, 
				}

			);

		}, 

		centerX : function ( )

		{

			return ( this.sys.game.config.width / 2 );

		}, 

		centerY : function ( )

		{

			return ( this.sys.game.config.height / 2 );

		}, 

		preload : function ( )

		{

			console.log ( 'HELLO FROM GAME SCENE!' );

			// load images

			this.load.image ( 'logo', 'assets/logo.png' );

		}, 

		create : function ( )

		{

			this.add.image ( ( window.innerWidth / 2 ), this.centerY ( ) - 50, 'logo' );

		}, 

		update : function ( )

		{

		}

	});


