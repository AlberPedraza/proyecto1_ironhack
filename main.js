var myMaps;
var myBombs;
//var myBoxes = new Boxes();
var myPlayers1;
var myBoards;
var canvas;
var ctx;
//myMaps.insertMap(8,8);
//console.log(myBoards.mapItems);

//Canvas

$(document).ready(function() {
  canvas = document.getElementById('map');
  ctx = canvas.getContext('2d');

  myMaps = new Maps();
  myBombs = new Bombs();
  myPlayers1 = new Players(4, 4, 355, 355,89.75);
  myBoards = new Boards(7, 7);

  var p_con = "w";
  var p_con_cls = "-";


  //añade bomba al mapa
  myBombs.setBomb(1, 1);
  //añade posicion del jugador al mapa
  myPlayers1.addPlayerMap(myPlayers1.x, myPlayers1.y, p_con);

  //pinta tablero y jugador
  myBoards.start(ctx);
  myPlayers1.paintPlayer(ctx,myPlayers1.x, myPlayers1.y);





//////////////////// Controles////////////////////////

var keyPrueba = document.getElementById("map");

document.onkeydown = function(ev) {
  var key = ev.keyCode;
  console.log("Keycode = " + key);

  controlKey = function(key) {
    var backPos_x = myPlayers1.x;
    var backPos_y = myPlayers1.y;

    switch (key) {
      case 38:
        console.log("arriba");
        console.log(" <--funcion x: ", myPlayers1.x);
        //if(myPlayers1.x >= 0 || myPlayers1.x <= 8 || myPlayers1.y >= 0 || myPlayers1.y <= 8){
        myPlayers1.moveUp(myPlayers1.x, myPlayers1.y, p_con,ctx);
        myPlayers1.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        //};
        console.log("funcion x -->", myPlayers1.x);
        console.log(myBoards.mapItems);
        break;
      case 40:
        console.log("abajo");
        console.log(" <--funcion x: ", myPlayers1.x);
        if(myPlayers1.x >= 0 || myPlayers1.x <= 8 || myPlayers1.y >= 0 || myPlayers1.y <= 8){
        myPlayers1.moveDown(myPlayers1.x, myPlayers1.y, p_con);
        myPlayers1.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        };

      console.log("funcion x -->", myPlayers1.x);
        console.log(myBoards.mapItems);
        break;
      case 37:
        console.log("izquierda");
        myPlayers1.moveLeft(myPlayers1.x, myPlayers1.y, p_con);
        myPlayers1.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        console.log("funcion -->", myPlayers1.x);
        console.log(myBoards.mapItems);
        break;
      case 39:
        console.log("derecha");
        myPlayers1.moveRight(myPlayers1.x, myPlayers1.y, p_con);
        myPlayers1.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        console.log("despues de la funcion", myPlayers1.y);
        console.log("funcion -->", myPlayers1.x);
        console.log(myBoards.mapItems);
        break;
      default:
        console.log("tecla sin movimiento");

    }


};//cierra onkeypress
    controlKey(key);
    //cada vez que hay movimiento actualiza posición a la array de Maps
    myPlayers1.addPlayerMap(myPlayers1.x, myPlayers1.y, p_con);
  };
  console.log(myBoards.mapItems);


  //  setInterval(draw, 0);
}); //cierra Jquery
