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
      console.log("Socket URL :: ", this.sRootUrl);
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
      this.socket.emit(this.iBoardId, { sEventName, oData }, callback);
    };
  }

  onReceivedTableData(data) {
    console.log('cb', data);
    this.oScene.oGameManager.setGameData(data.oData);
  }
  onReceivedData(data) {
    switch (data.sEventName) {
      case "resUserJoined":
        this.oScene.oPlayerManager.setUserData(data.oData);
        break;
      // case "resGameInitializeTimer":
      //   console.log("resGameInitializeTimer :: ", data);
      //   break;
      // case "resGameInitializeTimerExpired":
      //   console.log("resGameInitializeTimerExpired :: ", data);
      //   break;

      case "resQuestionTurn":
        console.log("resQuestionTurn :: ", data);
        this.oScene.container_quiz.visible = true;
        break;

      case "resQuestion":
        console.log("resQuestion :: ", data);
        this.oScene.oQuizeManager.setQuize(data.oData.emitData);
        break;

      case "resTurnMissed":
        console.log("resTurnMissed :: ", data);
        break;
    }
  }
}
