
	var TitleScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize : 

		function TitleScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'TitleScene', 
				active : true, 

			} );

		}, 

		preload : function ( ) {

			console.log ( 'HELLO FROM TITLE SCENE!' );

			this.__stats = new Stats ( );
			document.body.appendChild ( this.__stats.dom );

		}, 

		create : function ( ) {

			this.__scene = this;

			this.model = this.sys.game.globals.model;

			if ( ( this.model.musicOn === true ) && ( this.model.bgMusicPlaying === false ) ) {

				this.bgMusic = this.sound.add ( 'bgMusic', {
					volume : 0.5, 
					loop : true, 
				});

				if ( this.bgMusic ) {

					console.log ( this.bgMusic );

					this.bgMusic.play ( );
					this.sound.pauseOnBlur = false;
					this.model.bgMusicPlaying = true;
					this.sys.game.globals.bgMusic = this.bgMusic;

				}

			}

		}, 

		update : function ( ) {

			this.__stats.update ( );

		}

	});


