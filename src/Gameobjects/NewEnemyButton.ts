import { gameobjects, map } from "../index";
import { Gameobject } from "../Gameobject";
import { Enemy } from "./Enemy";

export class NewEnemyButton extends Gameobject {
  mouseOnField: boolean = false;
  mouseClick: boolean = false;
  xPosRect: number = 10;
  yPosRect: number = 100;
  widthRect: number = 20;
  heightRect: number = 20;

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "violet";
    ctx.fillRect(this.xPosRect, this.yPosRect, this.widthRect, this.heightRect);
  }

  onClick(event: MouseEvent) {
    let xPosInField: boolean =
      event.clientX <= this.xPosRect + this.widthRect &&
      event.clientX >= this.xPosRect;
    let yPosInField: boolean =
      event.clientY <= this.yPosRect + this.heightRect &&
      event.clientY >= this.yPosRect;
    if (xPosInField && yPosInField) {
      console.log("Spawn new Enemy!");
      //Hier soll ein neuer Enemy nun entstehen
      gameobjects.push(new Enemy(map));
    }
  }
}
