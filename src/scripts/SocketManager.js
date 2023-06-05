class SocketManager {
  constructor(oScene, iBoardId, sAuthToken, sRootUrl) {
    this.oScene = oScene;
    this.sRootUrl = sRootUrl;
    this.iBoardId = iBoardId;
    this.sAuthToken = sAuthToken;

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

    // Refresh Purpose
    this.socket.on(this.iBoardId, (data) => {
      this.onReceivedData(data);
    });

    // Socket Connection
    this.socket.emit(
      "reqJoinBoard",
      { iBoardId: this.iBoardId },
      (error, data) => {
        this.onReceivedData(data);
        this.onReceivedTableData(error);
      }
    );

    // For Requesting Socket Emits
    this.emit = (sEventName, oData = {}, callback) => {
      this.socket.emit(this.iBoardId, { sEventName, oData }, callback);
    };
  }

  onReceivedTableData(data) {
    console.log(data);
  }
  onReceivedData(data) {
    console.log(data);
    // switch (data.sEventName) {
    //   case undefined:
    //     console.log(data);
    //     break;

    //   case "resUserJoined":
    //     console.log("resUserJoined :: ", data);
    //     break;

    //   case "resGameInitializeTimer":
    //     console.log("resGameInitializeTimer :: ", data);
    //     break;

    //   case "resGameInitializeTimerExpired":
    //     console.log("resGameInitializeTimerExpired :: ", data);
    //     break;

    //   case "resQuestionTurn":
    //     console.log("resQuestionTurn :: ", data);
    //     break;

    //   case "resQuestion":
    //     console.log("resQuestion :: ", data);
    //     break;

    //   case "resTurnMissed":
    //     console.log("resTurnMissed :: ", data);
    //     break;
    // }
  }
}
