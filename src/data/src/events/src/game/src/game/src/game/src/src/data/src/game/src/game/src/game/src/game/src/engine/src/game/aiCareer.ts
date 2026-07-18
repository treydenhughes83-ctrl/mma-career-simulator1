import { simulateFight } from "./fightSimulation";
import { announceFightResult, announceChampion } from "./worldNews";
import { updateRankAfterFight } from "./rankingMovement";



export interface AIFighter {


name:string;

organisation:string;

division:string;

rank:number;

stats:any;

champion:boolean;


}





export interface AIEventResult {


winner:string;

loser:string;

organisation:string;

division:string;

}





export function runAIFight(

fighterA:AIFighter,

fighterB:AIFighter

):AIEventResult {



const result = simulateFight(

fighterA.name,

fighterB.name,

fighterA.stats,

fighterB.stats,

fighterA.champion || fighterB.champion

);



const winner =

result.winner === fighterA.name

? fighterA

: fighterB;



const loser =

result.winner === fighterA.name

? fighterB

: fighterA;





announceFightResult(

winner.name,

loser.name,

result.method,

result.round

);





const winnerMovement = updateRankAfterFight(

winner.name,

winner.rank,

true,

15

);



const loserMovement = updateRankAfterFight(

loser.name,

loser.rank,

false,

15

);



winner.rank = winnerMovement.newRank;

loser.rank = loserMovement.newRank;





if(winnerMovement.newRank===1){


winner.champion=true;


announceChampion(

winner.name,

winner.organisation,

winner.division

);


}






return {


winner:winner.name,

loser:loser.name,

organisation:winner.organisation,

division:winner.division


};


}








export function runWorldWeek(

fighters:AIFighter[]

){



const results:AIEventResult[]=[];



for(let i=0;i<fighters.length-1;i+=2){



results.push(

runAIFight(

fighters[i],

fighters[i+1]

)

);



}



return results;


}
