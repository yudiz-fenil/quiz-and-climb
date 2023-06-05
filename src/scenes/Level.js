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

    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write more your code here

  create() {
    this.editorCreate();
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

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
