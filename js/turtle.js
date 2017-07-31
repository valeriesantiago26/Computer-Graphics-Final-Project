class Turtle {
	constructor(){
	    this.x = 50;
	    this.y = 200;
	    this.angle = 0;
	    this.velocity = 0;
	    this.gravity = 0.25; 
	    this.turtle_image = new Image();
	    this.w = 100;
	    this.h = 45;
	}
	load(){
	    var image = this.turtle_image;
	    // The source and the onload function for the turtle image
	    image.onload = function() { 
	      ctx.drawImage(image,0,0,512,512,10,250, 100,100);
	      this.radius = 100 * Math.sqrt(2)/2;  
	    }; 
	    image.src = 'images/turtle-sprite.png';
	}
	draw(ctx){
	    ctx.setTransform(1,0,0,1,0,0)

	    // edges of the canvas
	    // This is for when the turtle goes beyond the border of the canvas.
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

	    ctx.save();
	    ctx.translate(this.x, this.y)
	    ctx.rotate(this.angle/180*Math.PI)

	    // Drawing the turtle image
	    ctx.drawImage(this.turtle_image,0,0,512,512,0, 0,100,100);
	    ctx.restore(); 
	}
	collision(obstacle){
	    // coordinates for turtle
	    var left = this.x, 
	    right = this.x + (this.w),
	    top = this.y,
	    bottom = this.y + (this.h);
	    // coordinates for obstacle
	    var o_left = obstacle.x,
	    o_right = obstacle.x + (obstacle.w),
	    o_top = obstacle.y,
	    o_bottom = obstacle.y + (obstacle.h);
	    // if does not collide with obstacles return false
	    if ((bottom < o_top) || (top > o_bottom) ||
	       (right < o_left) || (left > o_right)) {
	       return false;
	    }
	    return true;
	}
	}