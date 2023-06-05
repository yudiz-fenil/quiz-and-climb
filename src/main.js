const init = () => {
	class Boot extends Phaser.Scene {
    preload() {
      this.load.pack("pack", "assets/preload-asset-pack.json");
      this.load.on(Phaser.Loader.Events.COMPLETE, () =>
        this.scene.start("Preload")
      );
    }
  }
  var game = new Phaser.Game({
    width: 1080,
    height: 1920,
    type: Phaser.AUTO,
    backgroundColor: "#242424",
    parent: "game-division",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      orientation: Phaser.Scale.Orientation.PORTRAIT,
    },
    audio: {
      disableWebAudio: false,
    },
    dom: {
      createContainer: true,
    },
  });
  game.scene.add("Preload", Preload);
  game.scene.add("Level", Level);
  game.scene.add("Boot", Boot, true);
};

window.onload = (event) => {
  init();
};
