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
      console.log("%c setUserData", "background: red; ", oData.sUserName);
    }
  };

  setUserInfo = ({ aPawn, aQuestions, iUserId, nChips, nSeat, nTurnMissed, sRootSocket, sUserName }) => {
    console.log('sRootSocket', sRootSocket)
    console.log('this.oScene.oSocketManager.socket.id', this.oScene.oSocketManager.socket.id)
    if (sRootSocket == this.oScene.oSocketManager.socket.id) {
      this.player1 = new PlayerProfile(this.oScene, 223, 1619);
      this.player1.setUsername(sUserName);
      this.player1.setHealth(nTurnMissed);
      this.player1.setScore(aPawn[0]);
      this.oScene.container_players.add(this.player1);
    }
    else {
      switch (this.players.size) {
        case 2:
          this.player2 = new PlayerProfile(this.oScene, 223, 300);
          this.player2.setUsername(sUserName);
          this.player2.setHealth(nTurnMissed);
          this.player2.setScore(aPawn[0]);
          this.player2.setPlayerUI("player-four-background", "player-avtar-02", "player-four-heart");
          this.oScene.container_players.add(this.player2);
          break;
        case 3:
          this.player3 = new PlayerProfile(this.oScene, 874, 300);
          this.player3.setRightSidePLayer();
          this.player3.setUsername(sUserName);
          this.player3.setHealth(nTurnMissed);
          this.player3.setScore(aPawn[0]);
          this.player3.setPlayerUI("player-three-background", "player-avtar-03", "player-three-heart");
          this.oScene.container_players.add(this.player3);
          break;
        case 4:
          this.player4 = new PlayerProfile(this.oScene, 874, 1619);
          this.player4.setRightSidePLayer();
          this.player4.setUsername(sUserName);
          this.player4.setHealth(nTurnMissed);
          this.player4.setScore(aPawn[0]);
          this.player4.setPlayerUI("player-two-background", "player-avtar-02", "player-two-heart");
          this.oScene.container_players.add(this.player4);
          break;

      }
    }
  }
}
