import {myGameConfig} from "./app/MyGame";

let game: Phaser.Game;
window.addEventListener("load", ev => {
    game = new Phaser.Game(myGameConfig());
})


window.addEventListener("beforeunload", ev => {
    game.destroy(true, false)
})