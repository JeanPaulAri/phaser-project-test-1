import Phaser from 'phaser';
import TestScene from './scenes/TestScene';
import HelloWorldScene from './scenes/HelloWorldScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [TestScene, HelloWorldScene],
};

export default new Phaser.Game(config);
