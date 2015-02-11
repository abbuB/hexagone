/*
    ============================================================================
        double_slit.js
    ===========================================================================
*/
/* @pjs globalKeyEvents="true"; */
var diagrams = function(processingInstance){
  with (processingInstance){

  // size(window.innerWidth-10, window.innerHeight-10); // set size of canvas

  // √ ∛ ∜ ∝ ∞ ∟
  
  //  textFont(createFont("san-serif", 20), 32);
  //  textFont(createFont("serif", 20), 32);
  //  textFont(createFont("fantasy", 20), 32);
  //  textFont(createFont("monospace", 20), 32);
  //  textFont(createFont("cursive", 20), 32);

// *
// +stackoverflow.com
// +www.khanacademy.org
// +whatbadgenext.appspot.com/
// +www.codecogs.com/latex/eqneditor.php
// +www.youtube.com
// +mail.google.com
// +tube.geogebra.org/student/m762
// +bradsiemens.com
// +processingjs.org/reference
// +wikipedia.org
// +google.com
// +brm.io/matter-js-demo
// +www.w3schools.com
// +www.touchmathematics.org
// +www.desmos.com
// +github.com

  angleMode="radians";

  // Constants =======================================================
  var CONSTANTS={

    DEGREES:  "°",
    PI:       "π",
    UP_ARROW: "▲",
    INFINITY: "∞",
    THETA:    "θ"

  };

  var QUADRANTS={

    ZERO:   0,
    ONE:    1,
    TWO:    2,
    THREE:  3,
    FOUR:   4,
    FIVE:   6
  };

  var CLRS={

    TRANSPARENT:  color(-1,-1,-1),

    RED:          color(170,29,29),       GREEN:        color(158,182,58),
    BLUE:         color(29,86,170),       YELLOW:       color(238,214,15),
    ORANGE:       color(238,136,15),      GRAY:         color(128,128,128),

    BROWN:        color(155,145,135),

    control:      color(128,128,128),     controlF:     color(242,242,242),

    TEXT:         color(255,255,255),

    Red:          color(255,0,0),         RedOrange:    color(255,81,0),
    Orange:       color(255,127,0),       YellowOrange: color(255,190,0),
    Yellow:       color(255,255,0),

    YellowGreen:  color(192,255,0),
    Green:        color(0,255,0),         BlueGreen:    color(0,127,127),
    Blue:         color(0,0,255),         BlueViolet:   color(92,0,255),

    Violet:       color(127,0,255),       RedViolet:    color(191,0,127),

    GRAY1:        color(255*10/11),       GRAY2:        color(255*9/11),
    GRAY3:        color(255*8/11),        GRAY4:        color(255*7/11),
    GRAY5:        color(255*6/11),        GRAY6:        color(255*5/11),
    GRAY7:        color(255*4/11),        GRAY8:        color(255*3/11),
    GRAY9:        color(255*2/11),        GRAY10:       color(255*1/11),
    WHITE:        color(255,255,255),     BLACK:        color(0,0,0),

    BUTTONH:      color(16,16,16),        BUTTON:       color(24,24,24),

    GRID:         color(33,40,48),

    VERTEX:       color(255,255,0),
    VERTEXA:      color(255*6/11),
    LINE:         color(255*6/11),
    LINEA:        color(170,29,29),
    FILL:         color(255*7/11),
    FILLA:        color(255*7/11),

    RULER:        color(231,189,33),

    SELECTED:     color(0,0,255),
    HIT:          color(255,0,0),

    SIN:          color(170,29,29,255),   SIN_LT:       color(170,29,29,128),
    COS:          color(29,86,170,255),   COS_LT:       color(29,86,170,128),
    TAN:          color(238,214,15,255),  TAN_LT:       color(238,214,15,128),

    CSC:          color(238,136,15,255),  CSC_LT:       color(238,136,15,128),
    SEC:          color(158,182,58,255),  SEC_LT:       color(158,182,58,128),
    COT:          color(128,128,128,255), COT_LT:       color(128,128,128,128)

  };
  var COMMANDS={

    SHIFT:     16,
    CONTROL:   17,
    ALT:       18,
    CAPSLK:    20,
    PGUP:      33,
    PGDN:      34,
    END:       35,
    HOME:      36,
    
    LEFT:       37,
    UP:         38,
    RIGHT:      39,
    DOWN:       40,

    UPLEFT:     3837,
    UPRIGHT:    3839,
    DOWNLEFT:   4037,
    DOWNRIGHT:  4039,

    F1:        112,
    F2:        113,
    F3:        114,
    F4:        115,
    F5:        116,
    F6:        117,
    F7:        118,
    F8:        119,
    F9:        120,
    F10:       121,
    F11:       122,
    F12:       123,
    NUMLK:     144,
    META:      157,
    INSERT:    155,
    
    PLAY:       4,
    INCREMENT:  5,
    DECREMENT:  6,
    RESET:      7,
    MENU:       8,

    CTRL:       17

  };
  
  // Utility =======================================================
  var getGUID=function(){

    // return year()   + ''  +
           // month()  + ''  +
           // day()    + ''  +
           // hour()   + ''  +
           // minute() + ''  +
           // second() + ''  +
           // millis() + ''  +
           // round(random(10e15));

    return random(10e15);

  };

  var getColor=function(clr, alpha){

    return color(red(clr), green(clr), blue(clr), alpha/100*255);

  };
  var hexToRGB=function(hexStr){
    
    // note: hexStr should be #rrggbb
    var hex = parseInt(hexStr.substring(1), 16);
    var r = (hex & 0xff0000) >> 16;
    var g = (hex & 0x00ff00) >> 8;
    var b =  hex & 0x0000ff;
    
    return color(r,g,b);

  };
  var hexToRGBA=function(hexStr,a){

    // note: hexStr should be #rrggbb
    var hex = parseInt(hexStr.substring(1), 16);
    var r = (hex & 0xff0000) >> 16;
    var g = (hex & 0x00ff00) >> 8;
    var b =  hex & 0x0000ff;
    
    return color(r,g,b,a);

  };

  var app={
    
    debug:        true,

    background:   0,

    height:       window.innerHeight-10,
    width:        window.innerWidth-10,

    // height:       height,
    // width:        width,
    
    mouseX:       0,
    mouseY:       0,

    originX:      0,
    originY:      0,
    
    ctrl:         false,
    alt:          false,
    shift:        false,
    
    x:            200,
    y:            200,

    left:         false,
    right:        false,
    center:       false,

    border:       0,

    running:      true,

    // pressed:      false,

    speed:        5,
    accel:        1,

    scaleX:       90,       scaleY:   2,
    
    size:         40,
    offset:        0,

    ctrls:        [],
    keys:         [],

    data:         [],
    
    grid:         []

  };

  var grid=[[0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,1,0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0,1,0]];
  // Properties =======================================================
  var propC=function(i,p,x,y,w,h,r,k,v,c,g){

    this.i=i;     // guid
    this.p=p;     // parent

    this.x=x;     // left
    this.y=y;     // top
    this.w=w;     // width
    this.h=h;     // height
    this.r=r;     // radius

    this.k=k;     // hit cursor
    this.v=v;     // value
    this.c=c;     // command
    this.g=g;     // tag

  };
  var propL=function(fill, fillH, stroke, strokeH, weight, weightH){

    this.fill=fill;         // fill color
    this.fillH=fillH;       // fill color highlight

    this.stroke=stroke;     // stroke color
    this.strokeH=strokeH;   // stroke color highlight

    this.weight=weight;     // strokeWeight
    this.weightH=weightH;   // strokeWeight highlight

  };
  var propA=function(fill, fillH, alignX, alignY,  size,   sizeH){

    this.fill=    fill;     // text color
    this.fillH=   fillH;    // text color highlight
    this.alignX=  alignX;   // horizontal alignment
    this.alignY=  alignY;   // vertical alignment
    this.size=    size;     // text size
    this.sizeH=   sizeH;    // text size highlight

  };

  // Control ===========================================================
  // Controls =========================================================
  var control=function(c,l,a,ctrls){

    // controls properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.i=c.i;                 // guid
    this.parent=c.p;            // parent

    this.x=c.x;                 // left
    this.y=c.y;                 // top
    this.w=c.w;                 // width
    this.h=c.h;                 // height

    this.k=c.k;                 // hit cursor

    this.v=c.v;                 // value
    this.c=c.c;                 // command
    this.g=c.g;                 // tag


    // appearance properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.fill=l.fill;           // fill color
    this.fillH=l.fillH;         // fill color highlight
    this.stroke=l.stroke;       // stroke color
    this.strokeH=l.strokeH;     // stroke color highlight

    this.weight=l.weight;       // strokeWeight
    this.weightH=l.weightH;     // strokeWeight highlight


    // text properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.text=a.text;           // text caption

    this.tfill=a.fill;          // text color
    this.tfillH=a.fillH;        // text color highlight
    this.alignX=a.alignX;       // horizontal alignment
    this.alignY=a.alignY;       // vertical alignment
    this.size=a.size;           // text size
    this.sizeH=a.sizeH;         // text size highlight

    // misc properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.hit=false;             // mouse is over the control

    this.visible=true;          // is the control currently being displayed
    this.ctrls=ctrls;           // array of child controls

  };
  control.prototype.draw=function(){

    for(var c in this.ctrls){ this.ctrls[c].draw(); }

  };
  control.prototype.clicked=function(){

    if(this.hit && app.left){
    //   commands(this.c, this.g);
      for(var c in this.ctrls){ this.ctrls[c].clicked(); }
    }

  };
  control.prototype.clickedR=function(){
    if(this.hit){
      for(var c in this.ctrls){ this.ctrls[c].clickedR(); }
    }
  };
  control.prototype.moved=function(x,y){

    // if(this.alignX===LEFT){

    //   if(app.mouseX>x+this.x && app.mouseX<x+this.x+this.w &&
    //     app.mouseY>y+this.y && app.mouseY<y+this.y+this.h){

    //     this.hit=true;
    //     app.focus=this.i;

    //   }
    //   else{
    //     this.hit=false;
    //   }

    // }
    // else if(this.alignX===CENTER){

    //   if(app.mouseX>=x+this.x-this.w/2 && app.mouseX<=x+this.x+this.w/2 &&
    //     app.mouseY>=y+this.y-this.h/2 && app.mouseY<=y+this.y+this.h/2){

    //     this.hit=true;
    //     app.focus=this.i;

    //   }
    //   else{
    //     this.hit=false;
    //   }

    // }
    // else if(this.alignX===RIGHT){

    //   if(app.mouseX>x+this.x && app.mouseX<x+this.x+this.w &&
    //     app.mouseY>y+this.y && app.mouseY<y+this.y+this.h){

    //     this.hit=true;
    //     app.focus=this.i;

    //   }
    //   else{
    //     this.hit=false;
    //   }

    // }
    // else{}

    for(var c in this.ctrls){ this.ctrls[c].moved(x+this.x, y+this.y); }

  };
  control.prototype.dragged=function(){

    for(var c in this.ctrls){ this.ctrls[c].dragged(); }

  };
  control.prototype.pressed=function(){

    for(var c in this.ctrls){ this.ctrls[c].pressed(); }

  };
  control.prototype.released=function(){
    // this.hit=false;

    for(var c in this.ctrls){ this.ctrls[c].released(); }

  };
  control.prototype.typed=function(){

    for(var c in this.ctrls){ this.ctrls[c].typed(); }

  };
  control.prototype.over=function(){

    for(var c in this.ctrls){ this.ctrls[c].over(); }

  };
  control.prototype.out=function(){

    this.hit=false;
    for(var c in this.ctrls){ this.ctrls[c].out(); }

  };

  var button=function(c,l,a,ctrls){
    control.call(this,c,l,a,ctrls);
  };
  button.prototype=Object.create(control.prototype);
  button.prototype.draw=function(){

    noFill();
    strokeWeight(0.75);

    var w=this.w;
    var h=this.h;

    var incr=18;

    var min=0;
    var max=360;

    fill(this.fill);
    stroke(this.stroke);
    
    if(this.hit){
      fill(this.fillH);
      stroke(this.strokeH);
    }

    rect(this.x, this.y, this.w, this.h);

  };

  button.prototype.clicked=function(){
    for(var c in this.ctrls){ this.ctrls[c].clicked(0,0); }
  };
  button.prototype.moved=function(x,y){

    if(mouseX>x+this.x &&
       mouseX<x+this.x+this.w &&
       mouseY>y+this.y &&
       mouseY<y+this.y+this.h){

      this.hit=true;

// println("hit");

      // for(var c in this.ctrls){ this.ctrls[c].moved(x,y); }

    }
    else{
      this.hit=false;
// println("miss");
    }

    // for(var c in this.ctrls){ this.ctrls[c].moved(x,y); }

  };
  button.prototype.dragged=function(x,y){

    if(this.hit){
      for(var c in this.ctrls){ this.ctrls[c].dragged(); }
    }

  };
  button.prototype.pressed=function(){

    if(this.hit){
      for(var c in this.ctrls){ this.ctrls[c].pressed(); }
    }

  };
  button.prototype.released=function(){

    if(this.hit){
      for(var c in this.ctrls){ this.ctrls[c].released(); }
    }

  };
  button.prototype.typed=function(){

    // if(app.keys[KEYCODES.SPACE]){
    //   this.vertices=[];
    //   this.temp=0;
    // }

    // if(app.keys[KEYCODES.CONTROL] &&
    //   app.keys[KEYCODES.Z]){
    //   this.shapes.splice(this.shapes.length-1,1);
    //   process();
    // }

  };

var MAX=50;

// var skungus = { x:      MAX/2-imgSkungus.width/2,
//                 y:      MAX/2-imgSkungus.height/2,
//                 width:  imgSkungus.width,
//                 height: imgSkungus.height};

var skungus = { x:      MAX/2-25,
                y:      MAX/2-25,
                width:  50,
                height: 50};
                
//  Nicknames for space constraints
var sk=skungus;
    // g=goals,
    // l=leaves,
    // e=enemies,
    // o=obstacles,
    // v=levels;

var DIRECTION={
  UP:     87,
  DOWN:   83,
  LEFT:   65,
  RIGHT:  68
};

var xv = 0;
var yv = 0;
var speed=1.5;
var border=10;

var moveSkungus=function(){

    var minX=10+border;
    var maxX=MAX-sk.width-10;
    var minY=100;
    var maxY=MAX-sk.height-30;

    if (app.keys[32]) { speed=2.5;  }
    else              { speed=1.25; }

    //for(var n=0; n<obstacles.length; n++){
        
        //  Contact with borders
        if(sk.x>maxX){ speed=0; sk.x-=1;   }
        if(sk.x<minX){ speed=0; sk.x+=1; }
        if(sk.y<minY){ speed=0; sk.y+=1; }
        if(sk.y>maxY){ speed=0; sk.y-=1; }
    
        //  Move Buttons
        if (app.keys[DIRECTION.UP])    { yv-=speed; }   //  w
        if (app.keys[DIRECTION.DOWN])  { yv+=speed; }   //  s
        if (app.keys[DIRECTION.LEFT])  { xv-=speed; }   //  a
        if (app.keys[DIRECTION.RIGHT]) { xv+=speed; }   //  d
    
        sk.x+=round((xv*=0.9));
        sk.y+=round(yv*=0.9);
        
        sk.centerX = sk.x + sk.width/2;
        sk.centerY = sk.y + sk.height/2;
        
        //  Fire Buttons
        //if (keys[UP])   { fire(DIRECTION.UP); }
        //if (keys[DOWN]) { fire(DIRECTION.DOWN); }
        //if (keys[LEFT]) { fire(DIRECTION.LEFT); }
        //if (keys[RIGHT]){ fire(DIRECTION.RIGHT); }
    //}

};

var drawSkungus=function(){

    //image(imgSkungus, constrain(sk.x,   0, MAX),
    //                  constrain(sk.y, 100, MAX));

    // image(imgSkungus, sk.x, sk.y);
                      
    var w=sk.width, h=sk.height;

    if(app.debug){
        ellipse(sk.x,     sk.y,     10, 10);
        ellipse(sk.x + w, sk.y,     10, 10);
        ellipse(sk.x + w, sk.y + h, 10, 10);
        ellipse(sk.x,     sk.y + h, 10, 10);
    }

};

  var command=function(c){

    if(app.ctrl){ app.accel=10;  }
    else        { app.accel=1;  }

    switch(c){

      // case COMMANDS.RIGHT:      app.x+=app.speed*app.accel;   app.originX-=app.speed*app.accel;   break;
      // case COMMANDS.LEFT:       app.x-=app.speed*app.accel;   app.originX+=app.speed*app.accel;   break;
      
      // case COMMANDS.UP:         app.y-=app.speed*app.accel;   app.originY+=app.speed*app.accel;   break;
      // case COMMANDS.DOWN:       app.y+=app.speed*app.accel;   app.originY-=app.speed*app.accel;   break;
      
      // case COMMANDS.RIGHT:      app.x+=app.speed*app.accel;   app.originX-=app.speed*app.accel;   break;
      // case COMMANDS.LEFT:       app.x-=app.speed*app.accel;   app.originX+=app.speed*app.accel;   break;
      
      // case COMMANDS.UP:         app.y-=app.speed*app.accel;   app.originY+=app.speed*app.accel;   break;
      // case COMMANDS.DOWN:       app.y+=app.speed*app.accel;   app.originY-=app.speed*app.accel;   break;

      // case COMMANDS.UPLEFT:     app.x-=app.speed;
      //                           app.y-=app.speed;   break;
                                
      // case COMMANDS.UPRIGHT:    app.x+=app.speed;
      //                           app.y-=app.speed;   break;
                                
      // case COMMANDS.DOWNLEFT:   app.x-=app.speed;
      //                           app.y+=app.speed;   break;
                                
      // case COMMANDS.DOWNRIGHT:  app.x+=app.speed;
      //                           app.y+=app.speed;   break;

      default:                                      break;

    }
    
  };
  
  var telemetry=function(){
    
    app.ctrl  =app.keys[COMMANDS.CTRL];
    app.alt   =app.keys[COMMANDS.ALT];
    app.shift =app.keys[COMMANDS.SHIFT];

    if(app.telemetry){
    
      var offset=width-200;
    
      fill(0,0,0,255);
      stroke(128,0,0);
      
      rect(offset+40, 10, 150, 380, 10);
      
      fill(CLRS.YELLOW);
      textSize(12);
  
      textAlign(LEFT);
  
      text("mouseX:",    50+offset,   50);
      text("mouseY:",    50+offset,   75);

      text("Left:",      50+offset,  125);
      text("Right:",     50+offset,  150);
      text("Center:",    50+offset,  175);

      text("CTRL:",      50+offset,  225);
      text("ALT:",       50+offset,  250);
      text("SHIFT:",     50+offset,  275);

      text("Skungus",    50+offset,  325);
      text("x:",         50+offset,  350);
      text("y:",         50+offset,  375);

      text(mouseX,      150+offset,   50);
      text(mouseY,      150+offset,   75);
      
      text(app.left,    150+offset,  125);
      text(app.right,   150+offset,  150);
      text(app.center,  150+offset,  175);
      
      text(app.ctrl,    150+offset,  225);
      text(app.alt,     150+offset,  250);
      text(app.shift,   150+offset,  275);
      
      text(sk.x,        150+offset,  325);
      text(sk.y,        150+offset,  350);

    }

  };
  
  var pt=function(x,y){
    
    this.x=x;
    this.y=y;

  };

  var cell=function(x, y, radius, row, col, fill){

    this.x=x;                 //  left
    this.y=y;                 //  top

    this.r=radius;            //  distance from center to a vertex

    this.row=row;             //  vertical coordinate
    this.col=col;             //  horizontal coordinate
    
    this.fill=fill;
    
    this.quadrant=0;

    this.vertices=[];
    
    for(var theta=0; theta<360; theta+=60){
      
      this.vertices.push(new pt(x + (radius-10) * cos(radians(theta)),
                                y + (radius-10) * sin(radians(theta))));
      
    }

    for(var theta=0; theta<360; theta+=60){

      this.vertices.push(new pt(x + radius * cos(radians(theta)),
                                y + radius * sin(radians(theta))));

    }
    
  };
  cell.prototype=Object.create(control.prototype);

  cell.prototype.draw=function(){
    
    var t=this;
    
    var Quadrants=function(){
      
      stroke(32);
      
      line(t.vertices[0].x, t.vertices[0].y, t.vertices[3].x, t.vertices[3].y);
      line(t.vertices[1].x, t.vertices[1].y, t.vertices[4].x, t.vertices[4].y);
      line(t.vertices[2].x, t.vertices[2].y, t.vertices[5].x, t.vertices[5].y);
        
      if(t.hit){
        
        stroke(255);
        // arc(t.x, t.y, 2*app.size, 2*app.size, 0, PI/3);
        // line(t.vertices[0].x, t.vertices[0].y, t.vertices[3].x, t.vertices[3].y);
        // line(t.vertices[1].x, t.vertices[1].y, t.vertices[4].x, t.vertices[4].y);
        // line(t.vertices[2].x, t.vertices[2].y, t.vertices[5].x, t.vertices[5].y);
        var angle=degrees(atan2(mouseY-t.y, mouseX-t.x));

// println(angle);

        switch(true){

          case angle>=0 &&
               angle<60:    triangle(t.x,             t.y,
                                     t.vertices[0].x, t.vertices[0].y,
                                     t.vertices[1].x, t.vertices[1].y);     break;
          case angle>=60 &&
               angle<120:   triangle(t.x,             t.y,
                                     t.vertices[1].x, t.vertices[1].y,
                                     t.vertices[2].x, t.vertices[2].y);     break;
          case angle>=120 &&
               angle<=180:  triangle(t.x,             t.y,
                                     t.vertices[2].x, t.vertices[2].y,
                                     t.vertices[3].x, t.vertices[3].y);     break;
          case angle<=0 &&
               angle>-60:   triangle(t.x,             t.y,
                                     t.vertices[5].x, t.vertices[5].y,
                                     t.vertices[0].x, t.vertices[0].y);     break;
          case angle<=-60 &&
               angle>-120:  triangle(t.x,             t.y,
                                     t.vertices[4].x, t.vertices[4].y,
                                     t.vertices[5].x, t.vertices[5].y);     break;
          case angle<-120 &&
               angle>-180:  triangle(t.x,             t.y,
                                     t.vertices[3].x, t.vertices[3].y,
                                     t.vertices[4].x, t.vertices[4].y);     break;
          
          default:                                                          break;

        }

      }

    };
    
    var Outline=function(){

      fill(255,0,0,5);
      stroke(128,0,0);
      strokeWeight(0.5);
      
      var v=0;
      
      if(t.hit){
        fill(128,0,0,20);
        stroke(255,0,0);
        strokeWeight(1);
      }
      
      //  Border --------------------------------------------------
      fill(t.fill);
      noStroke();

      beginShape();
      
        for(var v=0; v<t.vertices.length/2; v++){
          
          
          vertex(t.vertices[v].x,
                 t.vertices[v].y);
  
        }
  
      endShape(CLOSE);

      beginShape();
      
        for(var v=t.vertices.length/2; v<t.vertices.length; v++){
          
          
          vertex(t.vertices[v].x,
                 t.vertices[v].y);
  
        }
  
      endShape(CLOSE);

    };
    
    var Vertices=function(){

      for(var v=0; v<t.vertices.length; v++){
  
        ellipse(t.vertices[v].x,
                t.vertices[v].y,
                3, 3);
  
        if(t.hit){
          line(t.x,             t.y,
               t.vertices[v].x, t.vertices[v].y);
        }
  
      }
      
    };
    
    var Origin=function(){
      
      fill(128);
      
      // Center --------------------------------------------------
      if(t.hit){
  
        ellipse(t.x, t.y, 3, 3);

      }

    };

    Outline();
    // Vertices();
    Quadrants();
    Origin();
    
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(app.size/4);
    text(this.row + ", " + this.col, this.x, this.y);

  };

  cell.prototype.clicked=function(){
    for(var c in this.ctrls){ this.ctrls[c].clicked(0,0); }
  };
  cell.prototype.moved=function(x,y){

    if(dist(mouseX,mouseY,this.x,this.y)<0.875*app.size){
      this.hit=true;
    }
    else if(dist(mouseX,mouseY,this.x,this.y)<app.size){
      this.hit=false;
    }
    else{
      this.hit=false;
    }

    // for(var c in this.ctrls){ this.ctrls[c].moved(x,y); }

  };
  cell.prototype.dragged=function(x,y){

    if(this.hit){
      for(var c in this.ctrls){ this.ctrls[c].dragged(); }
    }

  };
  cell.prototype.pressed=function(){

    if(this.hit){
      for(var c in this.ctrls){ this.ctrls[c].pressed(); }
    }

  };
  cell.prototype.released=function(){

    if(this.hit){
      for(var c in this.ctrls){ this.ctrls[c].released(); }
    }

  };
  cell.prototype.typed=function(){

    // if(app.keys[KEYCODES.SPACE]){
    //   this.vertices=[];
    //   this.temp=0;
    // }

    // if(app.keys[KEYCODES.CONTROL] &&
    //   app.keys[KEYCODES.Z]){
    //   this.shapes.splice(this.shapes.length-1,1);
    //   process();
    // }

  };

  var loadGrid=function(){

    var c, o=app.offset;
    
    // c=new cell(width/2, height/2,     25, 0,  0);    app.grid.push(c);
    // c=new cell(width/2, height/2-2*o, 25, 0,  1);    app.grid.push(c);
    // c=new cell(width/2, height/2+2*o, 25, 0, -1);    app.grid.push(c);
    
    var incX=0, incY=0;
    
    for(var x=0; x<=width; x+=app.offset*1.75){

      for(var y=0; y<=height; y+=app.offset*2){
        
        if(incX%2===0){ app.grid.push(new cell(x, y,            app.size, incX, incY, color(random(255),random(255),random(255),random(100)))); }
        else          { app.grid.push(new cell(x, y+app.offset, app.size, incX, incY, color(random(255),random(255),random(255),random(100)))); }

        incY++;

      }
      
      incX++;
      incY=0;
      
    }
    
    // var sz=(height-1)/10;
    
    // noStroke();

    // for(var x=0; x<grid.length; x++){
    //   for(var y=0; y<grid[0].length; y++){

    //     if(grid[x][y]!==0){ fill(128,0,0,32); }
    //     else              { fill(32,0,0,32);   }
        
    //     fill(x*10,x*10,x*10,100+y*20);
    //     stroke(255,0,0);
        
    //     rect(300+x*sz,y*sz,sz,sz);
        
    //     fill(255);
    //     textSize(10);
    //     textAlign(CENTER,CENTER);
        
    //     text(x + "," + y, 300+x*sz+sz/2, y*sz+sz/2);

    //   }
    // }

  };
  
  
  
  var main=function(){

    noFill();

background(255);

    if(app.running){ background(CLRS.BLACK);  }
    else           { background(8);           }
    
    pushMatrix();

      translate(app.originX, app.originY);

      

      // fill(128,0,0,128);

      // ellipse(app.x, app.y, 20, 20);

    popMatrix();



    // for(var c in app.ctrls){ app.ctrls[c].draw(mouseX,mouseY); }

    for(var c in app.grid){ app.grid[c].draw(mouseX,mouseY); }

    telemetry();

  };

  var process;
  var draw=function(){ process(); };

  // Events ===============================================================

  var mousePressed=   function(){

    if     (mouseButton===LEFT)   { app.left=true;   }
    else if(mouseButton===RIGHT)  { app.right=true;  }
    else if(mouseButton===CENTER) { app.center=true; }

  };
  var mouseReleased=  function(){

    if     (mouseButton===LEFT)   { app.left=false;   }
    else if(mouseButton===RIGHT)  { app.right=false;  }
    else if(mouseButton===CENTER) { app.center=false; }

  };
  var mouseMoved=     function(){
    for(var c in app.grid){ app.grid[c].moved(0,0); }
  };
  var mouseClicked=   function(){
    // for(var c in app.ctrls){ app.ctrls[c].clicked(mouseX,mouseY); };
    // app.running=!app.running;
  };
  var mouseOver=      function(){
    app.running=true;
    app.telemetry=true;
  };
  var mouseOut=       function(){
    app.running=false;
    app.telemetry=false;
  };
  
  var keyPressed=function(){

    app.keys[keyCode]=true;

    switch(true){

      case app.keys[COMMANDS.UP] &&
           app.keys[COMMANDS.LEFT]:     command(COMMANDS.UPLEFT);     break;
      case app.keys[COMMANDS.UP] &&
           app.keys[COMMANDS.RIGHT]:    command(COMMANDS.UPRIGHT);    break;
      case app.keys[COMMANDS.DOWN] &&
           app.keys[COMMANDS.LEFT]:     command(COMMANDS.DOWNLEFT);   break;
      case app.keys[COMMANDS.DOWN] &&
           app.keys[COMMANDS.RIGHT]:    command(COMMANDS.DOWNRIGHT);  break;

      default:                          command(keyCode);             break;

    }

  };
  var keyReleased=function(){ app.keys[keyCode]=false;  };

  // Initialize ===============================================================

  var addControls=function(){

    var ctrls=[];

    var cn=new button(
            new propC("b1", 0, 0, 0, 50, app.height, 0, 1, false, 0, 0),
            new propL(CLRS.GRID, getColor(CLRS.GRID,65), CLRS.WHITE, CLRS.YELLOW, 0, 0),
            new propA(CLRS.GRAY, CLRS.WHITE, LEFT, CENTER, 10, 11));

    cn.ctrls=ctrls;
    
    app.ctrls.push(cn);

// println(app.ctrls.length);

  };
  
  var loadData=function(){

    var sinN, cosN, tanN, cscN, secN, cotN;

    for (var n=app.min; n<=app.max; n++){

      sinN=  sin(n*PI/180)*app.unit*8;
      cscN=1/sin(n*PI/180)*app.unit*8;
      
      cosN=cos(n*PI/180)*app.unit*8;
      secN=1/cos(n*PI/180)*app.unit*8;
      
      tanN=tan(n*PI/180)*app.unit*8;
      cotN=1/tan(n*PI/180)*app.unit*8;
      
      app.data.push({ sin:  sinN,
                      csc:  cscN,
                      cos:  cosN,
                      sec:  secN,
                      tan:  tanN,
                      cot:  cotN });

    }

  };

  var setDisplay=function(){
    
    // Set grid width
    app.unit=app.width/54;

    // Left pane
    app.paneLeftX=0;
    app.paneLeftY=0;

    app.paneLeftW=app.unit*20;
    app.paneLeftH=app.height;

    // Right pane
    app.paneRightX=app.unit*20;
    app.paneRightY=0;

    app.paneRightW=app.unit*34;
    app.paneRightH=app.height;

  };

  var initialize=function(){

    frameRate(30);

    app.width=window.innerWidth-20;
    app.height=window.innerHeight-20;
    
    // app.width=width;
    // app.height=height;
    
    
    // println(app.data[350][INDEX.COT]);

    size(app.width, app.height);

    setDisplay();

    // loadData();

    // addControls();

    app.ctrl  =app.keys[COMMANDS.CTRL]  =false;
    app.alt   =app.keys[COMMANDS.ALT]   =false;
    app.shift =app.keys[COMMANDS.SHIFT] =false;

    app.size=height/10;
    app.offset=pow( pow(app.size,2)-pow(app.size/2,2), 0.5);
    
    
    loadGrid();

  };

  initialize();

  process=main;

  // noCursor();


}};
