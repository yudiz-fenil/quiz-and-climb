class SocketManager {
  constructor(oScene, iBoardId, sAuthToken, sRootUrl) {
    this.oScene = oScene;
    this.sRootUrl = sRootUrl;
    this.iBoardId = iBoardId;
    this.sAuthToken = sAuthToken;
    this.oScene.oGameManager.iBoardId = this.iBoardId;
    //Root Socket conenction
    this.socket = io(this.sRootUrl, {
      transports: ["websocket", "polling"],
      auth: {
        authorization: this.sAuthToken,
      },
    });

    // Root Socket Connection Events - Start
    this.socket.on("connect", () => {
      this.ownSocketId = this.socket.id;
      console.log("Connected to Socket :: ", this.socket.id);
    });
    this.socket.on("disconnect", () => {
      console.log("Disconnected from Socket");
    });
    this.socket.on("reconnect", () => {
      console.log("Reconnecting to Socket");
    });
    this.socket.on("error", (error) => {
      console.log("Connection Error :: ", error);
    });
    // Root Socket Connection Events - End

    this.socket.on(this.iBoardId, (data) => {
      this.onReceivedData(data);
    });

    // Socket Connection
    this.socket.emit(
      "reqJoinBoard",
      { iBoardId: this.iBoardId },
      (callback) => {
        this.onReceivedTableData(callback);
      }
    );

    // For Requesting Socket Emits
    this.emit = (sEventName, oData = {}, callback) => {
      this.socket.emit(this.iBoardId, { sEventName, oData }, (error, response) => { });
    };
  }

  onReceivedTableData(data) {
    console.log('cb', data);
    if (data.oData.eState != "playing") this.oScene.oGameManager.setGameData(data.oData);
  }

  onReceivedData(data) {
    console.log(data.sEventName, data);
    switch (data.sEventName) {
      case "resUserJoined":
        this.oScene.oPlayerManager.setUserData(data.oData);
        break;
      case "resGameInitializeTimer":
        break;
      case "resGameInitializeTimerExpired":
        this.oScene.setGameTimer(data.oData.nTotalGameTime);
        break;
      case "resPlayerTurn":
        this.oScene.oPlayerManager.setPlayerTurn(data.oData);
        break;
      case "resQuestionTurn":
        this.oScene.oPlayerManager.setQuestionTurn(data.oData);
        this.oScene.setQuestonTimer(data.oData);
        break;
      case "resQuestion":
        this.oScene.oQuizeManager.setQuize(data.oData.emitData);
        break;
      case "resAnswer":
        this.oScene.oQuizeManager.resAnswer(data.oData);
        break;
      case "resDiceTurn":
        this.oScene.oPlayerManager.setDiceTurn(data.oData);
        break;
      case "resRollDice":
        this.oScene.oPlayerManager.setRollDice(data.oData);
        break;
      case "skipRollDice":
        this.oScene.oPlayerManager.setSkipRollDice(data.oData);
        break;
      case "resTurnMissed":
        this.oScene.oPlayerManager.setTurnMissed(data.oData);
        break;
      case "resGameOver":
        this.oScene.showResultScreen(data.oData);
        break;
    }
  }
}
