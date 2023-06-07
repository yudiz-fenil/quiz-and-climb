
// You can write more code here

/* START OF COMPILED CODE */

class Quiz extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);


		// box_Pop_Up
		const box_Pop_Up = scene.add.image(7, 2, "Box-Pop-Up");
		this.add(box_Pop_Up);

		// queTxt
		const queTxt = scene.add.text(2, -82, "", {});
		queTxt.setOrigin(0.5, 0.5);
		queTxt.setStyle({ "fontSize": "35px" });
		this.add(queTxt);

		// container_optionbtn
		const container_optionbtn = scene.add.container(-235, 19);
		this.add(container_optionbtn);

		// optionFourBox
		const optionFourBox = scene.add.image(472, 88, "MCQ-Question-Answer-box");
		optionFourBox.scaleX = 0.6;
		optionFourBox.scaleY = 0.7;
		container_optionbtn.add(optionFourBox);

		// optionThreeBox
		const optionThreeBox = scene.add.image(472, 0, "MCQ-Question-Answer-box");
		optionThreeBox.scaleX = 0.6;
		optionThreeBox.scaleY = 0.7;
		container_optionbtn.add(optionThreeBox);

		// optionTwoBox
		const optionTwoBox = scene.add.image(0, 88, "MCQ-Question-Answer-box");
		optionTwoBox.scaleX = 0.6;
		optionTwoBox.scaleY = 0.7;
		container_optionbtn.add(optionTwoBox);

		// optionOneBox
		const optionOneBox = scene.add.image(0, 0, "MCQ-Question-Answer-box");
		optionOneBox.scaleX = 0.6;
		optionOneBox.scaleY = 0.7;
		container_optionbtn.add(optionOneBox);

		// option_4
		const option_4 = scene.add.text(247, 106, "", {});
		option_4.setOrigin(0.5, 0.5);
		option_4.text = "option4";
		option_4.setStyle({ "fontSize": "30px" });
		this.add(option_4);

		// option_3
		const option_3 = scene.add.text(235, 21, "", {});
		option_3.setOrigin(0.5, 0.5);
		option_3.text = "option3";
		option_3.setStyle({ "fontSize": "30px" });
		this.add(option_3);

		// option_2
		const option_2 = scene.add.text(-237, 108, "", {});
		option_2.setOrigin(0.5, 0.5);
		option_2.text = "option2";
		option_2.setStyle({ "fontSize": "30px" });
		this.add(option_2);

		// option_1
		const option_1 = scene.add.text(-237, 19, "", {});
		option_1.setOrigin(0.5, 0.5);
		option_1.text = "option1";
		option_1.setStyle({ "fontSize": "30px" });
		this.add(option_1);

		this.queTxt = queTxt;
		this.optionFourBox = optionFourBox;
		this.optionThreeBox = optionThreeBox;
		this.optionTwoBox = optionTwoBox;
		this.optionOneBox = optionOneBox;
		this.option_4 = option_4;
		this.option_3 = option_3;
		this.option_2 = option_2;
		this.option_1 = option_1;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = scene
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	queTxt;
	/** @type {Phaser.GameObjects.Image} */
	optionFourBox;
	/** @type {Phaser.GameObjects.Image} */
	optionThreeBox;
	/** @type {Phaser.GameObjects.Image} */
	optionTwoBox;
	/** @type {Phaser.GameObjects.Image} */
	optionOneBox;
	/** @type {Phaser.GameObjects.Text} */
	option_4;
	/** @type {Phaser.GameObjects.Text} */
	option_3;
	/** @type {Phaser.GameObjects.Text} */
	option_2;
	/** @type {Phaser.GameObjects.Text} */
	option_1;

	/* START-USER-CODE */

	// Write your code here.
	setQueAns = ({iUserId,question}) => {
		this.scene.oQuizeManager.questionId = question._id;
		this.queTxt.text = question.sQuestion;
		(this.queTxt.text.length > 30) ? this.queTxt.setScale(0.7) : this.queTxt.setScale(1);
		question.aOptions.forEach((data,i ) => {
			(question.aOptions[i].sOptions.length > 12) ? eval("this.option_"+(1+i)).setScale(0.7) : eval("this.option_"+(1+i)).setScale(1);
			eval("this.option_"+(1+i)).text =  question.aOptions[i].sOptions;
		});
	}
	/* END-USER-CODE */
	 
	 

}

/* END OF COMPILED CODE */

// You can write more code here
