// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// player_background
		const player_background = scene.add.image(0, 0, "player-one-background");
		this.add(player_background);

		// player_picture
		const player_picture = scene.add.image(-141, -23, "player-avtar-01");
		player_picture.scaleX = 0.5;
		player_picture.scaleY = 0.5;
		this.add(player_picture);

		// text_username
		const text_username = scene.add.text(-198, 80, "", {});
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
		const container_score = scene.add.container(37, 10);
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

		// green_pawn
		const green_pawn = scene.add.image(144, 75, "green-pawn");
		this.add(green_pawn);

		this.player_background = player_background;
		this.player_picture = player_picture;
		this.text_username = text_username;
		this.container_heart = container_heart;
		this.container_score = container_score;
		this.text_score = text_score;

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

	/* START-USER-CODE */

  // Write your code here.
  nTotalPlayers = 2;


  setRightSidePLayer = () => {
    this.container_heart.setX(-170);
    this.player_picture.setX(141);
    this.container_score.setX(-37);
    this.text_username.setOrigin(1, 0.5);
    this.text_username.setX(198);
  };
  setPlayerUI = (background, profile, heartTexture) => {
    this.player_background.setTexture(background);
    this.player_picture.setTexture(profile);
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
    this.container_heart.list.forEach((heart) => {
      heart.setVisible(false);
    })
  };

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
