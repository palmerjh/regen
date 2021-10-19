// @ts-nocheck
import Phaser from "phaser";
import * as Flows from "../consts/Flows"
import * as ImageKeys from "../consts/ImageKeys"
import * as Global from "../consts/Global"

export default class TestGarden extends Phaser.Scene
{
	init()
	{
		this.activeIsWhite = true
	}
	create()
	{
		// this.add.image(0,0,'mountain-tiles')
		const map = this.make.tilemap({ key: 'garden'})
		const mountain_tileset = map.addTilesetImage('mountain', 'mountain-tiles')
		const woods_tileset = map.addTilesetImage('woods', 'wood-tiles')
		
		const garden_layer = map.createLayer('Tile Layer 1', [mountain_tileset, woods_tileset])
		garden_layer.setCollisionByProperty( { collides: true})

		this.add.image(50, 500, ImageKeys.TreePortal).setDisplaySize(100,100)

		this.physics.world.setBounds(0, 0, Global.Width, Global.Height)

		// this.time.delayedCall(500, () => {})

		// const radius = 10
		this.white = this.createBall(0xffffff, 0x000000)
		this.black = this.createBall(0x000000, 0xffffff)
		this.black.setVisible(false)

		this.physics.add.collider(this.white, garden_layer)
		this.physics.add.collider(this.black, garden_layer)

		this.cursors = this.input.keyboard.createCursorKeys()

		this.text_flow = this.add.dom(341, 800).createFromCache(Flows.Text);

		this.prompt = this.add.text(341, 700, "flow demo:", {
			color: "#FFFFFF",
			fontSize: 60,
			fontStyle: "bold"
		}).setOrigin(0.5);

		this.flow = this.add.text(341, 800, "", {
			color: "#FFFFFF",
			fontSize: 36,
			fontStyle: "bold"
		}).setOrigin(0.5);

		this.tag = this.add.text(341, 850, "", {
			color: "#FFFFFF",
			fontSize: 30,
			fontStyle: "italic"
		}).setOrigin(0.5);

		this.privacy = this.add.text(341, 930, "", {
			color: "#FFFFFF",
			fontSize: 12,
			// fontStyle: ""
		}).setOrigin(0.5);

		this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

		// can move this to update()?
		this.returnKey.on("down", event => {
			let text = this.text_flow.getChildByName("text");
			text.value = "hold tightly let go lightly"
			if(text.value != "") {
				this.flow.setText(text.value);
				text.value = "";
				this.tag.setText("click to add tag...")
				this.privacy.setText("stay private | feel into sharing later | share in this space | share in another space")
			}
		});
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
	}

	createBall(fill, stroke)
	{
		const ball = this.add.arc(50, 400, 11)
		ball.setFillStyle(fill, 1).setStrokeStyle(1, stroke, 1)
		this.physics.add.existing(ball)
		// @ts-ignore
		ball.body.setCollideWorldBounds(true)

		return ball
	}
}