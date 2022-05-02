demo.gameOver=function(){};

demo.gameOver.prototype={

    preload:function(){
    
     var pre= new Preload();
     game.load.spritesheet('back','img/BACKGlue.png',2104,581);
    },
    
    create:function(){
        

        var imgFundal=game.add.sprite(0,0,'over');

       control=game.add.button(960,900,'back',start,this,1,0,2);
        control.anchor.x=0.5;
        control.anchor.y=0.5;
        control.scale.setTo(0.25,0.25);

        var keyR = game.input.keyboard.addKey(Phaser.Keyboard.R);
        keyR.onDown.add(restart, this);

        fullScreen();

        database=firebase.database();

        var data={
            name:"URZ",
            score:scor
       
         }
     
         var ref= database.ref('scores');
     
         ref.push(data);


      
      ref= database.ref('scores');
    ref.on('value',gotData,errData);
    },
    
    update:function(){
        
    
    }};

    function restart(){
        game.state.start('level1');
    }
    
    
    function gotData(data){
           //console.log(data.val());
           var scores= data.val();
           var keys=Object.keys(scores);
           //console.log(keys);
           for(var i=0;i<keys.length;i++){
               var k =keys[i];
               var name=scores[k].name;
               var score=scores[k].score;
               console.log(name,score);
          
           }
    }

    function errData(err){
        console.log('Error!')
        console.log(err);
        
    }