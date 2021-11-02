import Phaser from "phaser";

import * as SceneKeys from "../consts/SceneKeys"
import * as Global from "../consts/Global"
import * as Colors from "../consts/Colors"

import PlayerOrb from "../components/PlayerOrb";

export default class Game extends Phaser.Scene
{
	init()
	{
		this.activeIsWhite = true
		this.radius = 10
		this.speed = 200
	} 

	create()
	{
		this.scene.run(SceneKeys.TreeOfLife)
		this.scene.sendToBack(SceneKeys.TreeOfLife)

		this.physics.world.setBounds(0, 0, Global.Width, Global.Height)

		// this.time.delayedCall(500, () => {})

		// const radius = 10
		// TODO increase stroke size so that white and black are equal in proportion in circle cross-section
		// TODO down the road I'll make the tree a collision object and so the orb can fade smoothly to the tree of 
		// life garden
		this.cursors = this.input.keyboard.createCursorKeys()
		this.black = new PlayerOrb(this, Global.Width / 2, Global.Height / 2 - this.radius/2, this.radius, this.speed, this.cursors, Colors.Black)
		this.white = new PlayerOrb(this, Global.Width / 2, Global.Height / 2 - this.radius/2, this.radius, this.speed, this.cursors, Colors.White)
		this.black.setVisible(false)

		// this.cursors = this.input.keyboard.createCursorKeys()
	}

	update()
	{
		this.black.update()
		this.white.update()
		if (this.white.x < 241 || this.white.x > 441) {
			this.scene.stop(SceneKeys.TreeOfLife)
			this.scene.start(SceneKeys.Forest)

			if (this.white.y < 490) {
				// send to this color side of 2d view

			} else {
				// send to this color side of 2d view
			}
		} 
		if (this.white.y > Global.Height*0.5 - this.radius*0.5) {
			this.activeIsWhite = false
		} else {
			this.activeIsWhite = true
		}
		this.white.setVisible(this.activeIsWhite)
		this.black.setVisible(!this.activeIsWhite)
		
		if (this.white.y < 200) {
			this.scene.stop(SceneKeys.TreeOfLife)
			this.scene.start(SceneKeys.TestGarden)
		}
	}
}