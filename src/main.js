import Phaser from 'phaser'

import Preload from './scenes/Preload'
import TitleScreen from './scenes/TitleScreen'
import TestBackground from './scenes/TestBackground'
import TreeOfLife from './scenes/TreeOfLife'
import Game from './scenes/Game'
import TestGarden from './scenes/TestGarden'
import Forest from './scenes/Forest'
import Compost from './scenes/Compost'
import Cultivate from './scenes/Cultivate'

import * as Global from "./consts/Global"
import * as SceneKeys from "./consts/SceneKeys"
import * as Colors from "./consts/Colors"

const config = {
	type: Phaser.AUTO,
	width: Global.Width,
	height: Global.Height,
	dom: {
		createContainer: true
	},
	backgroundColor: Colors.Background,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: Global.Gravity_Y },
			// debug: true
		}
	}
}

const game = new Phaser.Game(config)

game.scene.add(SceneKeys.Preload, Preload)
game.scene.add(SceneKeys.TitleScreen, TitleScreen)
game.scene.add(SceneKeys.TestBackground, TestBackground)
game.scene.add(SceneKeys.TreeOfLife, TreeOfLife)
game.scene.add(SceneKeys.Game, Game)
game.scene.add(SceneKeys.TestGarden, TestGarden)
game.scene.add(SceneKeys.Forest, Forest)
game.scene.add(SceneKeys.Compost, Compost)
game.scene.add(SceneKeys.Cultivate, Cultivate)

game.scene.start(SceneKeys.Preload)

export default {
	// game
}
