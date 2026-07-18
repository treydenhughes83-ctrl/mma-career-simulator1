import { Division, Organisation } from "./database";


export interface RankedFighter {

  name:string;

  division:Division;

  organisation:Organisation;

  rank:number;

  movement:number;

  previousRank:number;

  champion:boolean;

}



export interface RankingChange {

  fighter:string;

  oldRank:number;

  newRank:number;

  movement:number;

  arrow:"GREEN" | "RED" | "NONE";

}



export const rankingHistory:
Record<string, RankingChange[]> = {};



export function createRankingChange(

fighter:string,

oldRank:number,

newRank:number

):RankingChange {


let movement =
oldRank - newRank;


let arrow:
"GREEN" | "RED" | "NONE";


if(movement > 0){

arrow="GREEN";

}

else if(movement < 0){

arrow="RED";

}

else {

arrow="NONE";

}



return {

fighter,

oldRank,

newRank,

movement,

arrow

};


}




// Fighters can only climb 1-2 places per win
export function moveUpAfterWin(

rank:number

){

const jump =
Math.random() > 0.5 ? 2 : 1;


return Math.max(
1,
rank - jump
);

}




// Fighters can only drop 1-2 places after loss
export function moveDownAfterLoss(

rank:number,
totalRanked:number

){

const drop =
Math.random() > 0.5 ? 2 : 1;


return Math.min(

totalRanked,

rank + drop

);

}




export function updateRankingAfterFight(

winner:RankedFighter,

loser:RankedFighter,

totalDivisionRank:number

){



const changes:RankingChange[]=[];



const winnerOld =
winner.rank;


const loserOld =
loser.rank;



// winner moves upward

winner.rank =
moveUpAfterWin(
winner.rank
);



// loser falls

loser.rank =
moveDownAfterLoss(
loser.rank,
totalDivisionRank
);



changes.push(

createRankingChange(

winner.name,

winnerOld,

winner.rank

)

);



changes.push(

createRankingChange(

loser.name,

loserOld,

loser.rank

)

);



rankingHistory[winner.name] ??= [];

rankingHistory[winner.name].push(
changes[0]
);



rankingHistory[loser.name] ??= [];

rankingHistory[loser.name].push(
changes[1]
);



return changes;


}





export function fightForTitle(

fighter:RankedFighter

){

return fighter.rank === 1;

}





export function winChampionship(

fighter:RankedFighter)

{

fighter.champion=true;

fighter.rank=0;

return fighter;

}





export function loseChampionship(

fighter:RankedFighter)

{

fighter.champion=false;

fighter.rank=1;

return fighter;

}





export function getMovementArrow(

movement:number

){

if(movement>0){

return "🟢⬆️";

}


if(movement<0){

return "🔴⬇️";

}


return "⚪➡️";


}
