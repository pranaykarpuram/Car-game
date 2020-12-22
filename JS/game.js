class Game{

    constructor(){

    }

    getState(){
        database.ref("gameState").on("value",function(x){
            gameState = x.val();
        })
    }

    updateState(y){
        database.ref("/").update({
            gameState: y 
            
        })
    }


    start(){
        car1 = createSprite(100,300,50,50);
        car2 = createSprite(200,300,50,50);
        car3 = createSprite(300,300,50,50);
        car4 = createSprite(400,300,50,50);
        cars = [car1,car2,car3,car4];

        if(gameState === 0){
         player = new Player();
         player.getCount(); 

         form = new Form();
         form.display();
        }
    }
    play(){
        background("white");
        form.greeting.hide();
        form.greeting2.hide();
        textSize(30);
        text("Game Start",width/2-100,height/2-100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var display_position = 130;
            var index = 0;
            var x = 200;
            var y;

            for(var plr in allPlayers){
                //console.log(player.index)
                index = index+1;
                x = x+200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                if(plr==="player "+player.index){
                    //console/log("player"+player.index)
                    fill("red");
                    cars[index-1].shapeColor = "red";

                    camera.position.y = cars[index-1].y;
                }
                else{
                    fill("black");
                }
                text(allPlayers[plr].name+": "+allPlayers[plr].distance,cars[index-1].x-20,cars[index-1].y-40);
            }
        }
        if(keyDown(UP_ARROW)){
            player.distance+=10;
            player.update();
        }

        drawSprites();

    }
}