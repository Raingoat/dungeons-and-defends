import { Gameobject } from "../Gameobject";
import { Checkpoint } from "./Checkpoint";
import { gameobjects } from "../index";
import { Enemy } from "./Enemy";

let mapImage = document.getElementById("map") as HTMLImageElement;

export class Map extends Gameobject {
  public zindex = 4;
  constructor() {
    super();

    this.addCheckpoint(new Checkpoint(20, 20));
    this.addCheckpoint(new Checkpoint(200, 20));
  }
  public checkpoints: Array<Checkpoint> = [];
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(mapImage, 0, 0);
  }
  addCheckpoint(cp: Checkpoint) {
    this.checkpoints.push(cp);
    gameobjects.push(cp);
  }
  public enemyCount() {
    let count = 0;
    for (let i = 0; i < gameobjects.length; i++) {
      if (gameobjects[i] instanceof Enemy) {
        count = count + 1;
      }
    }
    return count;
  }
}
