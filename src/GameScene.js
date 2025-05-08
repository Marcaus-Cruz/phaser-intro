import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("scene-game");
  }

  preload() {
    this.load.image("bg", "assets/bg.png");
  }

  create() {
    this.add.image(0, 0, "bg").setOrigin(0, 0);
  }
  update() {}
}
