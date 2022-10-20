import Phaser from 'phaser';

export default class HelloWorldScene extends Phaser.Scene {
  // "declaring group of platform"
  private platforms?: Phaser.Physics.Arcade.StaticGroup;

  // "declaring player"
  private player?: Phaser.Physics.Arcade.Sprite;

  constructor() {
    super({ key: 'Hello-World' });
  }

  preload() {
    this.load.image('sky', 'images/sky.png');
    this.load.image('ground', 'images/platform.png');
    this.load.image('star', 'images/star.png');
    this.load.image('bomb', 'images/bomb.png');
    this.load.spritesheet(
      'player',
      'images/dude.png',
      { frameWidth: 32, frameHeight: 48 },
    );
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.platforms = this.physics.add.staticGroup();
    const baseGround = this.platforms.create(400, 568, 'ground') as
      Phaser.Physics.Arcade.Sprite;
    baseGround
      .setScale(2)
      .refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.player = this.physics.add.sprite(100, 450, 'player');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', {
        start: 0,
        end: 3,
      }),
    });
  }
}
