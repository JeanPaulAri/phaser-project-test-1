import Phaser from 'phaser';

export default class HelloWorldScene extends Phaser.Scene {
  private platforms?: Phaser.Physics.Arcade.StaticGroup;

  constructor() {
    super({ key: 'Hello-World', active: true });
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
    const ground = this.platforms.create(400, 568, 'ground') as
      Phaser.Physics.Arcade.Sprite;
    ground
      .setScale(2)
      .refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
  }
}
