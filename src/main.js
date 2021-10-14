import Phaser from 'phaser'

import Preload from './scenes/Preload'
import TitleScreen from './scenes/TitleScreen'

import * as Global from "./consts/Global"
import * as SceneKeys from "./consts/SceneKeys"
import * as Colors from "./consts/Colors"

const config = {
	type: Phaser.AUTO,
	width: Global.Width,
	height: Global.Height,
	// backgroundColor: Colors.Background,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: Global.Gravity_Y },
			// debug: true
		}
	}
}

const game = new Phaser.Game(config)
const test

game.scene.add(SceneKeys.Preload, Preload)
game.scene.add(SceneKeys.TitleScreen, TitleScreen)

game.scene.start(SceneKeys.Preload)

export default {
	// game
}
