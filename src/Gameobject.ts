export abstract class Gameobject {
  public zindex = 5
  tick(time: number, dt: number) {}
  render(time: number, ctx: CanvasRenderingContext2D) {}
  onClick(event: MouseEvent) {}
}
