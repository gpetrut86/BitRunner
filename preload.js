Preload=function(){
        //viata
    game.load.image('inima','img/inima.png');
       //imagine de fundal
       game.load.image('fundal','img/fundal.png');
       game.load.image('fundal2','img/fundalLevel2.png');
       //player
       game.load.spritesheet('player', 'img/playerSheet.png', 94, 122);
       game.load.spritesheet('player2', 'img/RED4.png', 94, 122);
       //nor
       game.load.image('nor','img/nor.png');
       game.load.image('nor2','img/norLung.png');
       //bani
       game.load.image('ban','img/bitcoin.png');
       //scor
       game.load.image('scor','img/scor.png');
       //inamic
       game.load.image('inamic','img/inamic.png');
       // Game Over
       game.load.image('over','img/gameOver1.png');
       // Start
       game.load.image('start','img/START.png');
        // controls
        game.load.image('controls','img/controale.png');
        // cutie
        game.load.image('cutie','img/cutie.png');
        /// audio       
         game.load.audio('jump',['sound/jump.mp3','sound/jump.ogg']);
         game.load.audio('coin','sound/coin.wav');
         game.load.audio('music','sound/music.mp3');
         game.load.audio('impact','sound/impact.wav');
    
    
}