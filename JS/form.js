class Form{

    constructor(){
        this.heading = createElement('h1','Car Racing Game');
        this.heading.position(width/2-100,100);

        this.inputBox = createInput('');
        this.inputBox.position(width/2,height/2);

        this.button = createButton('PLAY');
        this.button.position(width/2,height/2+200);
    }

    display(){
        
        this.button.mousePressed(()=>{
            this.heading.hide();
            this.inputBox.hide();
            this.button.hide();
            this.greeting = createElement('h2');
            this.greeting.position(width/2-100,height/2);
            this.greeting2 = createElement('h3');
            this.greeting2.html('Wait for the other players to join...');
            this.greeting2.position(width/2-300,height/2+300);
            playerCount = playerCount+1;
            player.index = playerCount;
            player.name = this.inputBox.value();
            player.updateCount(playerCount);
            player.update();
            this.greeting.html('Hello '+ player.name);
            
        });

    }
}