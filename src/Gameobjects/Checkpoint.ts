//penis
import { Gameobject } from "../Gameobject";

export class Checkpoint extends Gameobject {
    //Eigenschaften
    xPosCp: number;
    yPosCp: number;
    
    constructor(xPos: number, yPos: number){
        super();
        this.xPosCp = xPos;
        this.yPosCp = yPos;
    }
    
    /*render(time:number, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "violet";
        ctx.fillRect(this.xPosCp, this.yPosCp, 10, 10);
    } */
    
}