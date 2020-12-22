class Player{

    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }

    getCount(){
        database.ref("playerCount").on("value",function(x){
            playerCount = x.val();
        })
    }
    updateCount(y){
        database.ref("/").update({
            playerCount: y
        })
    }
    update(){
        var playerIndex = "players/player "+this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,

        })
    }
    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers = data.val();
            console.log(allPlayers)
        });
    }

}