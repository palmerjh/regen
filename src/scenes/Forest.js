import Phaser from "phaser";

import * as Global from "../consts/Global"
import * as Colors from "../consts/Colors"
import * as SceneKeys from "../consts/SceneKeys"

import PlayerOrb from "../components/PlayerOrb"

export default class extends Phaser.Scene
{
	init()
	{
		// TODO figure out how to pass parameters to Scene
		// maybe same as PlayerOrb---through constructor?
		this.cultivating = true
		this.radius = 10
		this.speed = 200
		this.init_x = Global.Width / 2
		this.init_y = Global.Height / 2 - this.radius/2

	}
	create()
	{
		// TODO just create one orb and change its fill
		this.physics.world.setBounds(0, 0, Global.Width, Global.Height)
		this.cursors = this.input.keyboard.createCursorKeys()
		// this.black = new PlayerOrb(this, Global.Width / 2, Global.Height / 2 - this.radius/2, this.radius, this.speed, this.cursors, Colors.Black)
		// this.white = new PlayerOrb(this, Global.Width / 2, Global.Height / 2 - this.radius/2, this.radius, this.speed, this.cursors, Colors.White)
		
		let initFill = Colors.Black
		// this.scene.run(SceneKeys.Compost)
		// this.scene.run(SceneKeys.Cultivate)


		// if (this.cultivating) {
		// 	this.scene.sendToBack(SceneKeys.Compost)
		// } else {
		// 	initFill = Colors.White
		// 	this.scene.sendToBack(SceneKeys.Cultivate)
		// }

		if (this.cultivating) {
			this.scene.run(SceneKeys.Cultivate)
			this.scene.sendToBack(SceneKeys.Cultivate)
		} else {
			initFill = Colors.White
			this.scene.start(SceneKeys.Compost)
			this.scene.sendToBack(SceneKeys.Compost)
		}

		this.tree = this.add.arc(this.init_x, this.init_y, 20)
		this.tree.setFillStyle(this.flipColor(initFill), 1).setStrokeStyle(10, initFill, 1)

		this.player = new PlayerOrb(this, this.init_x, this.init_y, this.radius, this.speed, this.cursors, initFill)

		this.input.keyboard.on('keydown-SPACE', () => {
			// console.log('space pressed')
			this.player.flip()
			const treeFill = this.tree.fillColor
			this.tree.setFillStyle(this.flipColor(treeFill), 1).setStrokeStyle(10, treeFill, 1)

			if (this.cultivating) {
				this.scene.stop(SceneKeys.Cultivate)
				this.scene.run(SceneKeys.Compost)
				this.scene.sendToBack(SceneKeys.Compost)
			} else {
				this.scene.stop(SceneKeys.Compost)
				this.scene.run(SceneKeys.Cultivate)
				this.scene.sendToBack(SceneKeys.Cultivate)
			}
			this.cultivating = !this.cultivating
		})

		this.input.keyboard.once('keydown-ENTER', () => {
			if (this.cultivating) {
				this.scene.stop(SceneKeys.Cultivate)
			} else {
				this.scene.stop(SceneKeys.Compost)
			}
			this.scene.start(SceneKeys.Game) // removes TitleScreen scene and starts Game
		})
	}
	update()
	{
		this.player.update()
	}
	flipColor(color)
	{
		if (color === Colors.White) {
			return Colors.Black
		} else if (color === Colors.Black) {
			return Colors.White
		} else {
			console.log('color is not black or white')
		}
	}
}