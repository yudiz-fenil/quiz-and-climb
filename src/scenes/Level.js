// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_background
		const container_background = this.add.container(540, 960);

		// game_background
		const game_background = this.add.image(0, 0, "game-background");
		container_background.add(game_background);

		// game
		const game = new Game(this, 0, 0);
		this.add.existing(game);

		// container_quiz
		const container_quiz = this.add.container(0, 0);
		container_quiz.visible = false;

		// quiz
		const quiz = new Quiz(this, 535, 1002);
		container_quiz.add(quiz);

		// dice
		const dice = new Dice(this, 540, 1633);
		this.add.existing(dice);

		// container_players
		const container_players = this.add.container(0, 0);

		this.container_quiz = container_quiz;
		this.quiz = quiz;
		this.dice = dice;
		this.container_players = container_players;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_quiz;
	/** @type {Quiz} */
	quiz;
	/** @type {Dice} */
	dice;
	/** @type {Phaser.GameObjects.Container} */
	container_players;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.oQuizeManager = new QuizeManager(this);
		this.oInputManager = new InputManager(this);
		this.oPlayerManager = new PlayerManager(this);
		this.oGameManager = new GameManager(this);
		this.instantiateSocketManager();
	}

	instantiateSocketManager = () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const iBoardId = urlParams.get("iBoardId");
		const sAuthToken = urlParams.get("sAuthToken");
		const sRootUrl = urlParams.get("sRootUrl");
		this.oSocketManager = new SocketManager(
			this,
			iBoardId,
			sAuthToken,
			sRootUrl
		);
	}
	reqAnswer = (iOptionId) => {
		console.log("iOptionId", iOptionId, this.oQuizeManager.questionId);
		this.oSocketManager.emit("reqAnswer", { iOptionId: iOptionId, iQuestionId: this.oQuizeManager.questionId });
	}

	reqRollDice = () => {
		this.oSocketManager.emit("reqRollDice");
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
