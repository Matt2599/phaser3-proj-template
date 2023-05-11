import Coin from "../objects/coin";
import Fps from "../objects/fps";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene'});
    }

    preload() {
        this.load.image('coin', 'assets/imgs/coin.png');
    }

    create() {

        new Coin(this, this.cameras.main.width / 2, 0)
        this.fps = new Fps(this)

        this.add.image(
            game.config.width / 2,
            game.config.height / 2,
            'coin'
        ).setScale(0.5);
    }

    update() {
        this.fps.update()
    }
}