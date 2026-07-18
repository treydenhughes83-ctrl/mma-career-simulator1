export interface RankedFighter {


name:string;

rank:number;

previousRank:number;

record:string;

champion:boolean;

organisation:string;

division:string;


}







export function getMovement(

fighter:RankedFighter

){



if(fighter.rank < fighter.previousRank){


return "🟢⬆️";


}



if(fighter.rank > fighter.previousRank){


return "🔴⬇️";


}



return "➡️";


}








export function createRankingRow(

fighter:RankedFighter

){



return {


position:

fighter.champion

? "🏆 Champion"

: `#${fighter.rank}`,



movement:

getMovement(fighter),



name:fighter.name,


record:fighter.record,


organisation:fighter.organisation,


division:fighter.division


};


}








export function displayDivisionRankings(

fighters:RankedFighter[]

){



return fighters

.sort(

(a,b)=>

a.rank-b.rank

)

.map(

fighter=>

createRankingRow(fighter)

);


}








export function findContenders(

fighters:RankedFighter[]

){



return fighters.filter(

fighter =>

fighter.rank<=5 &&

!fighter.champion

);


}








export function championInfo(

fighters:RankedFighter[]

){



return fighters.find(

fighter=>

fighter.champion

);


}
