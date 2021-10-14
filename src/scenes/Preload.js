import Phaser from "phaser";
import WebFontFile from "../util/WebFontFile";

import * as Fonts from "../consts/Fonts"
import { TitleScreen } from "../consts/SceneKeys"
// import * as AudioKeys from '../consts/AudioKeys'

export default class Preload extends Phaser.Scene
{
	preload()
	{
		const fonts = new WebFontFile(this.load, Fonts.Primary_Single_Quotes)
		this.load.addFile(fonts)

		// this.load.audio('test_mp3', 'sfx/mpthreetest.mp3')
		// this.load.audio(AudioKeys.PongBeep, 'sfx/ping_pong_8bit_beeep.wav')
		// this.load.audio(AudioKeys.PongBlop, 'sfx/ping_pong_8bit_plop.wav')
	}

	create()
	{
		this.scene.start(TitleScreen)
	}
}