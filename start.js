demo.start=function(){};
var buton,control,contor=0;
demo.start.prototype={


    preload:function(){
    
     var pre= new Preload();
     game.load.spritesheet('buton','img/StartGlue.png',2104,581);
     game.load.spritesheet('control','img/controlGlue.png',2104,581);
     game.load.spritesheet('playerCH','img/playerCH.png',2104,581);
    
    },
    
    create:function(){
        game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
       
        var imgFundal=game.add.sprite(0,0,'start');
         ////////////////PLAY//////////////////////////
         buton=game.add.button(1400,300,'buton',restart,this,1,0,2);
         buton.anchor.x=0.5;
         buton.anchor.y=0.5;
         buton.scale.setTo(0.25,0.25);
         ////////////////CONTROLS//////////////////////////
        control=game.add.button(1400,500,'control',controale,this,1,0,2);
        control.anchor.x=0.5;
        control.anchor.y=0.5;
        control.scale.setTo(0.25,0.25);
         ////////////////Player//////////////////////////
         control=game.add.button(1400,800,'playerCH',schimbaContor,this,1,0,2);
         control.anchor.x=0.5;
         control.anchor.y=0.5;
         control.scale.setTo(0.25,0.25);

        
        

        fullScreen();

       var keyK = game.input.keyboard.addKey(Phaser.Keyboard.K);
      keyK.onDown.add(restart, this);
       
    },
    
    update:function(){

        if(contor==0){
            player=game.add.sprite(1350,600, 'player');
            }else{
                player=game.add.sprite(1350,600, 'player2');
            }  
            player.frame=0;
    
    }};

    function restart(){
        game.state.start('level1');
        scor=0;
    }
    function controale(){
        game.state.start('controlss');

    }

   function schimbaContor(){
      if(contor==0){
          contor=1;
      } else{
          contor=0;
      }    
 
    }
    
    
    