class Cannon {
  //construir tudo
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    //2 partes do canhão (pre load)
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }
  //display- mostrar
  display() {
    //abriu
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    //fechou
    pop();
    //mostrar base do canhao em baixo por issso colocamos fora da caixinha
    image(this.cannon_base,70, 20, 200, 200);
    noFill();
  }
}
