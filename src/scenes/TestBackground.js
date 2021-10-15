import Phaser from "phaser";

import * as Global from "../consts/Global"
import * as ImageKeys from "../consts/ImageKeys"

export default class TestBackground extends Phaser.Scene
{
	create()
	{
		const bg = this.add.image(Global.Width*0.5, Global.Height*0.5, ImageKeys.TreeBG)
		bg.setOrigin(0.5).setDisplaySize(Global.Height*0.75, Global.Height)
		// const bg = this.add.image(0, 0, ImageKeys.TreeOfLife)
		// const camera = this.cameras.add(0, 0, bg.width, bg.height)
		// this.cameras.resize(bg.width, bg.height)
		// camera.setBackgroundColor(0xffffff)

	}
}