Obiecte= function(){

    this.cutii=game.add.group();
    this.cutii.enableBody=true;
    this.cutii2=game.add.group();
    

    this.Cutie=function(cx,cy){
        this.cx=cx;
        this.cy=cy;
        this.cutia=this.cutii.create(this.cx, this.cy, 'cutie');
        this.cutia.body.immovable=true;
        

    } 
    this.CutieFantoma=function(cx,cy){
        this.cx=cx;
        this.cy=cy;
        
        this.cutia=this.cutii2.create(this.cx, this.cy, 'cutie');
      
        

    } 


}