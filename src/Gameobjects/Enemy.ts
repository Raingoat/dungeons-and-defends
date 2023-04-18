import { gameobjects, rounds } from "../index";
import { Gameobject } from "../Gameobject";
import { Map } from "./Map";
import { Rounds } from "./Rounds";

export class Enemy extends Gameobject {
  //Eigenschaften
  life: number = 100;
  speed: number = 75;
  xPos: number = 400;
  yPos: number = 20;
  bounty: number = 0;
  map: Map;
  cpNumber: number = 0;

  constructor(map: Map) {
    super();
    this.map = map;
    this.life = this.getDifficulty()
    
    
    
  }
  
  getDifficulty(){
    return rounds.rounds * 20;
  }

  getCurrentCheckpoint() {
    return this.map.checkpoints[this.cpNumber];
  }
  //D: Direction, N:Normalenvektor, B: Einheitsvektor
  tick(time: number, dt: number) {
  

    if (this.cpNumber < this.map.checkpoints.length) {
      let xD = this.getCurrentCheckpoint().xPosCp - this.xPos;
      let yD = this.getCurrentCheckpoint().yPosCp - this.yPos;
      let length = Math.sqrt(Math.pow(xD, 2) + Math.pow(yD, 2));
      let xN = xD / length;
      let yN = yD / length;
      let xB = xN * (this.speed / 1000) * dt;
      let yB = yN * (this.speed / 1000) * dt;
      this.xPos = xB + this.xPos;
      this.yPos = yB + this.yPos;
      if (this.hasFoundCheckpoint()) {
        this.cpNumber++;
      }
    }
    if (this.life <= 0) {
      gameobjects.splice(gameobjects.indexOf(this), 1);
    }
  }

  render(time: number, ctx: CanvasRenderingContext2D) {
    let red = (255 * (100 - this.life)) / 100;
    let green = (255 * this.life) / 100;
    let blue = (255 * this.getDifficulty()) / 100;
    ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")" ;
    ctx.fillRect(this.xPos, this.yPos, 10, 10);
  }
  private hasFoundCheckpoint(): boolean {
    let xD = this.getCurrentCheckpoint().xPosCp - this.xPos;
    let yD = this.getCurrentCheckpoint().yPosCp - this.yPos;
    let length = Math.sqrt(Math.pow(xD, 2) + Math.pow(yD, 2));
    return length <= 1;
  }
}
