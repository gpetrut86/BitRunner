demo.controls=function(){};

demo.controls.prototype={


    preload:function(){
    
     var pre= new Preload();
     game.load.spritesheet('back','img/BACKGlue.png',2104,581);
   
    
    },
    
    create:function(){
        game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
       
        var imgFundal=game.add.sprite(0,0,'controls');
    
       control=game.add.button(1400,900,'back',start,this,1,0,2);
        control.anchor.x=0.5;
        control.anchor.y=0.5;
        control.scale.setTo(0.25,0.25);
        

        fullScreen();

       
       
    },
    
    update:function(){
        
    
    }};
    function start(){
        game.state.start('start');
    }
  
    
    
    