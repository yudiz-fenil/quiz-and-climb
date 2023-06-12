class PlayerManager {
  constructor(oScene) {
    this.oScene = oScene;
    this.players = new Map();
    this.player1;
    this.player2;
    this.player3;
    this.player4;
  }

  setUserData = (oData) => {
    if (!this.players.has(oData.iUserId)) {
      this.players.set(oData.iUserId, oData.sUserName);
      this.setUserInfo(oData);
    }
  };

  setUserInfo = ({ aPawn, aQuestions, iUserId, nChips, nSeat, nTurnMissed, sRootSocket, sUserName }) => {
    if (sRootSocket == this.oScene.oSocketManager.socket.id) {
      this.player1 = new PlayerProfile(this.oScene, 223, 1669);
      this.player1.setUsername(sUserName);
      console.log("%c ownPlayer iUserId", "background: green; ", iUserId);
      this.oScene.oGameManager.ownPlayerId = iUserId;
      this.player1.setHealth(nTurnMissed);
      this.player1.setName(iUserId);
      this.player1.setScore(aPawn[0]);
      this.oScene.container_players.add(this.player1);
    }
    else {
      this.oScene.oGameManager.isownTurn = false;
      switch (this.players.size) {
        case 2:
          this.player2 = new PlayerProfile(this.oScene, 223, 325);
          this.player2.setUsername(sUserName);
          this.player2.setName(iUserId);
          this.player2.setHealth(nTurnMissed);
          this.player2.setScore(aPawn[0]);
          this.player2.setPlayerUI("player-four-background", "player-avtar-02", "player-four-heart", "red-pawn", "red-shadow");
          this.oScene.container_players.add(this.player2);
          break;
        case 3:
          this.player3 = new PlayerProfile(this.oScene, 874, 325);
          this.player3.setRightSidePLayer();
          this.player3.setUsername(sUserName);
          this.player3.setName(iUserId);
          this.player3.setHealth(nTurnMissed);
          this.player3.setScore(aPawn[0]);
          this.player3.setPlayerUI("player-three-background", "player-avtar-03", "player-three-heart", "blue-pawn", "blue-shadow");
          this.oScene.container_players.add(this.player3);
          break;
        case 4:
          this.player4 = new PlayerProfile(this.oScene, 874, 1669);
          this.player4.setRightSidePLayer();
          this.player4.setUsername(sUserName);
          this.player4.setName(iUserId);
          this.player4.setHealth(nTurnMissed);
          this.player4.setScore(aPawn[0]);
          this.player4.setPlayerUI("player-two-background", "player-avtar-02", "player-two-heart", "yellow-pawn", "yellow-shadow");
          this.oScene.container_players.add(this.player4);
          break;

      }
    }
  }

  changeTurn = () => {
    this.player1.stopShadowAnimation();
    this.player1.container_answer_question.setVisible(false);
    this.player2.stopShadowAnimation();
    this.player2.container_answer_question.setVisible(false);
    if (this.player3) {
      this.player3.stopShadowAnimation();
      this.player3.container_answer_question.setVisible(false);
    }
    if (this.player4) {
      this.player4.stopShadowAnimation();
      this.player4.container_answer_question.setVisible(false);
    }
  }

  setQuestionTurn = ({ iUserId, ttl, nTotalTurnTime }) => {
    this.changeTurn();
    switch (iUserId) {
      case this.player1.name:
        console.log("player1",this.player1.name);
        this.oScene.container_quiz.setVisible(true);
        this.player1.playShadowAnimation("green-shadow");
        break;
      case this.player2.name:
        console.log("player2",this.player2.name);
        this.oScene.container_quiz.setVisible(false);
        this.player2.playShadowAnimation("red-shadow");
        this.player2.container_answer_question.setVisible(true);
        break;
      case this.player3.name:
        console.log("player3",this.player3.name);
        this.oScene.container_quiz.setVisible(false);
        this.player3.playShadowAnimation("blue-shadow");
        this.player3.container_answer_question.setVisible(true);
        break;
      case this.player4.name:
        console.log("player4",this.player4.name);
        this.oScene.container_quiz.setVisible(false);
        this.player4.playShadowAnimation("yellow-shadow");
        this.player4.container_answer_question.setVisible(true);
        break;
    }
  }

  setTurnMissed = ({ nTurnMissed, iUserId, nMaxTurnMissAllowed }) => {
    switch (iUserId) {
      case this.player1.name:
        this.player1.setHealth(nTurnMissed)
        break;
      case this.player2.name:
        this.player2.setHealth(nTurnMissed);
        break;
      case this.player3.name:
        this.player3.setHealth(nTurnMissed);
        break;
      case this.player4.name:
        this.player4.setHealth(nTurnMissed);
        break;
    }
  }
}
