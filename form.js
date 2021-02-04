class Form {

    constructor(){
            this.title =  createElement("h2")
            this.input = createInput("Enter Name:")
            this.button = createButton("play")
            this.greeting = createElement("h2")
    }

    remove(){
        this.title.hide()
            this.input.hide()
            this.button.hide()
            this.greeting.hide()

        }

    display(){
        
        this.title.html("Car Racing!")
        this.title.position(130, 0)
        this.input.position(130, 160)
        this.button.position(250, 200)
        // ()=> arrow function
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.updateCount(playerCount)
            player.updateInfo()
            this.greeting.html("Welcome! " + player.name + "!")
            this.greeting.position(150, 160)
        })
    }

}