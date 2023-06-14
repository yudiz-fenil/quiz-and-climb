class InputManager {
    constructor(oScene) {
        this.oScene = oScene;

        this.oScene.quiz.optionOneBox.on('pointerdown', () => {
            this.oScene.quiz.disableInteractiveOptions();
            this.oScene.reqAnswer(1)
        });
        this.oScene.quiz.optionTwoBox.on('pointerdown', () => {
            this.oScene.quiz.disableInteractiveOptions();
            this.oScene.reqAnswer(2)
        });
        this.oScene.quiz.optionThreeBox.on('pointerdown', () => {
            this.oScene.quiz.disableInteractiveOptions();
            this.oScene.reqAnswer(3)
        });
        this.oScene.quiz.optionFourBox.on('pointerdown', () => {
            this.oScene.quiz.disableInteractiveOptions();
            this.oScene.reqAnswer(4)
        });
    }
}