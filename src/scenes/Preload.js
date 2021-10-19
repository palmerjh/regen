import Phaser from "phaser";
import WebFontFile from "../util/WebFontFile";

import * as ImageKeys from "../consts/ImageKeys"
import * as Fonts from "../consts/Fonts"
import { TitleScreen } from "../consts/SceneKeys"
// import * as AudioKeys from '../consts/AudioKeys'

export default class Preload extends Phaser.Scene
{
	preload()
	{
		const fonts = new WebFontFile(this.load, Fonts.Primary_Single_Quotes)
		this.load.addFile(fonts)

		this.load.image(ImageKeys.TreeOfLife, 'static-images/tree-of-life.png')

		this.load.image('mountain-tiles', 'tiles/lost-garden/mountain-landscape.png')
		this.load.image('wood-tiles', 'tiles/lost-garden/wood_tileset.png')

		this.load.tilemapTiledJSON('garden', 'tiles/lost-garden/lost-garden.json')

		// this.load.svg(ImageKeys.TreeBG, 'static_images/tree.svg')
		// this.load.svg(ImageKeys.TreeOfLife, 'static_images/tree-of-life.svg')
		// this.load.image(ImageKeys.TreeOfLife, 'static_images/tree-of-life-cropped.jpg')

		// this.load.audio('test_mp3', 'sfx/mpthreetest.mp3')
		// this.load.audio(AudioKeys.PongBeep, 'sfx/ping_pong_8bit_beeep.wav')
		// this.load.audio(AudioKeys.PongBlop, 'sfx/ping_pong_8bit_plop.wav')
	}

	create()
	{
		this.scene.start(TitleScreen)
	}
}