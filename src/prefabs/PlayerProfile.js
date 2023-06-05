
// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -120, y ?? -42);

		// player_four_background
		const player_four_background = scene.add.image(120, 42, "player-four-background");
		this.add(player_four_background);

		// player_avtar_01
		const player_avtar_01 = scene.add.image(-24, 15, "player-avtar-01");
		player_avtar_01.scaleX = 0.5;
		player_avtar_01.scaleY = 0.5;
		this.add(player_avtar_01);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
