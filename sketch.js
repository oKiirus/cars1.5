

var db
var player, form, game, playerCount, gameState = 0
var players, distance
function setup(){
    createCanvas(500,500);
    //creating database
    db = firebase.database()
    game = new Game()
  game.getState()
  game.start()

}

function draw(){
    background("white");

      if(playerCount === 4){
        game.updateState(1)



      }
     if(gameState === 1){
      game.play()

     } 
    
}




