var norLung,vietile2,lovPlayer,obiect,obinamic4;

demo.level2=function(){};

demo.level2.prototype={

    preload:function(){
    
     var pre= new Preload();
    
    },
    
    create:function(){
        game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        var imgFundal=game.add.sprite(0,0,'fundal2');

////////////////////////inamici ///
obinamic4=new CreazaInamici(500,800);
obinamic5=new CreazaInamici(2800,800);

        //////////////NOR///////////////
        norLung=game.add.sprite(0, 900, 'nor2');
             game.physics.enable(norLung);
             norLung.body.immovable=true;
            
        
             //player///////////////////////////////////
             if(contor==0){
                player=game.add.sprite(32, centerY-100, 'player');
                }else{
                    player=game.add.sprite(32, centerY-100, 'player2');
                }  
            game.physics.enable(player);
            
            player.body.gravity.y = 460;
            player.body.collideWorldBounds = true;
            player.animations.add('walk', [0,1,2,3,4, 5, 6, 7,8], 30, true);
            player.anchor.x=0.5;
            player.anchor.y=0.5;     

            ////cutie/////////////////////////////////////

    obiect=new Obiecte();
    obiect.Cutie(1000, 825);
    obiect.Cutie(1075, 754);
    obiect.Cutie(1150, 825);
    obiect.Cutie(2500, 825);
    obiect.Cutie(2575, 754);
    obiect.CutieFantoma(2650,679);
    obiect.CutieFantoma(2725,679);
    obiect.CutieFantoma(2800,679);
    obiect.Cutie(2875,754);
    obiect.Cutie(2950,825);
  




            
  ///////////////BANI//////////////////////////////
  bani=game.add.group();
  bani.enableBody=true;
  var bitcoin=bani.create(500,800,'ban');
      bitcoin=bani.create(600,800,'ban');
      bitcoin=bani.create(700,800,'ban');
      bitcoin=bani.create(800,800,'ban');
      bitcoin=bani.create(1005,750,'ban');
      bitcoin=bani.create(1005,550,'ban');
      bitcoin=bani.create(1080,680,'ban');
      bitcoin=bani.create(1155,750,'ban');
      bitcoin=bani.create(2000,800,'ban');
      bitcoin=bani.create(2100,800,'ban');
      bitcoin=bani.create(2200,800,'ban');
      bitcoin=bani.create(2300,800,'ban');
      bitcoin=bani.create(2400,800,'ban');

      bitcoin=bani.create(2650,479,'ban');
      bitcoin=bani.create(2725,479,'ban');
      bitcoin=bani.create(2800,479,'ban');
     
     
    
 

      ////vietile

    vietile=new Viata();
    vietile.startViata();
    vietile.lives.fixedToCamera=true


         ////////////////CAMERA//////////////////////
    game.world.setBounds(0,0,3840,1080);
    game.camera.follow(player);


        fullScreen();

       ////////////key////////////////
      cursors = game.input.keyboard.createCursorKeys();
      spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


        ////////////Scor/////
    scorImg=game.add.sprite(8,8,'scor');
    scorImg.fixedToCamera=true;
    scoreText = game.add.text(112, 8, ''+scor, { fontSize: '72px', fill: '#e2ca8d' });
    scoreText.fixedToCamera=true;

    

   //////////////Text level 2////////////////////
   text=game.add.text(1000,300,"Level 2",{ fontSize: '102px', fill: '#25CCF7' ,align:"center" });
    text.anchor.setTo(0.5,0.5);
    text.setShadow(10,10,'rgba(0,0,0,0.5)',0);
       


    },
    
    update:function(){
        
        game.physics.arcade.overlap(player,bani,colecteaza,null,this);
        lovestePlatforma = game.physics.arcade.collide(player, norLung);
       
        game.physics.arcade.collide(obiect.cutii, norLung);
    
         lovPlayer=game.physics.arcade.collide(obiect.cutii, player);
       
        Walk();
        saritura();

        
   obinamic4.lovestePlatforma();
   obinamic4.patrula();
   obinamic5.lovestePlatforma();
   obinamic5.patrula();
        
        game.physics.arcade.overlap(player, obinamic4.bob, pierdeVieti, null, this);
        game.physics.arcade.overlap(player, obinamic5.bob, pierdeVieti, null, this);
      


        if(player.x>200){
            text.destroy();
        }
    
    }};

    function hitEnemy(){
        console.log("loviiit");
    }
    