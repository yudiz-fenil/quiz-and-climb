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

		// dice
		const dice = new Dice(this, 540, 1633);
		this.add.existing(dice);

		// container_quiz
		const container_quiz = this.add.container(0, 0);
		container_quiz.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(546, 949, 128, 128);
		rectangle_1.scaleX = 9;
		rectangle_1.scaleY = 15;
		rectangle_1.alpha = 0.8;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 1250067;
		container_quiz.add(rectangle_1);

		// quiz
		const quiz = new Quiz(this, 535, 1003);
		container_quiz.add(quiz);

		// container_players
		const container_players = this.add.container(0, 0);

		this.dice = dice;
		this.container_quiz = container_quiz;
		this.quiz = quiz;
		this.container_players = container_players;

		this.events.emit("scene-awake");
	}

	/** @type {Dice} */
	dice;
	/** @type {Phaser.GameObjects.Container} */
	container_quiz;
	/** @type {Quiz} */
	quiz;
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
		this.oSocketManager.emit('reqAnswer', { iOptionId: iOptionId, iQuestionId: this.oQuizeManager.questionId });
	}
	reqRollDice = () => this.oSocketManager.emit("reqRollDice", {});
	reqPlayerPosition = () => this.oSocketManager.emit("reqPlayerPosition", {});
	setQuestonTimer = ({ nTotalTurnTime, ttl }) => {
		this.time1 = ttl / 1000
		this.energyContainer = this.add.sprite(551, 776, "Green-Time-bar-inside-fill");
		this.container_quiz.add(this.energyContainer);
		this.energyBar = this.add.sprite(this.energyContainer.x + 3, this.energyContainer.y, "Green-Tima-bar-fill");
		this.container_quiz.add(this.energyBar);
		this.energyBarMask = this.add.sprite(this.energyContainer.x + 3, this.energyContainer.y, "Green-Tima-bar-fill");
		this.container_quiz.add(this.energyBarMask);
		this.energyBarMask.visible = false;
		this.energyBar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energyBarMask);
		this.gameTimer = this.time.addEvent({
			delay: 600,
			callback: function () {
				this.timeLeft--;
				this.stepWidth = this.energyBarMask.displayWidth / this.time1;
				this.energyBarMask.x -= this.stepWidth;
			},
			callbackScope: this,
			loop: true
		});

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
