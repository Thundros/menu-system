
	var OptionsScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize : 

		function OptionsScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'OptionsScene', 
				active : false, 

			} );

		}, 

		CreateGameButton : function ( __objData ) {

			this.__objData = __objData;

			this.__buttonObj = {

				scene : this.__objData.scene, 
				x : this.__objData.x, 
				y : this.__objData.y, 
				key1 : this.__objData.key1, 
				key2 : this.__objData.key2, 
				text : this.__objData.text, 
				targetScene : this.__objData.targetScene, 
				locked : this.__objData.locked, 

			}

			this.__buttons = new Button ( this.__buttonObj.scene, {

				x : this.__buttonObj.x, 
				y : this.__buttonObj.y, 
				key1 : this.__buttonObj.key1, 
				key2 : this.__buttonObj.key2, 
				text : this.__buttonObj.text, 
				targetScene : this.__buttonObj.targetScene, 
				locked : this.__buttonObj.locked, 

			} );

			return this.__buttons;

		}, 

		create : function ( ) {

			this.model = this.sys.game.globals.model;

			this.__CONFIG_WIDTH = ( __config.width );
			this.__CONFIG_HEIGHT = ( __config.height );

			this.__CONFIG_HALF_WIDTH = ( this.__CONFIG_WIDTH / 2 );
			this.__CONFIG_HALF_HEIGHT = ( this.__CONFIG_HEIGHT / 2 );

			this.__WINDOW_WIDTH = ( window.innerWidth );
			this.__WINDOW_HEIGHT = ( window.innerHeight );

			this.__WINDOW_HALF_WIDTH = ( this.__WINDOW_WIDTH / 2 );
			this.__WINDOW_HALF_HEIGHT = ( this.__WINDOW_HEIGHT / 2 );

			this.__textArray = [
				'<', '>', 'Options', 
				'Sound Enabled', 'Music Enabled', 
			];

			this.__musicButtonX = [
				( ( this.__CONFIG_HALF_WIDTH ) - ( 250 / 2 ) ), 
			];

			this.__musicButtonY = [
				( ( this.__CONFIG_HEIGHT ) - ( 385 ) ), 
			];

			this.__soundButtonX = [
				( ( this.__CONFIG_HALF_WIDTH ) - ( 250 / 2 ) ), 
			];

			this.__soundButtonY = [
				( ( this.__CONFIG_HEIGHT ) - ( 455 ) ), 
			];

			this.__optionTitleX = [
				( ( this.__CONFIG_HALF_WIDTH ) - ( 165 / 2 ) ), 
			];

			this.__optionTitleY = [
				( ( this.__CONFIG_HALF_HEIGHT ) - ( 200 ) ), 
			];

			this.__musicLabelX = [
				( ( this.__CONFIG_HALF_WIDTH ) - ( 170 / 2 ) ), 
			];

			this.__musicLabelY = [
				( ( this.__CONFIG_HEIGHT ) - ( 390 ) ), 
			];

			this.__soundLabelX = [
				( ( this.__CONFIG_HALF_WIDTH ) - ( 170 / 2 ) ), 
			];

			this.__soundLabelY = [
				( ( this.__CONFIG_HEIGHT ) - ( 460 ) ), 
			];

			this.__arrowLeftX = [
				( ( this.__CONFIG_HALF_WIDTH / 2 ) - ( 350 / 2 ) + ( 150 / 2 ) ), 
			];

			this.__arrowLeftY = [
				( ( this.__CONFIG_HALF_HEIGHT ) - ( 250 / 2 ) ), 
			];

			this.__arrowRightX = [
				( ( this.__CONFIG_WIDTH / 2 ) + ( 350 / 2 ) - ( 150 / 2 ) ), 
			];

			this.__arrowRightY = [
				( ( this.__CONFIG_HALF_HEIGHT ) - ( 250 / 2 ) ), 
			];

			this.musicButton = this.add.image (
				this.__musicButtonX [ 0 ], 
				this.__musicButtonY [ 0 ], 
				'checkedBox'
			);

			this.soundButton = this.add.image (
				this.__soundButtonX [ 0 ], 
				this.__soundButtonY [ 0 ], 
				'checkedBox'
			);

			this.text = this.add.text (
				( this.__optionTitleX [ 0 ] ), 
				( this.__optionTitleY [ 0 ] ), 
				this.__textArray [ 2 ], 
				{
					fontSize : 40, 
				}
			);

			this.arrowLeft = this.add.text ( this.__arrowLeftX [ 0 ], this.__arrowLeftY [ 0 ], this.__textArray [ 0 ], {
				fontSize : 150, 
			});

			this.arrowRight = this.add.text ( this.__arrowRightX [ 0 ], this.__arrowRightY [ 0 ], this.__textArray [ 1 ], {
				fontSize : 150, 
			});

			this.musicText = this.add.text ( this.__musicLabelX [ 0 ], this.__musicLabelY [ 0 ], 'Music Enabled', {
				fontSize : 24, 
			});

			this.soundText = this.add.text ( this.__soundLabelX [ 0 ], this.__soundLabelY [ 0 ], 'Sound Enabled', {
				fontSize : 24, 
			});

			this.musicButton.setInteractive ( );
			this.soundButton.setInteractive ( );

			this.musicButton.on ( 'pointerdown', function ( ) {
				this.model.musicOn = ( ! ( this.model.musicOn ) );
				this.updateAudio ( );
			}.bind ( this ) );

			this.soundButton.on ( 'pointerdown', function ( ) {
				this.model.soundOn = ( ! ( this.model.soundOn ) );
				this.updateAudio ( );
			}.bind ( this ) );

			this.menuButton = this.CreateGameButton ({
				scene : this,  
				x : ( __config.width / 2 ), 
				y : ( ( __config.height / 2 ) + ( 100 ) ), 
				key1 : 'blueButton1', 
				key2 : 'blueButton2', 
				text : 'Menu', 
				targetScene : 'TitleScene', 
				locked : false, 
			});

			this.updateAudio ( );

		}, 

		updateAudio ( ) {

			console.error ( this.model );

			if ( this.model.musicOn === false ) {

				this.musicButton.setTexture ( 'box' );
				this.sys.game.globals.sound.stop ( );
				this.model.bgMusicPlaying = false;

			}

			else

			{

				this.musicButton.setTexture ( 'checkedBox' );

				if ( this.model.bgMusicPlaying === false ) {

					this.sys.game.globals.sound.play ( );
					this.model.bgMusicPlaying = true;

				}

			}

			if ( this.model.soundOn === false ) {

				this.soundButton.setTexture ( 'box' );

			}

			else

			{

				this.soundButton.setTexture ( 'checkedBox' );

			}

		}

	});


