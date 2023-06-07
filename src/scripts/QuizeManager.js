class QuizeManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.questionId = " ";
    }
    setQuize = (data) => {
        this.oScene.quiz.setQueAns(data);
    }
}