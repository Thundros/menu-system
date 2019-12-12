
	var PreGameScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize : 

		function PreScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'PreGameScene', 
				active : true, 

			} );

			const model = new Model ( );

			__game.globals = {

				model, bgMusic : null, 

			};

		}, 

		preload : function ( ) {

			console.log ( 'HELLO FROM PRE-GAME SCENE!' );

		}, 

		create : function ( ) {

			this.scene.add ( 'Preloader', PreloaderScene );
			this.scene.add ( 'Title', TitleScene );

			this.scene.start ( 'Title' );

		}

	});


