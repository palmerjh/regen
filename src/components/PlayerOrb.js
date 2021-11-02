import Phaser from "phaser";

// @ts-ignore
import * as Global from "../consts/Global"
import * as Colors from "../consts/Colors"

export default class extends Phaser.GameObjects.Arc
{
	constructor(scene, x, y, radius, speed, cursors, fill)
	{
		super(scene, x, y, radius)
		this.fill = fill
		this.setFillStyle(this.fill, 1).setStrokeStyle(1, this.flipColor(this.fill), 1)
		this.scene = scene
		this.speed = speed
		this.cursors = cursors

		scene.add.existing(this)

		scene.physics.add.existing(this)
		// @ts-ignore
		this.body.setCollideWorldBounds(true)

	}

	update()
	{
		/** @type {Phaser.Physics.Arcade.Body} */
		// @ts-ignore
		const player = this.body
		/** @type {Phaser.Physics.Arcade.Body} */
		// @ts-ignore
		const speed = this.speed
		if(this.cursors.left.isDown) {
			console.log('down')
		  	player.setVelocityX(-speed);
			//   player.anims.play('left', true);
		} else if (this.cursors.right.isDown) {
			// @ts-ignore
			player.setVelocityX(speed);
			//   player.anims.play('right', true);
		} else if(this.cursors.up.isDown) {
			player.setVelocityY(-speed);
			//   player.anims.play('left', true);
		} else if (this.cursors.down.isDown) {
			// @ts-ignore
			player.setVelocityY(speed);
			//   player.anims.play('right', true);
		} else { 
			player.setVelocity(0);
        	// player.anims.play('turn', true);
		}
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
	flip()
	{
		this.fill = this.flipColor(this.fill)
		this.setFillStyle(this.fill, 1).setStrokeStyle(1, this.flipColor(this.fill), 1)
	}
}