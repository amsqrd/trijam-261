class SpyGame extends Phaser.Scene {
    preload() {
        // load assets
    }

    create() {

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-container",
    scene: SpyGame,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1 }
        }
    }
};

const game = new Phaser.Game(config);