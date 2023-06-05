
// You can write more code here

/* START OF COMPILED CODE */

class Game extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// container_background
		const container_background = scene.add.container(0, 0);
		this.add(container_background);

		// game_board
		const game_board = scene.add.image(540, 960, "game-board");
		container_background.add(game_board);

		// container_map_board
		const container_map_board = scene.add.container(0, 0);
		this.add(container_map_board);

		// map_1
		const map_1 = scene.add.rectangle(89, 1413, 90, 90);
		map_1.isStroked = true;
		map_1.strokeAlpha = 3;
		map_1.lineWidth = 3;
		container_map_board.add(map_1);

		// map_2
		const map_2 = scene.add.rectangle(189, 1412, 90, 90);
		map_2.isStroked = true;
		map_2.strokeAlpha = 3;
		map_2.lineWidth = 3;
		container_map_board.add(map_2);

		// map_3
		const map_3 = scene.add.rectangle(289, 1412, 90, 90);
		map_3.isStroked = true;
		map_3.strokeAlpha = 3;
		map_3.lineWidth = 3;
		container_map_board.add(map_3);

		// map_4
		const map_4 = scene.add.rectangle(390, 1412, 90, 90);
		map_4.isStroked = true;
		map_4.strokeAlpha = 3;
		map_4.lineWidth = 3;
		container_map_board.add(map_4);

		// map_5
		const map_5 = scene.add.rectangle(490, 1412, 90, 90);
		map_5.isStroked = true;
		map_5.strokeAlpha = 3;
		map_5.lineWidth = 3;
		container_map_board.add(map_5);

		// map_6
		const map_6 = scene.add.rectangle(590, 1412, 90, 90);
		map_6.isStroked = true;
		map_6.strokeAlpha = 3;
		map_6.lineWidth = 3;
		container_map_board.add(map_6);

		// map_7
		const map_7 = scene.add.rectangle(691, 1413, 90, 90);
		map_7.isStroked = true;
		map_7.strokeAlpha = 3;
		map_7.lineWidth = 3;
		container_map_board.add(map_7);

		// map_8
		const map_8 = scene.add.rectangle(791, 1413, 90, 90);
		map_8.isStroked = true;
		map_8.strokeAlpha = 3;
		map_8.lineWidth = 3;
		container_map_board.add(map_8);

		// map_9
		const map_9 = scene.add.rectangle(891, 1413, 90, 90);
		map_9.isStroked = true;
		map_9.strokeAlpha = 3;
		map_9.lineWidth = 3;
		container_map_board.add(map_9);

		// map_10
		const map_10 = scene.add.rectangle(991, 1413, 90, 90);
		map_10.isStroked = true;
		map_10.strokeAlpha = 3;
		map_10.lineWidth = 3;
		container_map_board.add(map_10);

		// map_11
		const map_11 = scene.add.rectangle(992, 1312, 90, 90);
		map_11.isStroked = true;
		map_11.strokeAlpha = 3;
		map_11.lineWidth = 3;
		container_map_board.add(map_11);

		// map_12
		const map_12 = scene.add.rectangle(892, 1311, 90, 90);
		map_12.isStroked = true;
		map_12.strokeAlpha = 3;
		map_12.lineWidth = 3;
		container_map_board.add(map_12);

		// map_13
		const map_13 = scene.add.rectangle(792, 1311, 90, 90);
		map_13.isStroked = true;
		map_13.strokeAlpha = 3;
		map_13.lineWidth = 3;
		container_map_board.add(map_13);

		// map_14
		const map_14 = scene.add.rectangle(692, 1311, 90, 90);
		map_14.isStroked = true;
		map_14.strokeAlpha = 3;
		map_14.lineWidth = 3;
		container_map_board.add(map_14);

		// map_15
		const map_15 = scene.add.rectangle(591, 1311, 90, 90);
		map_15.isStroked = true;
		map_15.strokeAlpha = 3;
		map_15.lineWidth = 3;
		container_map_board.add(map_15);

		// map_16
		const map_16 = scene.add.rectangle(491, 1311, 90, 90);
		map_16.isStroked = true;
		map_16.strokeAlpha = 3;
		map_16.lineWidth = 3;
		container_map_board.add(map_16);

		// map_17
		const map_17 = scene.add.rectangle(391, 1311, 90, 90);
		map_17.isStroked = true;
		map_17.strokeAlpha = 3;
		map_17.lineWidth = 3;
		container_map_board.add(map_17);

		// map_18
		const map_18 = scene.add.rectangle(290, 1311, 90, 90);
		map_18.isStroked = true;
		map_18.strokeAlpha = 3;
		map_18.lineWidth = 3;
		container_map_board.add(map_18);

		// map_19
		const map_19 = scene.add.rectangle(190, 1312, 90, 90);
		map_19.isStroked = true;
		map_19.strokeAlpha = 3;
		map_19.lineWidth = 3;
		container_map_board.add(map_19);

		// map_20
		const map_20 = scene.add.rectangle(90, 1310, 90, 90);
		map_20.isStroked = true;
		map_20.strokeAlpha = 3;
		map_20.lineWidth = 3;
		container_map_board.add(map_20);

		// map_21
		const map_21 = scene.add.rectangle(89, 1214, 90, 90);
		map_21.isStroked = true;
		map_21.strokeAlpha = 3;
		map_21.lineWidth = 3;
		container_map_board.add(map_21);

		// map_22
		const map_22 = scene.add.rectangle(189, 1213, 90, 90);
		map_22.isStroked = true;
		map_22.strokeAlpha = 3;
		map_22.lineWidth = 3;
		container_map_board.add(map_22);

		// map_23
		const map_23 = scene.add.rectangle(289, 1213, 90, 90);
		map_23.isStroked = true;
		map_23.strokeAlpha = 3;
		map_23.lineWidth = 3;
		container_map_board.add(map_23);

		// map_24
		const map_24 = scene.add.rectangle(390, 1213, 90, 90);
		map_24.isStroked = true;
		map_24.strokeAlpha = 3;
		map_24.lineWidth = 3;
		container_map_board.add(map_24);

		// map_25
		const map_25 = scene.add.rectangle(490, 1213, 90, 90);
		map_25.isStroked = true;
		map_25.strokeAlpha = 3;
		map_25.lineWidth = 3;
		container_map_board.add(map_25);

		// map_26
		const map_26 = scene.add.rectangle(590, 1213, 90, 90);
		map_26.isStroked = true;
		map_26.strokeAlpha = 3;
		map_26.lineWidth = 3;
		container_map_board.add(map_26);

		// map_27
		const map_27 = scene.add.rectangle(691, 1213, 90, 90);
		map_27.isStroked = true;
		map_27.strokeAlpha = 3;
		map_27.lineWidth = 3;
		container_map_board.add(map_27);

		// map_28
		const map_28 = scene.add.rectangle(791, 1213, 90, 90);
		map_28.isStroked = true;
		map_28.strokeAlpha = 3;
		map_28.lineWidth = 3;
		container_map_board.add(map_28);

		// map_29
		const map_29 = scene.add.rectangle(891, 1213, 90, 90);
		map_29.isStroked = true;
		map_29.strokeAlpha = 3;
		map_29.lineWidth = 3;
		container_map_board.add(map_29);

		// map_30
		const map_30 = scene.add.rectangle(991, 1213, 90, 90);
		map_30.isStroked = true;
		map_30.strokeAlpha = 3;
		map_30.lineWidth = 3;
		container_map_board.add(map_30);

		// map_31
		const map_31 = scene.add.rectangle(992, 1112, 90, 90);
		map_31.isStroked = true;
		map_31.strokeAlpha = 3;
		map_31.lineWidth = 3;
		container_map_board.add(map_31);

		// map_32
		const map_32 = scene.add.rectangle(892, 1111, 90, 90);
		map_32.isStroked = true;
		map_32.strokeAlpha = 3;
		map_32.lineWidth = 3;
		container_map_board.add(map_32);

		// map_33
		const map_33 = scene.add.rectangle(792, 1111, 90, 90);
		map_33.isStroked = true;
		map_33.strokeAlpha = 3;
		map_33.lineWidth = 3;
		container_map_board.add(map_33);

		// map_34
		const map_34 = scene.add.rectangle(692, 1111, 90, 90);
		map_34.isStroked = true;
		map_34.strokeAlpha = 3;
		map_34.lineWidth = 3;
		container_map_board.add(map_34);

		// map_35
		const map_35 = scene.add.rectangle(591, 1111, 90, 90);
		map_35.isStroked = true;
		map_35.strokeAlpha = 3;
		map_35.lineWidth = 3;
		container_map_board.add(map_35);

		// map_36
		const map_36 = scene.add.rectangle(491, 1111, 90, 90);
		map_36.isStroked = true;
		map_36.strokeAlpha = 3;
		map_36.lineWidth = 3;
		container_map_board.add(map_36);

		// map_37
		const map_37 = scene.add.rectangle(391, 1111, 90, 90);
		map_37.isStroked = true;
		map_37.strokeAlpha = 3;
		map_37.lineWidth = 3;
		container_map_board.add(map_37);

		// map_38
		const map_38 = scene.add.rectangle(290, 1111, 90, 90);
		map_38.isStroked = true;
		map_38.strokeAlpha = 3;
		map_38.lineWidth = 3;
		container_map_board.add(map_38);

		// map_39
		const map_39 = scene.add.rectangle(190, 1112, 90, 90);
		map_39.isStroked = true;
		map_39.strokeAlpha = 3;
		map_39.lineWidth = 3;
		container_map_board.add(map_39);

		// map_40
		const map_40 = scene.add.rectangle(90, 1110, 90, 90);
		map_40.isStroked = true;
		map_40.strokeAlpha = 3;
		map_40.lineWidth = 3;
		container_map_board.add(map_40);

		// map_41
		const map_41 = scene.add.rectangle(89, 1011, 90, 90);
		map_41.isStroked = true;
		map_41.strokeAlpha = 3;
		map_41.lineWidth = 3;
		container_map_board.add(map_41);

		// map_42
		const map_42 = scene.add.rectangle(189, 1010, 90, 90);
		map_42.isStroked = true;
		map_42.strokeAlpha = 3;
		map_42.lineWidth = 3;
		container_map_board.add(map_42);

		// map_43
		const map_43 = scene.add.rectangle(289, 1010, 90, 90);
		map_43.isStroked = true;
		map_43.strokeAlpha = 3;
		map_43.lineWidth = 3;
		container_map_board.add(map_43);

		// map_44
		const map_44 = scene.add.rectangle(390, 1010, 90, 90);
		map_44.isStroked = true;
		map_44.strokeAlpha = 3;
		map_44.lineWidth = 3;
		container_map_board.add(map_44);

		// map_45
		const map_45 = scene.add.rectangle(490, 1010, 90, 90);
		map_45.isStroked = true;
		map_45.strokeAlpha = 3;
		map_45.lineWidth = 3;
		container_map_board.add(map_45);

		// map_46
		const map_46 = scene.add.rectangle(590, 1010, 90, 90);
		map_46.isStroked = true;
		map_46.strokeAlpha = 3;
		map_46.lineWidth = 3;
		container_map_board.add(map_46);

		// map_47
		const map_47 = scene.add.rectangle(691, 1010, 90, 90);
		map_47.isStroked = true;
		map_47.strokeAlpha = 3;
		map_47.lineWidth = 3;
		container_map_board.add(map_47);

		// map_48
		const map_48 = scene.add.rectangle(791, 1010, 90, 90);
		map_48.isStroked = true;
		map_48.strokeAlpha = 3;
		map_48.lineWidth = 3;
		container_map_board.add(map_48);

		// map_49
		const map_49 = scene.add.rectangle(891, 1010, 90, 90);
		map_49.isStroked = true;
		map_49.strokeAlpha = 3;
		map_49.lineWidth = 3;
		container_map_board.add(map_49);

		// map_50
		const map_50 = scene.add.rectangle(991, 1010, 90, 90);
		map_50.isStroked = true;
		map_50.strokeAlpha = 3;
		map_50.lineWidth = 3;
		container_map_board.add(map_50);

		// map_51
		const map_51 = scene.add.rectangle(992, 912, 90, 90);
		map_51.isStroked = true;
		map_51.strokeAlpha = 3;
		map_51.lineWidth = 3;
		container_map_board.add(map_51);

		// map_52
		const map_52 = scene.add.rectangle(892, 912, 90, 90);
		map_52.isStroked = true;
		map_52.strokeAlpha = 3;
		map_52.lineWidth = 3;
		container_map_board.add(map_52);

		// map_53
		const map_53 = scene.add.rectangle(792, 912, 90, 90);
		map_53.isStroked = true;
		map_53.strokeAlpha = 3;
		map_53.lineWidth = 3;
		container_map_board.add(map_53);

		// map_54
		const map_54 = scene.add.rectangle(692, 912, 90, 90);
		map_54.isStroked = true;
		map_54.strokeAlpha = 3;
		map_54.lineWidth = 3;
		container_map_board.add(map_54);

		// map_55
		const map_55 = scene.add.rectangle(591, 911, 90, 90);
		map_55.isStroked = true;
		map_55.strokeAlpha = 3;
		map_55.lineWidth = 3;
		container_map_board.add(map_55);

		// map_56
		const map_56 = scene.add.rectangle(491, 911, 90, 90);
		map_56.isStroked = true;
		map_56.strokeAlpha = 3;
		map_56.lineWidth = 3;
		container_map_board.add(map_56);

		// map_57
		const map_57 = scene.add.rectangle(391, 911, 90, 90);
		map_57.isStroked = true;
		map_57.strokeAlpha = 3;
		map_57.lineWidth = 3;
		container_map_board.add(map_57);

		// map_58
		const map_58 = scene.add.rectangle(290, 911, 90, 90);
		map_58.isStroked = true;
		map_58.strokeAlpha = 3;
		map_58.lineWidth = 3;
		container_map_board.add(map_58);

		// map_59
		const map_59 = scene.add.rectangle(190, 911, 90, 90);
		map_59.isStroked = true;
		map_59.strokeAlpha = 3;
		map_59.lineWidth = 3;
		container_map_board.add(map_59);

		// map_60
		const map_60 = scene.add.rectangle(90, 912, 90, 90);
		map_60.isStroked = true;
		map_60.strokeAlpha = 3;
		map_60.lineWidth = 3;
		container_map_board.add(map_60);

		// map_61
		const map_61 = scene.add.rectangle(91, 809, 90, 90);
		map_61.isStroked = true;
		map_61.strokeAlpha = 3;
		map_61.lineWidth = 3;
		container_map_board.add(map_61);

		// map_62
		const map_62 = scene.add.rectangle(191, 811, 90, 90);
		map_62.isStroked = true;
		map_62.strokeAlpha = 3;
		map_62.lineWidth = 3;
		container_map_board.add(map_62);

		// map_63
		const map_63 = scene.add.rectangle(291, 810, 90, 90);
		map_63.isStroked = true;
		map_63.strokeAlpha = 3;
		map_63.lineWidth = 3;
		container_map_board.add(map_63);

		// map_64
		const map_64 = scene.add.rectangle(392, 810, 90, 90);
		map_64.isStroked = true;
		map_64.strokeAlpha = 3;
		map_64.lineWidth = 3;
		container_map_board.add(map_64);

		// map_65
		const map_65 = scene.add.rectangle(492, 810, 90, 90);
		map_65.isStroked = true;
		map_65.strokeAlpha = 3;
		map_65.lineWidth = 3;
		container_map_board.add(map_65);

		// map_66
		const map_66 = scene.add.rectangle(592, 810, 90, 90);
		map_66.isStroked = true;
		map_66.strokeAlpha = 3;
		map_66.lineWidth = 3;
		container_map_board.add(map_66);

		// map_67
		const map_67 = scene.add.rectangle(693, 810, 90, 90);
		map_67.isStroked = true;
		map_67.strokeAlpha = 3;
		map_67.lineWidth = 3;
		container_map_board.add(map_67);

		// map_68
		const map_68 = scene.add.rectangle(793, 810, 90, 90);
		map_68.isStroked = true;
		map_68.strokeAlpha = 3;
		map_68.lineWidth = 3;
		container_map_board.add(map_68);

		// map_69
		const map_69 = scene.add.rectangle(893, 810, 90, 90);
		map_69.isStroked = true;
		map_69.strokeAlpha = 3;
		map_69.lineWidth = 3;
		container_map_board.add(map_69);

		// map_70
		const map_70 = scene.add.rectangle(993, 811, 90, 90);
		map_70.isStroked = true;
		map_70.strokeAlpha = 3;
		map_70.lineWidth = 3;
		container_map_board.add(map_70);

		// map_71
		const map_71 = scene.add.rectangle(992, 712, 90, 90);
		map_71.isStroked = true;
		map_71.strokeAlpha = 3;
		map_71.lineWidth = 3;
		container_map_board.add(map_71);

		// map_72
		const map_72 = scene.add.rectangle(892, 712, 90, 90);
		map_72.isStroked = true;
		map_72.strokeAlpha = 3;
		map_72.lineWidth = 3;
		container_map_board.add(map_72);

		// map_73
		const map_73 = scene.add.rectangle(792, 712, 90, 90);
		map_73.isStroked = true;
		map_73.strokeAlpha = 3;
		map_73.lineWidth = 3;
		container_map_board.add(map_73);

		// map_74
		const map_74 = scene.add.rectangle(692, 712, 90, 90);
		map_74.isStroked = true;
		map_74.strokeAlpha = 3;
		map_74.lineWidth = 3;
		container_map_board.add(map_74);

		// map_75
		const map_75 = scene.add.rectangle(591, 712, 90, 90);
		map_75.isStroked = true;
		map_75.strokeAlpha = 3;
		map_75.lineWidth = 3;
		container_map_board.add(map_75);

		// map_76
		const map_76 = scene.add.rectangle(491, 712, 90, 90);
		map_76.isStroked = true;
		map_76.strokeAlpha = 3;
		map_76.lineWidth = 3;
		container_map_board.add(map_76);

		// map_77
		const map_77 = scene.add.rectangle(391, 712, 90, 90);
		map_77.isStroked = true;
		map_77.strokeAlpha = 3;
		map_77.lineWidth = 3;
		container_map_board.add(map_77);

		// map_78
		const map_78 = scene.add.rectangle(290, 712, 90, 90);
		map_78.isStroked = true;
		map_78.strokeAlpha = 3;
		map_78.lineWidth = 3;
		container_map_board.add(map_78);

		// map_79
		const map_79 = scene.add.rectangle(190, 712, 90, 90);
		map_79.isStroked = true;
		map_79.strokeAlpha = 3;
		map_79.lineWidth = 3;
		container_map_board.add(map_79);

		// map_80
		const map_80 = scene.add.rectangle(90, 713, 90, 90);
		map_80.isStroked = true;
		map_80.strokeAlpha = 3;
		map_80.lineWidth = 3;
		container_map_board.add(map_80);

		// map_81
		const map_81 = scene.add.rectangle(91, 609, 90, 90);
		map_81.isStroked = true;
		map_81.strokeAlpha = 3;
		map_81.lineWidth = 3;
		container_map_board.add(map_81);

		// map_82
		const map_82 = scene.add.rectangle(191, 611, 90, 90);
		map_82.isStroked = true;
		map_82.strokeAlpha = 3;
		map_82.lineWidth = 3;
		container_map_board.add(map_82);

		// map_83
		const map_83 = scene.add.rectangle(291, 610, 90, 90);
		map_83.isStroked = true;
		map_83.strokeAlpha = 3;
		map_83.lineWidth = 3;
		container_map_board.add(map_83);

		// map_84
		const map_84 = scene.add.rectangle(392, 610, 90, 90);
		map_84.isStroked = true;
		map_84.strokeAlpha = 3;
		map_84.lineWidth = 3;
		container_map_board.add(map_84);

		// map_85
		const map_85 = scene.add.rectangle(492, 610, 90, 90);
		map_85.isStroked = true;
		map_85.strokeAlpha = 3;
		map_85.lineWidth = 3;
		container_map_board.add(map_85);

		// map_86
		const map_86 = scene.add.rectangle(592, 610, 90, 90);
		map_86.isStroked = true;
		map_86.strokeAlpha = 3;
		map_86.lineWidth = 3;
		container_map_board.add(map_86);

		// map_87
		const map_87 = scene.add.rectangle(693, 610, 90, 90);
		map_87.isStroked = true;
		map_87.strokeAlpha = 3;
		map_87.lineWidth = 3;
		container_map_board.add(map_87);

		// map_88
		const map_88 = scene.add.rectangle(793, 610, 90, 90);
		map_88.isStroked = true;
		map_88.strokeAlpha = 3;
		map_88.lineWidth = 3;
		container_map_board.add(map_88);

		// map_89
		const map_89 = scene.add.rectangle(893, 610, 90, 90);
		map_89.isStroked = true;
		map_89.strokeAlpha = 3;
		map_89.lineWidth = 3;
		container_map_board.add(map_89);

		// map_90
		const map_90 = scene.add.rectangle(993, 611, 90, 90);
		map_90.isStroked = true;
		map_90.strokeAlpha = 3;
		map_90.lineWidth = 3;
		container_map_board.add(map_90);

		// map_91
		const map_91 = scene.add.rectangle(992, 509, 90, 90);
		map_91.isStroked = true;
		map_91.strokeAlpha = 3;
		map_91.lineWidth = 3;
		container_map_board.add(map_91);

		// map_92
		const map_92 = scene.add.rectangle(892, 509, 90, 90);
		map_92.isStroked = true;
		map_92.strokeAlpha = 3;
		map_92.lineWidth = 3;
		container_map_board.add(map_92);

		// map_93
		const map_93 = scene.add.rectangle(792, 509, 90, 90);
		map_93.isStroked = true;
		map_93.strokeAlpha = 3;
		map_93.lineWidth = 3;
		container_map_board.add(map_93);

		// map_94
		const map_94 = scene.add.rectangle(692, 509, 90, 90);
		map_94.isStroked = true;
		map_94.strokeAlpha = 3;
		map_94.lineWidth = 3;
		container_map_board.add(map_94);

		// map_95
		const map_95 = scene.add.rectangle(591, 509, 90, 90);
		map_95.isStroked = true;
		map_95.strokeAlpha = 3;
		map_95.lineWidth = 3;
		container_map_board.add(map_95);

		// map_96
		const map_96 = scene.add.rectangle(491, 509, 90, 90);
		map_96.isStroked = true;
		map_96.strokeAlpha = 3;
		map_96.lineWidth = 3;
		container_map_board.add(map_96);

		// map_97
		const map_97 = scene.add.rectangle(391, 509, 90, 90);
		map_97.isStroked = true;
		map_97.strokeAlpha = 3;
		map_97.lineWidth = 3;
		container_map_board.add(map_97);

		// map_98
		const map_98 = scene.add.rectangle(290, 509, 90, 90);
		map_98.isStroked = true;
		map_98.strokeAlpha = 3;
		map_98.lineWidth = 3;
		container_map_board.add(map_98);

		// map_99
		const map_99 = scene.add.rectangle(190, 509, 90, 90);
		map_99.isStroked = true;
		map_99.strokeAlpha = 3;
		map_99.lineWidth = 3;
		container_map_board.add(map_99);

		// map_100
		const map_100 = scene.add.rectangle(90, 509, 90, 90);
		map_100.isStroked = true;
		map_100.strokeAlpha = 3;
		map_100.lineWidth = 3;
		container_map_board.add(map_100);

		this.container_map_board = container_map_board;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	container_map_board;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
