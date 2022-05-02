CreazaInamici = function(ix,iy){

    this.x=ix;
    this.y=iy;
      this.bob=game.add.sprite(this.x,this.y,'inamic');
      
      game.physics.enable(this.bob);
    this.bob.body.gravity.y = 360;
   this.bob.anchor.x=0.5;
   this.bob.anchor.x=0.5;

   
  

    this.lovestePlatforma=function(){

   this.z= game.physics.arcade.collide(this.bob, platforme);
  this.v= game.physics.arcade.collide(this.bob, norLung);
   
    }

    this.patrula= function() {
   
        
	if (this.bob.x === this.x)
	{
		
        
        game.add.tween(this.bob).to( { x: '-100' }, 2000, Phaser.Easing.Linear.None, true);
        this.bob.scale.setTo(0.6,0.6);
	}
	else if (this.bob.x === this.x-100)
	{
        game.add.tween(this.bob).to( { x: '+100' }, 2000, Phaser.Easing.Linear.None, true);
        this.bob.scale.setTo(-0.6,0.6);
        }
        

};

  
           
     
      };
