class Quiz{
    constructor(){

    }
    getState(){
        var gameStateRef = db.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    update(state){
        db.ref('/').update({
            gameState : state
        });
    }

    async start(){
        if(gameState===0){
            contestant = new Contestant();
            var contestantCountRef = await db.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        question.hide_details();
        background("yellow");
        textSize(30);
        text("Result of the Quiz",340,50);
        Contestant.getContestantInfo();
        if(allContestants!==undefined){
            var y=230;
            fill("Blue");
            textSize(20);
            text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
            for(var ans in allContestants){
                var correctAns="2";
                if(correctAns===allContestants[ans].answer)
                fill("green");
                else
                fill("red");
                y+=30;
                textSize(15);
                text(allContestants[ans].name+":"+allContestants[ans].answer,250,y);
                
            }
        }
    }
}