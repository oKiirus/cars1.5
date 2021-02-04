class Game {

    constructor(){


        
    }
//reading the gameState value from the database
    getState(){

        db.ref("gameState").on("value", function(data){
            gameState = data.val()
        })
        
    }

//writing the gameState value to the database
    updateState(state){

        db.ref("/").update({
            gameState:state
        })

    }

    //start screen
    start(){

        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }

    }

    //play screen
    play(){
        form.remove()
        text("Game Started", 200, 200)
    }

}