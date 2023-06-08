class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.iBoardId = " ";
    }

    setGameData(oData) {
        this.eState = oData.eState;
        this.aBoardPositions = oData.aBoardPositions;
        this.aParticipant = oData.aParticipant;
        this.aQuestions = oData.aQuestions;
        this.aWinner = oData.aWinner;
        this.aWinningAmount = oData.aWinningAmount;
        this.nMaxPlayer = oData.nMaxPlayer;
        this.iProtoId = oData.iProtoId;
        this.iUserTurn = oData.iUserTurn;
        this.iNextUserTurn = oData.iNextUserTurn;
        this.nDice = oData.nDice;
        this.eBoardType = oData.eBoardType;
        this.nTotalGameTime = oData.nTotalGameTime;
        this.oCurrentQuestion = oData.oCurrentQuestion;

        if (this.eState != "finished") {
            if (this.aParticipant.length == this.nMaxPlayer) {
                for (let i = 0; i <= this.aParticipant.length; i++) {
                    this.oScene.oPlayerManager.setUserData(this.aParticipant[i]);
                }
            }
        } else {
            window.close();
        }
    }
}
