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
		const dice = new Dice(this, 540, 1669);
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
		txt_time.setStyle({ "align": "center", "fontSize": "40px", "fontStyle": "bold", "maxLines":2});
		txt_time.setWordWrapWidth(300);
		container_menu.add(txt_time);

		// txt_pot
		const txt_pot = this.add.text(926, 99, "", {});
		txt_pot.name = "txt_pot";
		txt_pot.setOrigin(0.5, 0.5);
		txt_pot.text = "₹ 3.2";
		txt_pot.setStyle({ "align": "center", "fontSize": "40px", "fontStyle": "bold", "maxLines":2});
		txt_pot.setWordWrapWidth(300);
		container_menu.add(txt_pot);

		// txt
		const txt = this.add.text(926, 44, "", {});
		txt.name = "txt";
		txt.setOrigin(0.5, 0.5);
		txt.text = "POT";
		txt.setStyle({ "align": "center", "fontSize": "40px", "fontStyle": "bold", "maxLines":2});
		txt.setWordWrapWidth(300);
		container_menu.add(txt);

		// container_resultScreen
		const container_resultScreen = this.add.container(0, 0);
		container_resultScreen.visible = false;

		// resultscreen_bg
		const resultscreen_bg = this.add.rectangle(545, 948, 128, 128);
		resultscreen_bg.scaleX = 9;
		resultscreen_bg.scaleY = 15;
		resultscreen_bg.alpha = 0.8;
		resultscreen_bg.isFilled = true;
		resultscreen_bg.fillColor = 1250067;
		container_resultScreen.add(resultscreen_bg);

		// result_Screen_Board
		const result_Screen_Board = this.add.image(537, 828, "Result-Screen-Board");
		result_Screen_Board.scaleX = 1.1;
		result_Screen_Board.scaleY = 1.1;
		container_resultScreen.add(result_Screen_Board);

		// btn_go_to_home
		const btn_go_to_home = this.add.image(516, 1231, "Play-again-board");
		container_resultScreen.add(btn_go_to_home);

		// goHomeTxt
		const goHomeTxt = this.add.text(512, 1224, "", {});
		goHomeTxt.setOrigin(0.5, 0.5);
		goHomeTxt.text = "GO TO HOME";
		goHomeTxt.setStyle({ "fontSize": "45px" });
		container_resultScreen.add(goHomeTxt);

		// container_text1
		const container_text1 = this.add.container(0, -64);
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

		// container_trophy
		const container_trophy = this.add.container(174, 738);
		container_resultScreen.add(container_trophy);

		// trophy_01
		const trophy_01 = this.add.image(0, 0, "Trophy-01");
		trophy_01.visible = false;
		container_trophy.add(trophy_01);

		// trophy_02
		const trophy_02 = this.add.image(0, 117, "Trophy-02");
		trophy_02.visible = false;
		container_trophy.add(trophy_02);

		// trophy_03
		const trophy_03 = this.add.image(0, 232, "Trophy-03");
		trophy_03.visible = false;
		container_trophy.add(trophy_03);

		// popup_settings
		const popup_settings = this.add.container(0, 0);
		popup_settings.visible = false;

		// settings_screen_bg
		const settings_screen_bg = this.add.rectangle(540, 960, 128, 128);
		settings_screen_bg.scaleX = 9;
		settings_screen_bg.scaleY = 15;
		settings_screen_bg.alpha = 0.8;
		settings_screen_bg.isFilled = true;
		settings_screen_bg.fillColor = 1250067;
		popup_settings.add(settings_screen_bg);

		// setting_pop_up_board
		const setting_pop_up_board = this.add.image(540, 960, "setting-pop-up-board");
		popup_settings.add(setting_pop_up_board);

		// setting_pop_up
		const setting_pop_up = this.add.image(540, 586, "setting-pop-up");
		popup_settings.add(setting_pop_up);

		// txt_1
		const txt_1 = this.add.text(577, 583, "", {});
		txt_1.name = "txt_1";
		txt_1.setOrigin(0.5, 0.5);
		txt_1.text = "Setting";
		txt_1.setStyle({ "align": "center", "fontSize": "40px", "fontStyle": "bold", "maxLines":2});
		txt_1.setWordWrapWidth(300);
		popup_settings.add(txt_1);

		// txt_2
		const txt_2 = this.add.text(377, 893, "", {});
		txt_2.name = "txt_2";
		txt_2.setOrigin(0.5, 0.5);
		txt_2.text = "Sound";
		txt_2.setStyle({ "align": "center", "fontSize": "80px", "fontStyle": "bold", "maxLines":2});
		txt_2.setWordWrapWidth(300);
		popup_settings.add(txt_2);

		// txt_3
		const txt_3 = this.add.text(377, 766, "", {});
		txt_3.name = "txt_3";
		txt_3.setOrigin(0.5, 0.5);
		txt_3.text = "Music";
		txt_3.setStyle({ "align": "center", "fontSize": "80px", "fontStyle": "bold", "maxLines":2});
		txt_3.setWordWrapWidth(300);
		popup_settings.add(txt_3);

		// sound_icon
		const sound_icon = this.add.image(202, 766, "sound-icon");
		popup_settings.add(sound_icon);

		// music_icon
		const music_icon = this.add.image(202, 893, "music-icon");
		popup_settings.add(music_icon);

		// sound_switch
		const sound_switch = this.add.image(810, 766, "on-switch");
		popup_settings.add(sound_switch);

		// music_switch
		const music_switch = this.add.image(810, 893, "on-switch");
		popup_settings.add(music_switch);

		// how_to_play_board_button
		const how_to_play_board_button = this.add.image(540, 1047, "how-to-play-board-button");
		popup_settings.add(how_to_play_board_button);

		// txt_4
		const txt_4 = this.add.text(586, 1048, "", {});
		txt_4.name = "txt_4";
		txt_4.setOrigin(0.5, 0.5);
		txt_4.text = "How to play?";
		txt_4.setStyle({ "align": "center", "fontSize": "55px", "fontStyle": "bold", "maxLines":2});
		txt_4.setWordWrapWidth(1000);
		popup_settings.add(txt_4);

		// question_icon
		const question_icon = this.add.image(349, 1048, "question-icon");
		popup_settings.add(question_icon);

		// btn_leave_game
		const btn_leave_game = this.add.image(540, 1258, "leave-game-board");
		popup_settings.add(btn_leave_game);

		// txt_5
		const txt_5 = this.add.text(540, 1258, "", {});
		txt_5.name = "txt_5";
		txt_5.setOrigin(0.5, 0.5);
		txt_5.text = "LEAVE GAME";
		txt_5.setStyle({ "align": "center", "fontSize": "55px", "fontStyle": "bold", "maxLines":2});
		txt_5.setWordWrapWidth(1000);
		popup_settings.add(txt_5);

		// btn_close_setting
		const btn_close_setting = this.add.image(1005, 473, "close-button");
		popup_settings.add(btn_close_setting);

		// close_icon
		const close_icon = this.add.image(1004, 467, "close-icon");
		popup_settings.add(close_icon);

		// popup_leave
		const popup_leave = this.add.container(0, 0);
		popup_leave.visible = false;

		// leave_popup_bg
		const leave_popup_bg = this.add.rectangle(540, 960, 128, 128);
		leave_popup_bg.scaleX = 9;
		leave_popup_bg.scaleY = 15;
		leave_popup_bg.alpha = 0.8;
		leave_popup_bg.isFilled = true;
		leave_popup_bg.fillColor = 1250067;
		popup_leave.add(leave_popup_bg);

		// leave_popup_bg_1
		const leave_popup_bg_1 = this.add.image(540, 960, "leave-popup-bg");
		popup_leave.add(leave_popup_bg_1);

		// quit_button
		const quit_button = this.add.image(540, 727, "quit-button");
		popup_leave.add(quit_button);

		// btn_cancle
		const btn_cancle = this.add.image(690, 1046, "btn-cancle");
		popup_leave.add(btn_cancle);

		// btn_confirm_leave
		const btn_confirm_leave = this.add.image(390, 1046, "btn-confirm");
		popup_leave.add(btn_confirm_leave);

		// snake
		const snake = this.add.image(180, 1129, "snake");
		popup_leave.add(snake);

		// snake_1
		const snake_1 = this.add.image(922, 1129, "snake");
		snake_1.flipX = true;
		popup_leave.add(snake_1);

		// txt_6
		const txt_6 = this.add.text(540, 718, "", {});
		txt_6.name = "txt_6";
		txt_6.setOrigin(0.5, 0.5);
		txt_6.text = "QUIT";
		txt_6.setStyle({ "align": "center", "color": "#fbdb00", "fontSize": "80px", "fontStyle": "bold", "maxLines":2});
		txt_6.setWordWrapWidth(1000);
		popup_leave.add(txt_6);

		// txt_7
		const txt_7 = this.add.text(539, 879, "", {});
		txt_7.name = "txt_7";
		txt_7.setOrigin(0.5, 0.5);
		txt_7.text = "Are you sure you want to quit?";
		txt_7.setStyle({ "align": "center", "fontSize": "60px", "maxLines":2});
		txt_7.setWordWrapWidth(700);
		popup_leave.add(txt_7);

		// txt_8
		const txt_8 = this.add.text(390, 1043, "", {});
		txt_8.name = "txt_8";
		txt_8.setOrigin(0.5, 0.5);
		txt_8.text = "Yes";
		txt_8.setStyle({ "align": "center", "fontSize": "60px", "maxLines":2});
		txt_8.setWordWrapWidth(1000);
		popup_leave.add(txt_8);

		// txt_9
		const txt_9 = this.add.text(690, 1043, "", {});
		txt_9.name = "txt_9";
		txt_9.setOrigin(0.5, 0.5);
		txt_9.text = "No";
		txt_9.setStyle({ "align": "center", "fontSize": "60px", "maxLines":2});
		txt_9.setWordWrapWidth(1000);
		popup_leave.add(txt_9);

		// popup_miss_turns
		const popup_miss_turns = this.add.container(0, 0);
		popup_miss_turns.visible = false;

		// popup_bg
		const popup_bg = this.add.rectangle(540, 960, 128, 128);
		popup_bg.scaleX = 9;
		popup_bg.scaleY = 15;
		popup_bg.alpha = 0.8;
		popup_bg.isFilled = true;
		popup_bg.fillColor = 1250067;
		popup_miss_turns.add(popup_bg);

		// popbg12
		const popbg12 = this.add.image(540, 960, "Box-Pop-Up");
		popup_miss_turns.add(popbg12);

		// btn_okay
		const btn_okay = this.add.image(540, 1057, "btn-okay");
		popup_miss_turns.add(btn_okay);

		// txt_10
		const txt_10 = this.add.text(540, 1054, "", {});
		txt_10.name = "txt_10";
		txt_10.setOrigin(0.5, 0.5);
		txt_10.text = "OK";
		txt_10.setStyle({ "align": "center", "fontSize": "55px", "maxLines":2});
		txt_10.setWordWrapWidth(700);
		popup_miss_turns.add(txt_10);

		// txt_11
		const txt_11 = this.add.text(567, 883, "", {});
		txt_11.name = "txt_11";
		txt_11.setOrigin(0.5, 0.5);
		txt_11.text = "You missed all turns!";
		txt_11.setStyle({ "align": "center", "fontSize": "60px", "maxLines":2});
		txt_11.setWordWrapWidth(1000);
		popup_miss_turns.add(txt_11);

		// life_skip_icon
		const life_skip_icon = this.add.image(128, 883, "life-skip-icon");
		popup_miss_turns.add(life_skip_icon);

		// txt_12
		const txt_12 = this.add.text(540, 960, "", {});
		txt_12.name = "txt_12";
		txt_12.setOrigin(0.5, 0.5);
		txt_12.text = "You missed 3 turns, you will be redirected to home";
		txt_12.setStyle({ "align": "center", "fontSize": "30px", "maxLines":2});
		txt_12.setWordWrapWidth(1000);
		popup_miss_turns.add(txt_12);

		// popup_skip_turn
		const popup_skip_turn = this.add.container(0, 0);
		popup_skip_turn.visible = false;

		// popup_skip_bg
		const popup_skip_bg = this.add.rectangle(540, 960, 128, 128);
		popup_skip_bg.scaleX = 9;
		popup_skip_bg.scaleY = 15;
		popup_skip_bg.alpha = 0.8;
		popup_skip_bg.isFilled = true;
		popup_skip_bg.fillColor = 1250067;
		popup_skip_turn.add(popup_skip_bg);

		// popbg
		const popbg = this.add.image(540, 960, "Box-Pop-Up");
		popup_skip_turn.add(popbg);

		// btn_skip_okay
		const btn_skip_okay = this.add.image(540, 1057, "btn-okay");
		popup_skip_turn.add(btn_skip_okay);

		// txt_13
		const txt_13 = this.add.text(540, 1054, "", {});
		txt_13.name = "txt_13";
		txt_13.setOrigin(0.5, 0.5);
		txt_13.text = "OK";
		txt_13.setStyle({ "align": "center", "fontSize": "55px", "maxLines":2});
		txt_13.setWordWrapWidth(700);
		popup_skip_turn.add(txt_13);

		// txt_14
		const txt_14 = this.add.text(567, 901, "", {});
		txt_14.name = "txt_14";
		txt_14.setOrigin(0.5, 0.5);
		txt_14.text = "Your turn is skipped!";
		txt_14.setStyle({ "align": "center", "fontSize": "60px", "maxLines":2});
		txt_14.setWordWrapWidth(1000);
		popup_skip_turn.add(txt_14);

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
		this.resultscreen_bg = resultscreen_bg;
		this.btn_go_to_home = btn_go_to_home;
		this.goHomeTxt = goHomeTxt;
		this.container_trophy = container_trophy;
		this.popup_settings = popup_settings;
		this.settings_screen_bg = settings_screen_bg;
		this.btn_leave_game = btn_leave_game;
		this.btn_close_setting = btn_close_setting;
		this.popup_leave = popup_leave;
		this.leave_popup_bg = leave_popup_bg;
		this.btn_cancle = btn_cancle;
		this.btn_confirm_leave = btn_confirm_leave;
		this.popup_miss_turns = popup_miss_turns;
		this.popup_bg = popup_bg;
		this.btn_okay = btn_okay;
		this.popup_skip_turn = popup_skip_turn;
		this.popup_skip_bg = popup_skip_bg;
		this.btn_skip_okay = btn_skip_okay;

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
	/** @type {Phaser.GameObjects.Rectangle} */
	resultscreen_bg;
	/** @type {Phaser.GameObjects.Image} */
	btn_go_to_home;
	/** @type {Phaser.GameObjects.Text} */
	goHomeTxt;
	/** @type {Phaser.GameObjects.Container} */
	container_trophy;
	/** @type {Phaser.GameObjects.Container} */
	popup_settings;
	/** @type {Phaser.GameObjects.Rectangle} */
	settings_screen_bg;
	/** @type {Phaser.GameObjects.Image} */
	btn_leave_game;
	/** @type {Phaser.GameObjects.Image} */
	btn_close_setting;
	/** @type {Phaser.GameObjects.Container} */
	popup_leave;
	/** @type {Phaser.GameObjects.Rectangle} */
	leave_popup_bg;
	/** @type {Phaser.GameObjects.Image} */
	btn_cancle;
	/** @type {Phaser.GameObjects.Image} */
	btn_confirm_leave;
	/** @type {Phaser.GameObjects.Container} */
	popup_miss_turns;
	/** @type {Phaser.GameObjects.Rectangle} */
	popup_bg;
	/** @type {Phaser.GameObjects.Image} */
	btn_okay;
	/** @type {Phaser.GameObjects.Container} */
	popup_skip_turn;
	/** @type {Phaser.GameObjects.Rectangle} */
	popup_skip_bg;
	/** @type {Phaser.GameObjects.Image} */
	btn_skip_okay;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.oQuizeManager = new QuizeManager(this);
		this.oInputManager = new InputManager(this);
		this.oPlayerManager = new PlayerManager(this);
		this.oGameManager = new GameManager(this);
		this.instantiateSocketManager();

		// setting popup
		this.btn_settings.setInteractive().on('pointerdown', () => {
			this.settings_screen_bg.setInteractive().on('pointerdown', () => { })
			this.popup_settings.setVisible(true);
		})
		this.btn_close_setting.setInteractive().on('pointerdown', () => {
			this.popup_settings.setVisible(false);
		});
		this.btn_leave_game.setInteractive().on('pointerdown', () => {
			this.popup_leave.setVisible(true);
			this.popup_settings.setVisible(false);
			this.leave_popup_bg.setInteractive().on('pointerdown', () => { })
		});
		// confirm popup
		this.btn_confirm_leave.setInteractive().on('pointerdown', () => {
			this.oSocketManager.emit("reqLeave");
			setTimeout(() => {
				window.close();
			}, 1000);
		});
		this.btn_cancle.setInteractive().on('pointerdown', () => {
			this.popup_leave.setVisible(false);
		});
		this.btn_go_to_home.setInteractive().on('pointerdown', () => window.close());
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
	reqRollDice = () => this.oSocketManager.emit("reqRollDice", { nDice: nDiceGlobal });
	// reqRollDice = () => this.oSocketManager.emit("reqRollDice", {});
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
	setGameTimer(nTotalGameTime) {
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
		this.resultscreen_bg.setInteractive().on('pointerdown', () => { })
		this.container_resultScreen.visible = true;
		for (let i = 0; i < sortedParticipant.length; i++) {
			this.winnerPrefab = this.add.existing(new ResultScreen(this, 587, 738 + (i * 115)));
			this.container_resultScreen.add(this.winnerPrefab);
			this.winnerPrefab.setWinnerData(sortedParticipant[i]);
			if (i < sortedParticipant.length - 1) this.container_trophy.list[i].setVisible(true);
		}
	}
	showSkipTurnPopup = () => {
		this.popup_skip_turn.setVisible(true);
		this.popup_skip_bg.setInteractive().on('pointerdown', () => { });
		this.btn_skip_okay.setInteractive().on('pointerdown', () => {
			this.popup_skip_turn.setVisible(false);
		});
		setTimeout(() => {
			this.popup_skip_turn.setVisible(false);
		}, 2000);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
