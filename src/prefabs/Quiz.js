
// You can write more code here

/* START OF COMPILED CODE */

class Quiz extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// quizGreenBox
		const quizGreenBox = scene.add.sprite(9, -1, "green-shadow-2", 0);
		quizGreenBox.scaleX = 1.07;
		quizGreenBox.scaleY = 1.06;
		this.add(quizGreenBox);

		// green_Border
		const green_Border = scene.add.image(7, 3, "Green-Border");
		green_Border.scaleX = 1.12;
		green_Border.scaleY = 1.13;
		this.add(green_Border);

		// box_Pop_Up
		const box_Pop_Up = scene.add.image(7, 2, "MCQ-Pop-Up-box");
		box_Pop_Up.scaleX = 0.99;
		box_Pop_Up.scaleY = 0.99;
		this.add(box_Pop_Up);

		// queTxt
		const queTxt = scene.add.text(2, -150, "", {});
		queTxt.setOrigin(0.5, 0);
		queTxt.text = "iufgirueh ghruehi ihr ei re ger ghie iogheio frhiogrei gih eriog ierhgi heighie hgie ge gyeio i";
		queTxt.setStyle({ "align": "center", "fontSize": "40px", "fontStyle": "bold" });
		queTxt.setWordWrapWidth(940, true);
		this.add(queTxt);

		// container_optionbtn
		const container_optionbtn = scene.add.container(-235, 19);
		this.add(container_optionbtn);

		// optionOneBox
		const optionOneBox = scene.add.image(0, 0, "MCQ-Question-Answer-box");
		optionOneBox.scaleX = 0.6;
		optionOneBox.scaleY = 0.7;
		container_optionbtn.add(optionOneBox);

		// optionTwoBox
		const optionTwoBox = scene.add.image(0, 109, "MCQ-Question-Answer-box");
		optionTwoBox.scaleX = 0.6;
		optionTwoBox.scaleY = 0.7;
		container_optionbtn.add(optionTwoBox);

		// optionThreeBox
		const optionThreeBox = scene.add.image(472, -1, "MCQ-Question-Answer-box");
		optionThreeBox.scaleX = 0.6;
		optionThreeBox.scaleY = 0.7;
		container_optionbtn.add(optionThreeBox);

		// optionFourBox
		const optionFourBox = scene.add.image(472, 109, "MCQ-Question-Answer-box");
		optionFourBox.scaleX = 0.6;
		optionFourBox.scaleY = 0.7;
		container_optionbtn.add(optionFourBox);

		// option_1
		const option_1 = scene.add.text(-237, 19, "", {});
		option_1.name = "option_1";
		option_1.setOrigin(0.5, 0.5);
		option_1.text = "option 1";
		option_1.setStyle({ "align": "center", "fontSize": "35px", "fontStyle": "bold", "maxLines":2});
		option_1.setWordWrapWidth(300, true);
		this.add(option_1);

		// option_2
		const option_2 = scene.add.text(-237, 129, "", {});
		option_2.name = "option_2";
		option_2.setOrigin(0.5, 0.5);
		option_2.text = "option2";
		option_2.setStyle({ "align": "center", "fontSize": "35px", "fontStyle": "bold", "maxLines":2});
		option_2.setWordWrapWidth(300, true);
		this.add(option_2);

		// option_3
		const option_3 = scene.add.text(235, 20, "", {});
		option_3.name = "option_3";
		option_3.setOrigin(0.5, 0.5);
		option_3.text = "option3";
		option_3.setStyle({ "align": "center", "fontSize": "35px", "fontStyle": "bold", "maxLines":2});
		option_3.setWordWrapWidth(300, true);
		this.add(option_3);

		// option_4
		const option_4 = scene.add.text(247, 127, "", {});
		option_4.name = "option_4";
		option_4.setOrigin(0.5, 0.5);
		option_4.text = "option4";
		option_4.setStyle({ "align": "center", "fontSize": "35px", "fontStyle": "bold", "maxLines":2});
		option_4.setWordWrapWidth(300, true);
		this.add(option_4);

		this.quizGreenBox = quizGreenBox;
		this.queTxt = queTxt;
		this.container_optionbtn = container_optionbtn;
		this.optionOneBox = optionOneBox;
		this.optionTwoBox = optionTwoBox;
		this.optionThreeBox = optionThreeBox;
		this.optionFourBox = optionFourBox;
		this.option_1 = option_1;
		this.option_2 = option_2;
		this.option_3 = option_3;
		this.option_4 = option_4;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = scene
		this.quizGreenBox.anims.play("green-shadow");
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	quizGreenBox;
	/** @type {Phaser.GameObjects.Text} */
	queTxt;
	/** @type {Phaser.GameObjects.Container} */
	container_optionbtn;
	/** @type {Phaser.GameObjects.Image} */
	optionOneBox;
	/** @type {Phaser.GameObjects.Image} */
	optionTwoBox;
	/** @type {Phaser.GameObjects.Image} */
	optionThreeBox;
	/** @type {Phaser.GameObjects.Image} */
	optionFourBox;
	/** @type {Phaser.GameObjects.Text} */
	option_1;
	/** @type {Phaser.GameObjects.Text} */
	option_2;
	/** @type {Phaser.GameObjects.Text} */
	option_3;
	/** @type {Phaser.GameObjects.Text} */
	option_4;

	/* START-USER-CODE */

	// Write your code here.
	setQueAns = ({ iUserId, question }) => {
		this.scene.oQuizeManager.questionId = question._id;
		this.queTxt.text = question.sQuestion;
		(this.queTxt.text.length > 30) ? this.queTxt.setScale(0.7) : this.queTxt.setScale(1);
		question.aOptions.forEach((data, i) => {
			(question.aOptions[i].sOptions.length > 12) ? eval("this.option_" + (1 + i)).setScale(0.7) : eval("this.option_" + (1 + i)).setScale(1);
			eval("this.option_" + (1 + i)).text = question.aOptions[i].sOptions;
		});
	}
	disableInteractiveOptions = () => {
		this.container_optionbtn.list.forEach((option) => {
			option.disableInteractive();
		})
	}
	setInteractiveOptions = () => {
		this.container_optionbtn.list.forEach((option) => {
			option.setInteractive();
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
