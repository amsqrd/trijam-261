class SpyGame extends Phaser.Scene {
    player;
    platforms;

    preload() {
        // load assets
        this.load.image('wall', 'assets/wall.jpg');
        this.load.image('platform', 'assets/platform.png');
        this.load.spritesheet('player', 
            'assets/player.png',
            { frameWidth: 46, frameHeight: 50 });

        this.load.audio('background-audio', 'assets/background-music.wav');
    }

    create() {
        // Setup background audio on repeat
        let backgroundAudio = this.sound.add('background-audio');
        backgroundAudio.loop = true;
        backgroundAudio.play();

        // Add wall texture
        this.add.image(400, 300, 'wall');

        // Add ground
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 600, 'platform').refreshBody();

        // Setup player sprite
        this.player = this.physics.add.sprite(100, 450, 'player');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.setGravityY(400);

        // Setup player sprite animation states
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 0 }),
            frameRate: 20
        });

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

        this.physics.add.collider(this.player, this.platforms);
    }

    update() {
        let cursors = this.input.keyboard.createCursorKeys();

        if(cursors.right.isDown) {
            this.player.setFlipX(false);
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        } else if (cursors.left.isDown) { 
            this.player.setFlipX(true);
            this.player.setVelocityX(-160);
            this.player.anims.play('right', true);
        } else if (cursors.up.isDown || cursors.space.isDown) {
            this.player.setVelocityY(-100);
            this.player.anims.play('jump');
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('idle');
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