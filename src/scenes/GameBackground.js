import Phaser from "phaser";

import * as Global from "../consts/Global"
import * as ImageKeys from "../consts/ImageKeys"

export default class GameBackground extends Phaser.Scene
{
	create()
	{
		const bg = this.add.image(Global.Width*0.5, Global.Height*0.5, ImageKeys.TreeBG)
		bg.setOrigin(0.5).setDisplaySize(Global.Height*0.75, Global.Height)
	}
}