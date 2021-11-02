import Phaser from "phaser";

import * as Global from "../consts/Global"
import * as ImageKeys from "../consts/ImageKeys"

export default class TreeOfLife extends Phaser.Scene
{
	preload()
	{
		// this.load.image(ImageKeys.TreeOfLife, 'static-images/tree-of-life.png')
	}
	create()
	{
		// const bg = this.add.image(Global.Width*0.5, Global.Height*0.5, ImageKeys.TreeOfLife)
		// bg.setOrigin(0.5).setDisplaySize(Global.Height*0.75, Global.Height)
		const bg = this.add.image(0, 0, ImageKeys.TreeOfLife).setOrigin(0)
		// const camera = this.cameras.add(0, 0, bg.width, bg.height)
		// this.cameras.resize(bg.width, bg.height)
		// camera.setBackgroundColor(0xffffff)

		this.add.text(575, 460, "gardens", {
			color: "#000000",
			// @ts-ignore
			fontSize: 32,
			fontStyle: "bold"
		}).setOrigin(0.5);

		this.add.text(575, 505, "gardeners", {
			color: "#FFFFFF",
			fontSize: 32,
			fontStyle: "bold"
		}).setOrigin(0.5);

	}
}