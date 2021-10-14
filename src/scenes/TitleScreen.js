// @ts-nocheck
import Phaser from "phaser";

import * as Global from "../consts/Global"
import * as Fonts from "../consts/Fonts"
// @ts-ignore
import * as Colors from "../consts/Colors"

export default class TitleScreen extends Phaser.Scene
{
	create()
	{
		// this.add.rectangle(50, 300, 30, 100, Colors.Primary, 1)
		// const text = this.add.text(400, 300, 'Regen love <3')
		this.add.text(Global.Width*0.5, Global.Height*0.4, 'ReGen', {
			fontSize: 150,
			fontFamily: Fonts.Primary,
			color: Colors.Primary_Str
		})
		.setOrigin(0.5)

		this.add.text(Global.Width*0.5, Global.Height*0.6, 'Press Space to Enter Mindfulness Garden', {
			fontSize: 30,
			fontFamily: Fonts.Primary,
			color: Colors.Primary_Str
		})
		.setOrigin(0.5)

		this.input.keyboard.on('keydown-SPACE', () => {
			console.log('space pressed')
			// this.scene.start(Game) // start removes existing scenes; run would have overlaid Game scene on Title scene
		})


	}
}