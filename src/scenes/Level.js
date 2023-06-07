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

    this.container_quiz = container_quiz;
    this.quiz = quiz;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Container} */
  container_quiz;
  /** @type {Quiz} */
  quiz;

  /* START-USER-CODE */

  // Write more your code here

  create() {
    this.editorCreate();
    this.oQuizeManager = new QuizeManager(this);
    this.oInputManager = new InputManager(this);
    this.oGameManager = new GameManager(this);
    this.instantiateSocketManager();
  }

  instantiateSocketManager() {
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
  sendAnswerData(ansId1) {
    console.log("ansId", ansId1, this.oQuizeManager.questionId, this.oGameManager.iBoardId);
    this.oSocketManager.socket.emit(this.oGameManager.iBoardId,{sEventName: "reqAnswer", oData : {questId: this.oQuizeManager.questionId, ansId: ansId1 }})
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
