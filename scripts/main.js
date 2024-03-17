class SpyGame extends Phaser.Scene {
    player;

    preload() {
        // load assets
        this.load.image('wall', 'assets/wall.jpg');
        this.load.spritesheet('player', 
            'assets/player.png',
            { frameWidth: 46, frameHeight: 50 });

        this.load.audio('background-audio', 'assets/background-music.wav');
    }

    create() {
        let backgroundAudio = this.sound.add('background-audio');
        backgroundAudio.loop = true;
        backgroundAudio.play();

        this.add.image(400, 300, 'wall');

        this.player = this.physics.add.sprite(100, 450, 'player');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 24, end: 31 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('player', { start: 24, end: 31 }),
            frameRate: 10,
            repeat: -1
        });
    }

    update() {
        let cursors = this.input.keyboard.createCursorKeys();

        if(cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
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