class QuizeManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.questionId = " ";
    }
    setQuize = (data) => {
        for (let i = 0; i < this.oScene.quiz.container_optionbtn.list.length; i++) {
            this.oScene.quiz.container_optionbtn.list[i].setTexture("MCQ-Question-Answer-box");
        }
        this.oScene.quiz.setQueAns(data.question);
    }
    resAnswer = ({ question, selected, iUserId, oScore }) => {
        if (this.oScene.gameTimer) this.oScene.gameTimer.destroy();
        this.oScene.oPlayerManager.setTotalScore(iUserId, oScore);
        this.oScene.quiz.container_optionbtn.list[selected - 1].setTexture("wrong-answer-pop-up");
        this.oScene.quiz.container_optionbtn.list[question.correct_answer - 1].setTexture("Green-Box-answer-");
    }
}