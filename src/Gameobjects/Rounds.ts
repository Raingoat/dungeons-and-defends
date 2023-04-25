import { gameobjects, map } from "../index";
import { Gameobject } from "../Gameobject";
import { Enemy } from "./Enemy";

export class Rounds extends Gameobject {
  mouseOnField: boolean = false;
  mouseClick: boolean = false;
  xPosRect: number = 100;
  yPosRect: number = 100;
  widthRect: number = 20;
  heightRect: number = 20;
  rounds: number = 0;

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "violet";
    ctx.fillRect(this.xPosRect, this.yPosRect, this.widthRect, this.heightRect);
  }
  enemySpawner(count: number) {
    console.log(count);
    if (count <= 0) return;
    gameobjects.push(new Enemy(map));
    setTimeout(() => {
      this.enemySpawner(count - 1);
    },1000/this.rounds+ 250);
  }
  onClick(event: MouseEvent) {
    let xPosInField: boolean =
      event.clientX <= this.xPosRect + this.widthRect &&
      event.clientX >= this.xPosRect;
    let yPosInField: boolean =
      event.clientY <= this.yPosRect + this.heightRect &&
      event.clientY >= this.yPosRect;
    if (xPosInField && yPosInField) {
      if( map.enemyCount() <= 0 ){
      console.log("Spawn new Enemy!");
      //Hier soll ein neuer Enemy nun entstehen
      this.rounds = this.rounds + 1;
      this.enemySpawner(this.rounds);
      }
    }
  }
}
