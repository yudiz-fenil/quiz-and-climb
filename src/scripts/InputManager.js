class InputManager {
    constructor(oScene) {
        this.oScene = oScene;

        this.oScene.quiz.optionOneBox.setInteractive().on('pointerdown', () => {
            this.oScene.sendAnswerData(1)
        });
        this.oScene.quiz.optionTwoBox.setInteractive().on('pointerdown', () => {
            this.oScene.sendAnswerData(2)
        });
        this.oScene.quiz.optionThreeBox.setInteractive().on('pointerdown', () => {
            this.oScene.sendAnswerData(3)
        });
        this.oScene.quiz.optionFourBox.setInteractive().on('pointerdown', () => {
            this.oScene.sendAnswerData(4)
        });
    }
}