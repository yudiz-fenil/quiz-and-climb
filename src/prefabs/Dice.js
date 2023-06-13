
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

		this.timer = timer;
		this.dice_bgs = dice_bgs;
		this.dice = dice;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		this.x = x;
		this.y = y;
		this.shape = this.oScene.add.graphics();
		this.shape.visible = false;
		const makeShape = this.shape.createGeometryMask();
		this.timer.setMask(makeShape);
		this.shape.x = this.timer.x;
		this.shape.y = this.timer.y;
		this.dice.on('pointerdown', () => {
			this.diceClickHandler();
		})
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	timer;
	/** @type {Phaser.GameObjects.Image} */
	dice_bgs;
	/** @type {Phaser.GameObjects.Sprite} */
	dice;

	/* START-USER-CODE */

	// Write your code here.
	// resDiceTurn = ({ iUserId, ttl, nTotalTurnTime, oScore }) => {
	// 	if (this.oScene.oGameManager.ownPlayerId == iUserId) {
	// 		this.dice.setInteractive();
	// 	}
	// 	this.oScene.container_quiz.visible = false;
	// }
	// resRollDice = ({ iUserId, nDice, oScore }) => {
	// 	if (this.oScene.oGameManager.ownPlayerId == iUserId) {
	// 		this.dice.setTexture("dice", nDice - 1)
	// 		this.oScene.reqPlayerPosition();
	// 	} else {
	// 		this.dice.anims.play("dice-roll", true).once('animationcomplete', () => {
	// 			this.dice.setTexture("dice", nDice - 1)
	// 		});
	// 	}
	// }
	diceClickHandler = () => {
		this.dice.disableInteractive();
		this.dice.anims.play("dice-roll", true).once('animationcomplete', () => {
			this.oScene.reqRollDice();
		});
	}
	resTurnTimer = (ttl , nTotalTurnTime) => {
		console.log(ttl , nTotalTurnTime);
		this.intervalTimerReset();
		this.timer.visible = true;
		let ttl1 = ttl / 1000;
		let start = 90;
		let end = 360 / ttl1;
		let temp = end;
		let self = this;
		this.intervalTimer = setInterval(() => {
			this.shape.slice(this.x,this.y , 128 , Phaser.Math.DegToRad(start),Phaser.Math.DegToRad(start + end)).fill();
			if(end >= 360){
				self.intervalTimerReset();
			}
			end += (temp / 10);
		}, 100)
	}
	intervalTimerReset = () => {
		this.shape.clear();
		this.timer.clearTint();
		this.timer.tintFill = false;
		this.timer.visible = false;
		clearInterval(this.intervalTimer);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
