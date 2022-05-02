var demo={};
var player,cursors,platforme,spaceKey,lovestePlatforma,bani,scorImg,scoreText,scor=0,inamici,InamicLovestePlatforma,inamic;
var centerY=1080/2;
var inamicX=600,inamicY=centerY,obinamic,vietile,text,ssari, coin,music, impact;
var database;
demo.level1=function(){};
demo.level1.prototype={

preload:function(){

 var pre= new Preload();


},

create:function(){

     game.physics.startSystem(Phaser.Physics.ARCADE);
     spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      music=game.add.audio('music');
      music.play('',0.1,true);
      music.volume=0.1;
      music.loop=true;

    //aranjare in pagina 
    game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
    var imgFundal=game.add.sprite(0,0,'fundal2');
    
    ////////////Scor/////
    scorImg=game.add.sprite(8,8,'scor');
    scorImg.fixedToCamera=true;
    scoreText = game.add.text(112, 8, ''+scor, { fontSize: '72px', fill: '#e2ca8d' });
    scoreText.fixedToCamera=true;
   

                   
    
    //player///////////////////////////////////
    if(contor==0){
    player=game.add.sprite(32, centerY-100, 'player');
    }else{
        player=game.add.sprite(32, centerY-100, 'player2');
    }  

     game.physics.enable(player);
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;
    player.animations.add('walk', [0,1,2,3,4, 5, 6, 7,8], 30, true);
    player.anchor.x=0.5;
    player.anchor.y=0.5;
    ssari=game.add.audio('jump');
    impact=game.add.audio('impact');
    
     
    ///////////////INAMIC/////////////////
     //inamic= game.add.sprite(600,centerY+100,'inamic');
      obinamic=  new CreazaInamici(600,540);
      obinamic2=  new CreazaInamici(1400,540);
      obinamic3=  new CreazaInamici(2200,540);
        
    ////vietile

    vietile=new Viata();
    vietile.startViata();
    vietile.lives.fixedToCamera=true;


    ///NOR/////////////////////////////
     platforme=game.add.group();
     platforme.enableBody=true;
     var nor=platforme.create(8,centerY,'nor');
     nor.body.immovable=true;
         nor=platforme.create(408,centerY+130,'nor'); 
         nor.body.immovable=true;
         nor=platforme.create(808,centerY,'nor'); 
         nor.body.immovable=true;
         nor=platforme.create(1208,centerY+130,'nor'); 
         nor.body.immovable=true;
         nor=platforme.create(1608,centerY,'nor'); 
         nor.body.immovable=true;
         nor=platforme.create(2008,centerY+130,'nor'); 
         nor.body.immovable=true;
         nor=platforme.create(2408,centerY,'nor'); 
         nor.body.immovable=true;
         nor=platforme.create(2808,centerY+130,'nor'); 
         nor.body.immovable=true;
         nor=platforme.create(3208,centerY,'nor2'); 
         nor.body.immovable=true;
         



    ////////////////CAMERA//////////////////////
    game.world.setBounds(0,0,3840,1080);
    game.camera.follow(player);
   // game.camera.deadzone=new Phaser.Rectangle(600,0,700,1080);


  ///////////////BANI//////////////////////////////
  bani=game.add.group();
  bani.enableBody=true;
  var bitcoin=bani.create(200,centerY-100,'ban');
      //bitcoin=bani.create(600,centerY+30,'ban');
      bitcoin=bani.create(1000,centerY-100,'ban');
      bitcoin=bani.create(1400,centerY+30,'ban');
      bitcoin=bani.create(1800,centerY-100,'ban');
      bitcoin=bani.create(2200,centerY+30,'ban');
      bitcoin=bani.create(2600,centerY-100,'ban');
      bitcoin=bani.create(3000,centerY+30,'ban');
      bitcoin=bani.create(3400,centerY-100,'ban');
      coin=game.add.audio('coin');
      coin.volume=0.2;


    cursors = game.input.keyboard.createCursorKeys();
   fullScreen();

   //////////////Text level 1////////////////////
   text=game.add.text(1000,300,"Level 1",{ fontSize: '102px', fill: '#25CCF7' ,align:"center" });
    text.anchor.setTo(0.5,0.5);
    text.setShadow(10,10,'rgba(0,0,0,0.5)',0);
    
   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyBlN9O6iGNpC_NA4eH9lwIU4A7_5IE_66o",
    authDomain: "urz-project.firebaseapp.com",
    databaseURL: "https://urz-project.firebaseio.com",
    projectId: "urz-project",
    storageBucket: "urz-project.appspot.com",
    messagingSenderId: "288078823815"
  };
  firebase.initializeApp(config);

  console.log(firebase);
   
     
},

update:function(){
    
  //  Collide the player and the stars with the platforms
  lovestePlatforma = game.physics.arcade.collide(player, platforme);
  InamicLovestePlatforma = game.physics.arcade.collide(inamici, platforme);

   Walk();
    saritura();
   
   game.physics.arcade.overlap(player,bani,colecteaza,null,this);
   

   

   
   obinamic.lovestePlatforma();
   obinamic.patrula();
   obinamic2.lovestePlatforma();
   obinamic2.patrula();
   obinamic3.lovestePlatforma();
   obinamic3.patrula();
   // pierdeVieti();
   game.physics.arcade.overlap(player, obinamic.bob, pierdeVieti, null, this);
   game.physics.arcade.overlap(player, obinamic2.bob, pierdeVieti, null, this);
   game.physics.arcade.overlap(player, obinamic3.bob, pierdeVieti, null, this);


  
    if(player.x>3700){
      
        game.state.start('level2');
    
      }
 if(player.x>60){
     text.destroy();
 }

 if(player.y>900){
      
    playerDies();

  }
 

}};




function colecteaza(player,bitcoin){
    bitcoin.kill();
     coin.play();
     
    scor+=1;
    scoreText.text=scor;
}

function Walk(){
    player.body.velocity.x = 0;
    

    if (cursors.left.isDown)
    {
        //  margi stanga
        player.body.velocity.x = -250;

        player.animations.play('walk');
        
        player.scale.setTo(-1,1);
    }
    else if (cursors.right.isDown)
    {
        // margi dreapta
        player.body.velocity.x = 250;

        player.animations.play('walk');
        
        player.scale.setTo(1,1);
    }
    else{
        player.animations.stop('walk');
        player.frame=0;
    }




}

function saritura(){
   
    //  jucatorul poate sari doar daca atinge norul
    if (spaceKey.isDown && player.body.touching.down && (lovestePlatforma||lovPlayer))
    {
        player.body.velocity.y = -350;
        ssari.play();
        ssari.volume=0.2;
       
        
    }
    if(!lovestePlatforma && !lovPlayer){
        player.animations.stop('walk');
        player.frame=5;
    }



}

function fullScreen(){
      //FullScreen
      game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
      key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
      key1.onDown.add(gofull, this);
}

function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}




function pierdeVieti(){
        console.log('hit');
        player.reset(60,440);
         impact.play();
        var live;
       live = vietile.lives.getFirstAlive();
   
       if (live) {
           live.kill();
       }
       vietile.livesCounter--;
   
       if (vietile.livesCounter == 0) {
           player.kill();
         playerDies(); 
       }
   
     }
   
    
    



function playerDies(){

    
game.state.start('gameOver');
music.pause();

}
