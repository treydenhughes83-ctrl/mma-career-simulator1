export interface RankingChange {

fighter:string;

oldRank:number;

newRank:number;

movement:number;

arrow:"🟢⬆️"|"🔴⬇️"|"➡️";

}





function randomMove(){

return Math.random() > 0.5 ? 1 : 2;

}







export function updateRankAfterFight(

fighter:string,

currentRank:number,

won:boolean,

totalRanked:number

):RankingChange {



let newRank=currentRank;



if(won){


newRank=Math.max(

1,

currentRank-randomMove()

);


}



else{


newRank=Math.min(

totalRanked,

currentRank+randomMove()

);


}





let arrow:

"🟢⬆️"|

"🔴⬇️"|

"➡️";




if(newRank<currentRank){

arrow="🟢⬆️";

}

else if(newRank>currentRank){

arrow="🔴⬇️";

}

else{

arrow="➡️";

}





return {


fighter,


oldRank:currentRank,


newRank,


movement:

Math.abs(

currentRank-newRank

),


arrow


};



}









export function canFightOpponent(

fighterRank:number,

opponentRank:number

){



const difference=

opponentRank-fighterRank;



// must earn higher ranked fights

return difference <= 5;


}







export function rankingMessage(

change:RankingChange

){



if(change.arrow==="🟢⬆️"){


return `${change.fighter} moved up from #${change.oldRank} to #${change.newRank}`;

}



if(change.arrow==="🔴⬇️"){


return `${change.fighter} dropped from #${change.oldRank} to #${change.newRank}`;

}



return `${change.fighter} stays at #${change.oldRank}`;


}
