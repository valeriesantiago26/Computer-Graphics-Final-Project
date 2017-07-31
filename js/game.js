class Game {
	constructor(){
		this.heart = new Image();
		this.gameover_image = new Image();
		this.ctr = 0;
		this.lives = 1000000000000000;
		this.points = 0;
		this.gameover = false;
		this.currentState = 0;
		// States: 1 - start play
		//         2 - game
		//         3 - game over

	}
	load(){
        //// The source and the onload function for the hearts image
		var img = this.heart;
        img.onload = function(){
            ctx.drawImage(img, 0,0, 568, 506, 0,0, 25,25);
        };
        img.src = 'images/heart.png';
        // console.log(this.heart)

        //// The source and the onload function for the game over image
        var gm = this.gameover_image;
        gm.onload = function() { 
            ctx.drawImage(gm,0,0,375,360,width/2,height/2, 200,200);  
        }; 
        gm.src = 'images/game-over.png';

        this.currentState = 1;
        this.update();

	}
	update(){
        if (this.currentState == 1) {this.play();}
    	else if (this.currentState == 3) {this.end();} 

    	if (this.lives = 0) {this.gameover = true;}
    	if (this.gameover) {this.end();}
	}
	play(){
		ctx.font="20px Verdana";
		ctx.fillStyle = "red";
        ctx.fillText("Press Space to Play",250,height/2);

	}
	end(){
		// If game over then reload game
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		location.reload();
		// ctx.drawImage(background,0,0,800,600,0,0, width,height);
		// ctx.drawImage(game.gameover_image,0,0,375,360,250,200, 200, 200);
		// ctx.font="20px Verdana";
		// ctx.fillStyle = "red";
  //       ctx.fillText("Play Again",250,350);
        // this.currentState = 0;

	}
}