class InputManager {
    constructor(oScene) {
        this.oScene = oScene;

        this.oScene.quiz.optionOneBox.setInteractive().on('pointerdown', () => {
            this.oScene.reqAnswer(1)
        });
        this.oScene.quiz.optionTwoBox.setInteractive().on('pointerdown', () => {
            this.oScene.reqAnswer(2)
        });
        this.oScene.quiz.optionThreeBox.setInteractive().on('pointerdown', () => {
            this.oScene.reqAnswer(3)
        });
        this.oScene.quiz.optionFourBox.setInteractive().on('pointerdown', () => {
            this.oScene.reqAnswer(4)
        });

        // Dice
        this.oScene.dice.dice.setInteractive().on('pointerdown', () => {
            this.oScene.dice.dice.anims.play("dice-roll", true).on('animationcomplete', () => {
                this.oScene.reqRollDice();
                this.oScene.dice.dice.disableInteractive();
                this.oScene.dice.dice.setTexture("dice", 5);
            });
        });
    }
}