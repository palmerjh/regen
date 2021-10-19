import Phaser from "phaser";

export default class TestGarden extends Phaser.Scene
{
	create()
	{
		// this.add.image(0,0,'mountain-tiles')
		const map = this.make.tilemap({ key: 'garden'})
		const mountain_tileset = map.addTilesetImage('mountain', 'mountain-tiles')
		const woods_tileset = map.addTilesetImage('woods', 'wood-tiles')
		map.createLayer('Tile Layer 1', [mountain_tileset, woods_tileset])
	}
}