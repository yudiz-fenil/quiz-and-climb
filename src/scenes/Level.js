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

		// container_players
		const container_players = this.add.container(0, 0);

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

		// container_menu
		const container_menu = this.add.container(0, 0);

		// btn_settings
		const btn_settings = this.add.image(100, 100, "setting-button");
		container_menu.add(btn_settings);

		// pot_background
		const pot_background = this.add.image(922, 79, "pot-background");
		container_menu.add(pot_background);

		// game_timer
		const game_timer = this.add.image(540, 92, "game-timer");
		container_menu.add(game_timer);

		// txt_time
		const txt_time = this.add.text(566, 99, "", {});
		txt_time.name = "txt_time";
		txt_time.setOrigin(0.5, 0.5);
		txt_time.text = "00:00";
		txt_time.setStyle({ "align": "center", "fontSize": "40px", "fontStyle": "bold", "maxLines": 2 });
		txt_time.setWordWrapWidth(300);
		container_menu.add(txt_time);

		// txt_pot
		const txt_pot = this.add.text(926, 99, "", {});
		txt_pot.name = "txt_pot";
		txt_pot.setOrigin(0.5, 0.5);
		txt_pot.text = "₹ 3.2";
		txt_pot.setStyle({ "align": "center", "fontSize": "40px", "fontStyle": "bold", "maxLines": 2 });
		txt_pot.setWordWrapWidth(300);
		container_menu.add(txt_pot);

		// txt
		const txt = this.add.text(926, 44, "", {});
		txt.name = "txt";
		txt.setOrigin(0.5, 0.5);
		txt.text = "POT";
		txt.setStyle({ "align": "center", "fontSize": "40px", "fontStyle": "bold", "maxLines": 2 });
		txt.setWordWrapWidth(300);
		container_menu.add(txt);
		// container_resultScreen
		const container_resultScreen = this.add.container(0, 0);
		container_resultScreen.visible = false;

		// rectangle
		const rectangle = this.add.rectangle(545, 948, 128, 128);
		rectangle.scaleX = 9;
		rectangle.scaleY = 15;
		rectangle.alpha = 0.8;
		rectangle.isFilled = true;
		rectangle.fillColor = 1250067;
		container_resultScreen.add(rectangle);

		// result_Screen_Board
		const result_Screen_Board = this.add.image(537, 828, "Result-Screen-Board");
		result_Screen_Board.scaleX = 1.1;
		result_Screen_Board.scaleY = 1.1;
		container_resultScreen.add(result_Screen_Board);

		// play_again_board
		const play_again_board = this.add.image(516, 1217, "Play-again-board");
		container_resultScreen.add(play_again_board);

		// goHomeTxt
		const goHomeTxt = this.add.text(512, 1210, "", {});
		goHomeTxt.setOrigin(0.5, 0.5);
		goHomeTxt.text = "GO TO HOME";
		goHomeTxt.setStyle({ "fontSize": "45px" });
		container_resultScreen.add(goHomeTxt);

		// container_text1
		const container_text1 = this.add.container(0, 0);
		container_resultScreen.add(container_text1);

		// rankTxt
		const rankTxt = this.add.text(183, 677, "", {});
		rankTxt.setOrigin(0.5, 0.5);
		rankTxt.text = "Rank";
		rankTxt.setStyle({ "fontSize": "45px" });
		container_text1.add(rankTxt);

		// nameTxt
		const nameTxt = this.add.text(364, 677, "", {});
		nameTxt.setOrigin(0.5, 0.5);
		nameTxt.text = "Name";
		nameTxt.setStyle({ "fontSize": "45px" });
		container_text1.add(nameTxt);

		// scoreTxt
		const scoreTxt = this.add.text(596, 677, "", {});
		scoreTxt.setOrigin(0.5, 0.5);
		scoreTxt.text = "Score";
		scoreTxt.setStyle({ "fontSize": "45px" });
		container_text1.add(scoreTxt);

		// winningTxt
		const winningTxt = this.add.text(839, 673, "", {});
		winningTxt.setOrigin(0.5, 0.5);
		winningTxt.text = "Winning";
		winningTxt.setStyle({ "fontSize": "45px" });
		container_text1.add(winningTxt);

		// trophy_01
		const trophy_01 = this.add.image(178, 780, "Trophy-01");
		trophy_01.visible = false;
		container_resultScreen.add(trophy_01);

		// trophy_02
		const trophy_02 = this.add.image(174, 897, "Trophy-02");
		trophy_02.visible = false;
		container_resultScreen.add(trophy_02);

		// trophy_03
		const trophy_03 = this.add.image(180, 1012, "Trophy-03");
		trophy_03.visible = false;
		container_resultScreen.add(trophy_03);

		this.game = game;
		this.dice = dice;
		this.container_players = container_players;
		this.container_quiz = container_quiz;
		this.quiz = quiz;
		this.container_menu = container_menu;
		this.btn_settings = btn_settings;
		this.txt_time = txt_time;
		this.txt_pot = txt_pot;
		this.container_resultScreen = container_resultScreen;
		this.goHomeTxt = goHomeTxt;
		this.container_text1 = container_text1;
		this.trophy_01 = trophy_01;
		this.trophy_02 = trophy_02;
		this.trophy_03 = trophy_03;

		this.events.emit("scene-awake");
	}

	/** @type {Game} */
	game;
	/** @type {Dice} */
	dice;
	/** @type {Phaser.GameObjects.Container} */
	container_players;
	/** @type {Phaser.GameObjects.Container} */
	container_quiz;
	/** @type {Quiz} */
	quiz;
	/** @type {Phaser.GameObjects.Container} */
	container_menu;
	/** @type {Phaser.GameObjects.Image} */
	btn_settings;
	/** @type {Phaser.GameObjects.Text} */
	txt_time;
	/** @type {Phaser.GameObjects.Text} */
	txt_pot;
	/** @type {Phaser.GameObjects.Container} */
	container_resultScreen;
	/** @type {Phaser.GameObjects.Text} */
	goHomeTxt;
	/** @type {Phaser.GameObjects.Container} */
	container_text1;
	/** @type {Phaser.GameObjects.Image} */
	trophy_01;
	/** @type {Phaser.GameObjects.Image} */
	trophy_02;
	/** @type {Phaser.GameObjects.Image} */
	trophy_03;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.oQuizeManager = new QuizeManager(this);
		this.oInputManager = new InputManager(this);
		this.oPlayerManager = new PlayerManager(this);
		this.oGameManager = new GameManager(this);
		this.instantiateSocketManager();
		this.btn_settings.setInteractive().on('pointerdown', () => {
			this.oSocketManager.emit("reqLeave");
			window.close();
		})
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
	// reqPlayerPosition = (nIndex) => this.oSocketManager.emit("reqPlayerPosition", { nIndex });
	setQuestonTimer = ({ nTotalTurnTime, ttl }) => {
		this.timeLeft = nTotalTurnTime / 1000;
		this.time1 = nTotalTurnTime / 1000;
		this.energyContainer = this.add.sprite(530, 712, "Green-Time-bar-inside-fill");
		this.container_quiz.add(this.energyContainer);
		this.energyBar = this.add.sprite(this.energyContainer.x + 3, this.energyContainer.y, "Green-Tima-bar-fill");
		this.container_quiz.add(this.energyBar);
		this.energyBarMask = this.add.sprite(this.energyContainer.x + 3, this.energyContainer.y, "Green-Tima-bar-fill");
		this.container_quiz.add(this.energyBarMask);
		this.timerImg = this.add.sprite(910, 710, "Time-iocn");
		this.container_quiz.add(this.timerImg);
		this.energyBarMask.visible = false;
		this.energyBar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energyBarMask);
		this.gameTimer = this.time.addEvent({
			delay: 600,
			callback: function () {
				this.timeLeft--;
				this.stepWidth = this.energyBarMask.displayWidth / this.time1;
				this.energyBarMask.x -= this.stepWidth;
				if (this.timeLeft == 0) {
					this.gameTimer.destroy();
				}
			},
			callbackScope: this,
			loop: true
		});
	}
	setGameTimer({ nTotalGameTime }) {
		let countdown = setInterval(() => {
			let minutes = Math.floor(nTotalGameTime / 60000);
			let seconds = Math.floor((nTotalGameTime % 60000) / 1000);
			this.txt_time.setText(
				`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
			);
			if (nTotalGameTime <= 0) {
				clearInterval(countdown);
			} else {
				nTotalGameTime -= 1000;
			}
		}, 1000);
	}
	showResultScreen = ({ sortedParticipant }) => {
		console.log("sorted", sortedParticipant);
		this.container_resultScreen.visible = true;
		for (let i = 0; i < sortedParticipant.length; i++) {
			this.winnerPrefab = this.add.existing(new ResultScreen(this, 587, 737 + (i * 100)));
			this.container_resultScreen.add(this.winnerPrefab);
			this.winnerPrefab.setWinnerData(sortedParticipant[i]);
			if (sortedParticipant.length == 2) {
				this.trophy_01.visible = true;
				this.trophy_02.visible = true;
			} else {
				this.trophy_01.visible = true;
				this.trophy_02.visible = true;
				this.trophy_03.visible = true;
			}
		}

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
