import Phaser from "phaser";

import * as SceneKeys from "../consts/SceneKeys"
import * as Global from "../consts/Global"

export default class Game extends Phaser.Scene
{
	init()
	{
		this.activeIsWhite = true
		this.radius = 10
	} 

	create()
	{
		this.scene.run(SceneKeys.TreeOfLife)
		this.scene.sendToBack(SceneKeys.TreeOfLife)

		this.physics.world.setBounds(0, 0, Global.Width, Global.Height)

		// this.time.delayedCall(500, () => {})

		// const radius = 10
		this.white = this.createBall(0xffffff, 0x000000)
		this.black = this.createBall(0x000000, 0xffffff)
		this.black.setVisible(false)

		this.cursors = this.input.keyboard.createCursorKeys()
	}

	update()
	{
		if (this.white.y > Global.Height*0.5 - this.radius*0.5) {
			this.activeIsWhite = false
		} else {
			this.activeIsWhite = true
		}
		this.white.setVisible(this.activeIsWhite)
		this.black.setVisible(!this.activeIsWhite)
		/** @type {Phaser.Physics.Arcade.Body} */
		// @ts-ignore
		const white = this.white.body
		/** @type {Phaser.Physics.Arcade.Body} */
		// @ts-ignore
		const black = this.black.body
		const speed = 100
		if(this.cursors.left.isDown)
		{
		  white.setVelocityX(-speed);
		  black.setVelocityX(-speed);
		//   player.anims.play('left', true);
		}
		else if (this.cursors.right.isDown)
		{
		  white.setVelocityX(speed);
		  black.setVelocityX(speed);
		//   player.anims.play('right', true);
		}
		else if(this.cursors.up.isDown)
		{
		  white.setVelocityY(-speed);
		  black.setVelocityY(-speed);
		//   player.anims.play('left', true);
		}
		else if (this.cursors.down.isDown)
		{
		  white.setVelocityY(speed);
		  black.setVelocityY(speed);
		//   player.anims.play('right', true);
		}
		else 
		{
			white.setVelocity(0);
			black.setVelocity(0);
        	// player.anims.play('turn', true);
		}
		if (this.white.y < 200) {
			this.scene.stop(SceneKeys.TreeOfLife)
			this.scene.start(SceneKeys.TestGarden)
		}
	}

	createBall(fill, stroke)
	{
		const ball = this.add.arc(Global.Width*0.5, Global.Height*0.5 - this.radius*0.5, this.radius)
		ball.setFillStyle(fill, 1).setStrokeStyle(1, stroke, 1)
		this.physics.add.existing(ball)
		// @ts-ignore
		ball.body.setCollideWorldBounds(true)

		return ball
	}
}