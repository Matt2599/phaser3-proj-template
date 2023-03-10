export default class Fps extends Phaser.GameObjects.Text {
    constructor(scene) {
        super(scene, 10, 10, '', {color: '#E1F45E', fontSize: '28px'})
        scene.add.existing(this)
        this.setOrigin(0)
    }

    update() {
        this.setText(`fps: ${Math.floor(this.scene.game.loop.actualFps)}`)
    }
}