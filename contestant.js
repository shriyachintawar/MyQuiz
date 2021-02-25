class Contestant{
    constructor(){
        this.index=null;
        this.answer = 0;
        this.name = null;
    }
    getCount(){
        var contestantCountRef = db.ref('contestantCount');
        contestantCountRef.on("value",function(data){
            contestantCount = data.val();
        });
    }
    updateCount(count){
        db.ref('/').update({
            contestantCount:count
        });
    }
    update(){
        var contestantIndex = 'contestantinfo/contestant' + this.index;
        db.ref(contestantIndex).set({
            name : this.name,
            answer : this.answer
        });
    }

    static getContestantInfo(){
        var contestantInfoRef = db.ref('contestantinfo');
        contestantInfoRef.on("value",(data)=>{
            allContestants = data.val();
        });
    }
}