class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.iBoardId = " ";
        this.ownPlayerId = " ";
        this.isownTurn = false;
        this.aPawns = [
            { position: -1, finalPosition: -1, pawn: null },
            { position: -1, finalPosition: -1, pawn: null },
            { position: -1, finalPosition: -1, pawn: null },
            { position: -1, finalPosition: -1, pawn: null },
        ]
        this.aSnakeLadder = [
            // ladders
            { nStart: 3, nEnd: 15 },
            { nStart: 7, nEnd: 28 },
            { nStart: 19, nEnd: 63 },
            { nStart: 66, nEnd: 74 },
            { nStart: 76, nEnd: 94 },
            { nStart: 79, nEnd: 98 },
            // snakes
            { nStart: 24, nEnd: 6 },
            { nStart: 52, nEnd: 32 },
            { nStart: 78, nEnd: 58 },
            { nStart: 92, nEnd: 66 },
            { nStart: 97, nEnd: 23 },
        ]
    }

    setGameData(oData) {
        this.eState = oData.eState;
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
                this.aParticipant.forEach(oParticipant => {
                    this.oScene.oPlayerManager.setUserData(oParticipant);
                });
            }
        } else {
            this.oScene.popup_game_finished_bg.setInteractive().on('pointerdown', () => { });
            this.oScene.popup_game_finish.setVisible(true);
            this.oScene.btn_game_finished.setInteractive().on('pointerdown', () => window.close());
        }
    }
}
