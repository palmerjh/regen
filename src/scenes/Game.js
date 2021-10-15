import Phaser from "phaser";

import * as SceneKeys from "../consts/SceneKeys"
import * as Global from "../consts/Global"

export default class Game extends Phaser.Scene
{
	create()
	{
		this.scene.run(SceneKeys.TreeOfLife)
		this.scene.sendToBack(SceneKeys.TreeOfLife)

		this.physics.world.setBounds(0, 0, Global.Width, Global.Height)

		this.player = this.add.arc(Global.Width*0.5, Global.Height*0.5, 20)
		this.player.setFillStyle(0xffffff, 1)//.setStrokeStyle(5, 0x000000, 1)
		this.physics.add.existing(this.player)
		this.player.body.setCollideWorldBounds(true)
		// console.dir(this.player)

		this.cursors = this.input.keyboard.createCursorKeys()
	}

	update()
	{
		const speed = 100
		if(this.cursors.left.isDown)
		{
		  this.player.body.setVelocityX(-speed);
		//   player.anims.play('left', true);
		}
		else if (this.cursors.right.isDown)
		{
		  this.player.body.setVelocityX(speed);
		//   player.anims.play('right', true);
		}
		else if(this.cursors.up.isDown)
		{
		  this.player.body.setVelocityY(-speed);
		//   player.anims.play('left', true);
		}
		else if (this.cursors.down.isDown)
		{
		  this.player.body.setVelocityY(speed);
		//   player.anims.play('right', true);
		}
		else 
		{
			this.player.body.setVelocity(0);
        	// player.anims.play('turn', true);
		}
	}
}