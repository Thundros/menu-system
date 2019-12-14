
	var GameScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize : 

		function GameScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'GameScene', 
				active : false, 

			} );

		}, 

		createAudio : function ( __objData ) {

			this.__objData = __objData;

			this.__musicID = this.__objData.musicID;
			this.__musicData = this.__objData.musicData;

			this.__lvlMusic = {

				id : this.__musicID, 
				data : this.__musicData, 

			}

			if ( this.model.musicOn === true && this.model.bgMusicPlaying === false ) {

				console.log ( this.__musicID );

				this.music = this.sound.add ( this.__musicID, this.__musicData );

				this.music.play ( );
				this.model.bgMusicPlaying = true;
				this.sys.game.globals.music = this.music;

			}

			else

			{

				this.sys.game.globals.music.stop ( );
				this.model.bgMusicPlaying = false;

			}

			if ( this.model.bgMusicPlaying === false ) {

				this.sys.game.globals.music.play ( );
				this.model.bgMusicPlaying = true;

			}

			return this.__lvlMusic;

		}, 

		preload : function ( ) {

			console.log ( 'HELLO FROM GAME SCENE!' );

			this.__soundTrack = [

				'bgMusic', 'lvl1Music', 

			];

			this.__soundData = [

				{
					volume : 0.1, 
					loop : true, 
				}, 

				{
					volume : 0.5, 
					loop : true, 
				}, 

			];

			this.__stats = new Stats ( );
			document.body.appendChild ( this.__stats.dom );

		}, 

		create : function ( ) {

			this.model = this.sys.game.globals.model;

			this.__soundTrackCount = ( this.__soundTrack.length );

			for ( this.__i = 0; this.__i < ( this.__soundTrackCount ); this.__i++ ) {

				this.__music = this.createAudio ({
					musicID : this.__soundTrack [ this.__i ], 
					musicData : this.__soundData [ this.__i ]
				});

			}

		}, 

		update : function ( ) {

			this.__stats.update ( );

		}

	});


