// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// player_background
		const player_background = scene.add.image(0, 2, "player-one-background");
		this.add(player_background);

		// player_picture
		const player_picture = scene.add.image(-141, -22, "player-avtar-01");
		player_picture.scaleX = 0.5;
		player_picture.scaleY = 0.5;
		this.add(player_picture);

		// text_username
		const text_username = scene.add.text(-198, 81, "", {});
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
		/* END-USER-CTR-CODE */
	}

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
	nTotalPlayers = 2;


	setRightSidePLayer = () => {
		this.container_heart.setX(-170);
		this.player_picture.setX(141);
		this.container_score.setX(-37);
		this.text_username.setOrigin(1, 0.5);
		this.text_username.setX(198);
		this.pawn.setX(-144);
	};
	setPlayerUI = (background, profile, heartTexture, pawnTexture) => {
		this.player_background.setTexture(background);
		this.player_picture.setTexture(profile);
		this.pawn.setTexture(pawnTexture);
		this.container_heart.list.forEach((heart) => {
			heart.setTexture(heartTexture);
		});
	};
	setUsername = (username) => {
		this.text_username.setText(
			username.length > 20 ? username.slice(0, 19) + "..." : username
		);
	};
	setScore = (score) => this.text_score.setText(score);
	setHealth = (nTurnMissed) => {
		console.log("nTurnMissed Count", nTurnMissed);
		for (let i = 0; i < nTurnMissed; i++) {
			this.container_heart.list[i].setVisible(false);
		}
	};

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
