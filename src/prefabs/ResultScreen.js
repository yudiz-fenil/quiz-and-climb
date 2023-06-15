
// You can write more code here

/* START OF COMPILED CODE */

class ResultScreen extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// player_name_board
		const player_name_board = scene.add.image(0, 0, "Player-name-board");
		player_name_board.scaleX = 0.7;
		player_name_board.scaleY = 0.7;
		this.add(player_name_board);

		// playerName
		const playerName = scene.add.text(-325, 0, "", {});
		playerName.setOrigin(0, 0.5);
		playerName.text = "player! vfhd00";
		playerName.setStyle({ "fontSize": "30px" });
		this.add(playerName);

		// playerScore
		const playerScore = scene.add.text(0, 0, "", {});
		playerScore.setOrigin(0.5, 0.5);
		playerScore.text = "255";
		playerScore.setStyle({ "fontSize": "30px" });
		this.add(playerScore);

		// playerWinning
		const playerWinning = scene.add.text(248, 0, "", {});
		playerWinning.setOrigin(0.5, 0.5);
		playerWinning.text = "800";
		playerWinning.setStyle({ "fontSize": "30px" });
		this.add(playerWinning);

		this.playerName = playerName;
		this.playerScore = playerScore;
		this.playerWinning = playerWinning;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	playerName;
	/** @type {Phaser.GameObjects.Text} */
	playerScore;
	/** @type {Phaser.GameObjects.Text} */
	playerWinning;

	/* START-USER-CODE */

	// Write your code here.
	setWinnerData = (data) => {
		console.log("data", data);
		this.playerName.text = data.sUserName.length > 14 ? data.sUserName.slice(0, 13) + "..." : data.sUserName;
		this.playerWinning.text = data.nWinningAmount;
		this.playerScore.text = data.oScore.nTotalScore;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
