var game = new Phaser.Game(1920,1080,Phaser.CANVAS);

game.state.add('level1',demo.level1);
game.state.add('level2',demo.level2);
game.state.add('gameOver',demo.gameOver);
game.state.add('start',demo.start);
game.state.add('controlss',demo.controls);



game.state.start('start');