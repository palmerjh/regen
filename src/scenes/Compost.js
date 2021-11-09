import Phaser from "phaser";

import * as Colors from "../consts/Colors"
import * as Global from "../consts/Global" 
import * as Fonts from "../consts/Fonts"

export default class Compost extends Phaser.Scene
{
	create()
	{
		this.add.rectangle(0,0,2*Global.Width,2*Global.Height,Colors.Black)
		this.add.text(Global.Width*0.5, Global.Height*0.6, 'what i am composting', {
			fontSize: 30,
			fontFamily: Fonts.Primary,
			color: Colors.White_Str
		})
		.setOrigin(0.5)
	}
}