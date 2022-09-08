import Phaser from 'phaser';

export default class TestScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Test-Scene', active: false });
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
    this.add.image(400, 300, 'star');
  }
}
