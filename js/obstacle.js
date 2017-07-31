// Global variables
var obstacles = [];
var obst_number = 20;
var obst_images = ["images/obstacle/plastic-bag.png", "images/obstacle/six-pack.png", "images/obstacle/jellyfish.png"];
var obst_images_dimensions= [95, 66, 400, 386, 792, 1400];
var bag = 0, max_bag = 0;
var pack = 0, max_pack = 0;
var jellyfish = 0, max_jellyfish = 0;
    
class Obstacle {
    constructor(x0, y0, img){
        this.x = x0;
        this.y = y0;
        this.src_img = img[0];
        this.img_w = img[1];
        this.img_h = img[2];
        this.img = new Image();
        this.velocity_x =  Math.random() * 0.50;
        this.velocity_y = Math.random() * 0.50;
        this.gravity = 0.25;
        this.w = 50;
        this.h = 50;
        if (this.src_img == "images/obstacle/plastic-bag.png") {this.id = "bag"; bag+=1; max_bag+=1;}
        else if (this.src_img == "images/obstacle/six-pack.png") {this.id = "pack"; pack+=1;max_pack+=1;}
        else if (this.src_img == "images/obstacle/jellyfish.png") { this.id = "jellyfish"; jellyfish+=1;max_jellyfish+=1;}
    }
    load(){
        var obst = this.img;
        // The source and the onload function for the obstacle image
        obst.onload = function() { 
          ctx.drawImage(obst,0,0,this.img_w,this.img_h,0,0, this.w,this.h); 
        }; 
        obst.src = this.src_img;
    }
    draw(ctx){
        ctx.setTransform(1,0,0,1,0,0)

        if (this.x > width) {
          this.x = 0;
        } else if (this.x < 0) {
          this.x = width;
        }
        if (this.y > height) {
          this.y = height;
        } else if (this.y < 0) {
          this.y = 0;
        } 

        // Drawing the obstacles 
        ctx.save();
        ctx.translate(this.x, this.y)
        ctx.drawImage(this.img,0,0,this.img_w,this.img_h,0, 0,this.w,this.h);
        ctx.restore();

    }
    remove(i){
        // This function removes element i from the obstacles array
        // console.log(remove_obstacles.length);
        var o = obstacles[i];
        if (o.id == "bag" || o.id == "pack") {game.lives--;}
        else if (o.id == "jellyfish") {game.points += 5; jellyfish--;} 
        obstacles.splice(i,1);
    }
}