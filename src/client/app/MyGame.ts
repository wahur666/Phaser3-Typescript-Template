import Phaser from 'phaser';
import logoImg from '../assets/logo.png';
import GameConfig = Phaser.Types.Core.GameConfig;

class MyGame extends Phaser.Scene {

    preload() {
        this.load.image('logo', logoImg);
    }

    create() {
        const logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}



export const myGameConfig: () => GameConfig = () => {
    return {
        type: Phaser.WEBGL,
        width: 800,
        height: 600,
        scene: MyGame,
        render: {
            pixelArt: true,
        },
        physics: {
            default: 'arcade',
            arcade: {
                debug: true
            }
        },
        canvas: document.getElementById("cv1") as HTMLCanvasElement,
    }
};