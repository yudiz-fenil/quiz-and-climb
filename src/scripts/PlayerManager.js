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

  setUserInfo = ({ aPawn, iUserId, nTurnMissed, sRootSocket, sUserName, oScore }) => {
    if (sRootSocket == this.oScene.oSocketManager.socket.id) {
      this.player1 = new PlayerProfile(this.oScene, 223, 1669);
      this.player1.setUsername(sUserName);
      console.log("%c ownPlayer iUserId", "background: green; ", iUserId);
      this.oScene.oGameManager.ownPlayerId = iUserId;
      this.player1.setHealth(nTurnMissed);
      this.player1.setName(iUserId);
      this.player1.setScore(oScore.nTotalScore);
      this.oScene.oGameManager.aPawns[0].pawn = this.player1.pawn
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
          this.player2.setScore(oScore.nTotalScore);
          this.player2.setPlayerUI("player-four-background", "player-avtar-02", "player-four-heart", "red-pawn", "red-shadow");
          this.oScene.oGameManager.aPawns[1].pawn = this.player2.pawn
          this.oScene.container_players.add(this.player2);
          break;
        case 3:
          this.player3 = new PlayerProfile(this.oScene, 874, 325);
          this.player3.setRightSidePLayer();
          this.player3.setUsername(sUserName);
          this.player3.setName(iUserId);
          this.player3.setHealth(nTurnMissed);
          this.player3.setScore(oScore.nTotalScore);
          this.player3.setPlayerUI("player-three-background", "player-avtar-03", "player-three-heart", "blue-pawn", "blue-shadow");
          this.oScene.oGameManager.aPawns[2].pawn = this.player3.pawn
          this.oScene.container_players.add(this.player3);
          break;
        case 4:
          this.player4 = new PlayerProfile(this.oScene, 874, 1669);
          this.player4.setRightSidePLayer();
          this.player4.setUsername(sUserName);
          this.player4.setName(iUserId);
          this.player4.setHealth(nTurnMissed);
          this.player4.setScore(oScore.nTotalScore);
          this.player4.setPlayerUI("player-two-background", "player-avtar-02", "player-two-heart", "yellow-pawn", "yellow-shadow");
          this.oScene.oGameManager.aPawns[3].pawn = this.player4.pawn
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
        this.oScene.dice.dice_bgs.setTexture("green-bg")
        this.oScene.container_quiz.setVisible(true);
        this.oScene.quiz.setInteractiveOptions();
        this.player1.playShadowAnimation("green-shadow");
        break;
      case this.player2.name:
        this.oScene.dice.dice_bgs.setTexture("red-bg")
        this.oScene.container_quiz.setVisible(false);
        this.player2.playShadowAnimation("red-shadow");
        this.player2.container_answer_question.setVisible(true);
        break;
      case this.player3.name:
        this.oScene.dice.dice_bgs.setTexture("blue-bg")
        this.oScene.container_quiz.setVisible(false);
        this.player3.playShadowAnimation("blue-shadow");
        this.player3.container_answer_question.setVisible(true);
        break;
      case this.player4.name:
        this.oScene.dice.dice_bgs.setTexture("yellow-bg")
        this.oScene.container_quiz.setVisible(false);
        this.player4.playShadowAnimation("yellow-shadow");
        this.player4.container_answer_question.setVisible(true);
        break;
    }
  }

  setTurnMissed = ({ nTurnMissed, iUserId, nMaxTurnMissAllowed }) => {
    this.oScene.dice.dice.disableInteractive();
    if (nTurnMissed == 3) {
      window.close();
    }
    switch (iUserId) {
      case this.player1.name:
        this.player1.setHealth(nTurnMissed);
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

  setDiceTurn = ({ iUserId, ttl, nTotalTurnTime, oScore }) => {
    if (this.oScene.oGameManager.ownPlayerId == iUserId) {
      this.oScene.dice.dice.setInteractive();
    }
    this.oScene.container_quiz.visible = false;
    this.oScene.dice.resTurnTimer(ttl, nTotalTurnTime);
    switch (iUserId) {
      case this.player1.name:
        this.player1.setScore(oScore.nTotalScore);
        break;
      case this.player2.name:
        this.player2.setScore(oScore.nTotalScore);
        break;
      case this.player3.name:
        this.player3.setScore(oScore.nTotalScore);
        break;
      case this.player4.name:
        this.player4.setScore(oScore.nTotalScore);
        break;
    }
  }

  setRollDice = ({ iUserId, nDice, oScore }) => {
    this.oScene.dice.intervalTimerReset();
    if (this.oScene.oGameManager.ownPlayerId == iUserId) {
      this.oScene.dice.dice.setTexture("dice", nDice - 1)
      this.movePlayerPawn(iUserId, nDice, oScore);
    } else {
      this.oScene.dice.dice.anims.play("dice-roll", true).once('animationcomplete', () => {
        this.oScene.dice.dice.setTexture("dice", nDice - 1)
        this.movePlayerPawn(iUserId, nDice, oScore);
      });
    }
    switch (iUserId) {
      case this.player1.name:
        this.player1.setScore(oScore.nTotalScore);
        break;
      case this.player2.name:
        this.player2.setScore(oScore.nTotalScore);
        break;
      case this.player3.name:
        this.player3.setScore(oScore.nTotalScore);
        break;
      case this.player4.name:
        this.player4.setScore(oScore.nTotalScore);
        break;
    }
  }

  movePlayerPawn = (iUserId, nDice, oScore) => {
    switch (iUserId) {
      case this.player1.name:
        this.player1.playMoveAnimation(0, nDice, oScore);
        break;
      case this.player2.name:
        this.player2.playMoveAnimation(1, nDice, oScore);
        break;
      case this.player3.name:
        this.player3.playMoveAnimation(2, nDice, oScore);
        break;
      case this.player4.name:
        this.player4.playMoveAnimation(3, nDice, oScore);
        break;
    }
  }
}
