// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// player_shadow
		const player_shadow = scene.add.sprite(0, 0, "green-shadow", 0);
		player_shadow.scaleX = 0.46;
		player_shadow.scaleY = 0.6;
		player_shadow.visible = false;
		this.add(player_shadow);

		// player_background
		const player_background = scene.add.image(0, 0, "player-one-background");
		this.add(player_background);

		// player_picture
		const player_picture = scene.add.image(-141, -22, "player-avtar-01");
		player_picture.scaleX = 0.5;
		player_picture.scaleY = 0.5;
		this.add(player_picture);

		// text_username
		const text_username = scene.add.text(-198, 75, "", {});
		text_username.setOrigin(0, 0.5);
		text_username.text = "username";
		text_username.setStyle({ "fontSize": "26px" });
		this.add(text_username);

		// container_heart
		const container_heart = scene.add.container(170, -24);
		this.add(container_heart);

		// heart_1
		const heart_1 = scene.add.image(0, 46, "player-one-heart");
		container_heart.add(heart_1);

		// heart_2
		const heart_2 = scene.add.image(0, 1, "player-one-heart");
		container_heart.add(heart_2);

		// heart_3
		const heart_3 = scene.add.image(0, -43, "player-one-heart");
		container_heart.add(heart_3);

		// container_score
		const container_score = scene.add.container(37, 11);
		this.add(container_score);

		// text_1
		const text_1 = scene.add.text(0, 0, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Score";
		text_1.setStyle({ "align": "center", "fontSize": "56px", "fontStyle": "bold" });
		container_score.add(text_1);

		// text_score
		const text_score = scene.add.text(0, -60, "", {});
		text_score.setOrigin(0.5, 0.5);
		text_score.text = "0";
		text_score.setStyle({ "align": "center", "fontSize": "76px", "fontStyle": "bold" });
		container_score.add(text_score);

		// container_answer_question
		const container_answer_question = scene.add.container(0, 0);
		container_answer_question.visible = false;
		this.add(container_answer_question);

		// box_answer
		const box_answer = scene.add.image(-82, -125, "box-answer");
		box_answer.scaleX = 1.2;
		box_answer.scaleY = 1.2;
		container_answer_question.add(box_answer);

		// text_username_1
		const text_username_1 = scene.add.text(-212, -134, "", {});
		text_username_1.setOrigin(0, 0.5);
		text_username_1.text = "Answering Question";
		text_username_1.setStyle({ "fontSize": "24px" });
		container_answer_question.add(text_username_1);

		// pawn
		const pawn = scene.add.image(144, 75, "green-pawn");
		this.add(pawn);

		this.player_shadow = player_shadow;
		this.player_background = player_background;
		this.player_picture = player_picture;
		this.text_username = text_username;
		this.container_heart = container_heart;
		this.container_score = container_score;
		this.text_score = text_score;
		this.container_answer_question = container_answer_question;
		this.text_username_1 = text_username_1;
		this.pawn = pawn;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		this.x = x
		this.y = y
		this.nPawnMoveDelay = 500;
		this.aPawns = this.oScene.oGameManager.aPawns;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	player_shadow;
	/** @type {Phaser.GameObjects.Image} */
	player_background;
	/** @type {Phaser.GameObjects.Image} */
	player_picture;
	/** @type {Phaser.GameObjects.Text} */
	text_username;
	/** @type {Phaser.GameObjects.Container} */
	container_heart;
	/** @type {Phaser.GameObjects.Container} */
	container_score;
	/** @type {Phaser.GameObjects.Text} */
	text_score;
	/** @type {Phaser.GameObjects.Container} */
	container_answer_question;
	/** @type {Phaser.GameObjects.Text} */
	text_username_1;
	/** @type {Phaser.GameObjects.Image} */
	pawn;

	/* START-USER-CODE */

	// Write your code here.
	setRightSidePLayer = () => {
		this.container_heart.setX(-170);
		this.player_picture.setX(141);
		this.container_score.setX(-37);
		this.text_username.setOrigin(1, 0.5);
		this.text_username.setX(198);
		this.pawn.setX(-144);
	};
	setPlayerUI = (background, profile, heartTexture, pawnTexture, shadowTexture, nPawnIndex, nPLayerIndex) => {
		this.player_background.setTexture(background);
		this.player_picture.setTexture(profile);
		this.pawn.setTexture(pawnTexture);
		this.player_shadow.setTexture(shadowTexture, 0);
		this.container_heart.list.forEach((heart) => {
			heart.setTexture(heartTexture);
		});
		if (nPawnIndex != -1) {
			const pawnX = this.oScene.game.container_map_board.list[nPawnIndex].x - this.x
			const pawnY = this.oScene.game.container_map_board.list[nPawnIndex].y - this.y
			this.pawn.setPosition(pawnX, pawnY);
			this.aPawns[nPLayerIndex].position = nPawnIndex
			this.aPawns[nPLayerIndex].finalPosition = nPawnIndex
		}
	};
	setUsername = (username) => this.text_username.setText(username.length > 17 ? username.slice(0, 16) + "..." : username);
	setScore = (score) => this.text_score.setText(score);
	setHealth = (nTurnMissed) => {
		for (let i = 0; i < nTurnMissed; i++) {
			this.container_heart.list[i].setVisible(false);
		}
	};
	playShadowAnimation = (key) => {
		this.player_shadow.setVisible(true);
		this.player_shadow.anims.play(key, true);
	}
	stopShadowAnimation = () => {
		this.player_shadow.setVisible(false);
		this.player_shadow.anims.stop();
	}
	playMoveAnimation = (nPawn, nMove, oScore) => {
		let delay = 0;
		const oToken = this.aPawns[nPawn];
		const nDestination = oToken.position + nMove;
		if (nDestination > 99) return false;
		let s = oToken.position + 1;
		for (let i = 1; i <= nMove; i++) {
			const posX = this.oScene.game.container_map_board.list[s].x - this.x
			const posY = this.oScene.game.container_map_board.list[s].y - this.y;
			this.oScene.tweens.add({
				targets: this.pawn,
				x: posX,
				y: posY,
				ease: "Power3",
				duration: this.nPawnMoveDelay,
				delay: delay,
				onComplete: () => {
					this.pawn.setScale(1, 1);
					oToken.position = s;
					if (i == nMove) {
						this.aPawns[nPawn].finalPosition = nDestination;
						if (!this.checkSnakeLadder(nPawn, nDestination, oScore)) {
							this.checkForSamePosition(s, posX, posY);
						}
					}
				},
			});
			if (i != nMove) s++;
			delay += this.nPawnMoveDelay;
		}
	}
	checkSnakeLadder(nPawn, nDestination, oScore) {
		const oPawns = this.aPawns[nPawn];
		const aSnakeLadder = this.oScene.oGameManager.aSnakeLadder;
		for (let i = 0; i < aSnakeLadder.length; i++) {
			const ladder = aSnakeLadder[i];
			if (ladder.nStart == nDestination) {
				oPawns.position = ladder.nEnd - 1;
				oPawns.finalPosition = ladder.nEnd - 1;
				this.playMoveAnimation(nPawn, 1, oScore);
				return true;
			}
		}
		return false;
	}
	checkForSamePosition(nDestination, posX, posY) {
		if (nDestination < 0) return;
		const aPawnsWithSamePosition = [];
		for (let i = 0; i < this.aPawns.length; i++) {
			const oPawn = this.aPawns[i];
			if (oPawn.position == nDestination) {
				aPawnsWithSamePosition.push(oPawn.pawn);
			}
		}
		// this.arrangePawns(aPawnsWithSamePosition, nDestination, posX, posY);
	}
	arrangePawns(aPawns, nDestination, posX, posY) {
		// let posX = this.oScene.game.container_map_board.list[nDestination].x - this.x;
		// let posY = this.oScene.game.container_map_board.list[nDestination].y - this.y;
		switch (aPawns.length) {
			case 1:
				console.log('case 1', aPawns[0].texture.key, 'posX', posX, 'posY', posY);
				aPawns[0].setScale(1, 1);
				aPawns[0].setPosition(posX, posY);
				break;
			case 2:
				aPawns.forEach((pawn) => {
					console.log('case 2', pawn.texture.key, 'posX', posX, 'posY', posY);
					pawn.setScale(0.8, 0.8);
					pawn.x = posX - 20;
					pawn.y = posY;
					// pawn.setPosition(posX - 20, posY);
					posX += 40;
				});
				break;
			case 3:
				aPawns.forEach((pawn) => {
					console.log('case 3', pawn.texture.key, 'posX', posX, 'posY', posY);
					pawn.setScale(0.7, 0.7);
					pawn.x = posX - 30;
					pawn.y = posY;
					// pawn.setPosition(posX - 30, posY);
					posX += 30;
				});
				break;
			case 4:
				aPawns.forEach((pawn, i) => {
					console.log('case 4', pawn.texture.key, 'posX', posX, 'posY', posY);
					pawn.setScale(0.6, 0.6);
					if (i % 2) {
						aPawns[1].setPosition(posX + 15, posY - 15);
						aPawns[3].setPosition(posX + 15, posY + 15);
					} else {
						aPawns[0].setPosition(posX - 15, posY - 15);
						aPawns[2].setPosition(posX - 15, posY + 15);
					}
				});
				break;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
