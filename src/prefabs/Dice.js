
// You can write more code here

/* START OF COMPILED CODE */

class Dice extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// timer
		const timer = scene.add.image(0, 0, "timer");
		timer.scaleX = 1.35;
		timer.scaleY = 1.35;
		this.add(timer);

		// dice_bgs
		const dice_bgs = scene.add.image(0, 0, "dice-bg");
		dice_bgs.scaleX = 0.6;
		dice_bgs.scaleY = 0.6;
		this.add(dice_bgs);

		// dice
		const dice = scene.add.sprite(0, 0, "dice", 0);
		this.add(dice);

		this.dice_bgs = dice_bgs;
		this.dice = dice;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	dice_bgs;
	/** @type {Phaser.GameObjects.Sprite} */
	dice;

	/* START-USER-CODE */

	// Write your code here.
	resRollDice = ({ iUserId, nDice, oScore }) => {
		this.dice.setTexture("dice", nDice - 1)
		if(this.oScene.oGameManager.ownPlayerId == iUserId){
			this.oScene.reqPlayerPosition();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
