Viata= function(){
    this.livesCounter = 3;
    this.lives = null;

    this.startViata=function(){

        this.lives = game.add.group();
         this.x = 120; // use your values
         this.y = 110;
        
        for (this.i = 0; this.i < 3;this.i++) {
          this.yourSprite = this.lives.create(this.x,this.y,'inima');
           this.x-=55;
          //this.yourSprite.anchor.setTo(0.5, 0.5);
        }

    }

   



}