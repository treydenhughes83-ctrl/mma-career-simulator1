import {
  organisations,
  rankings,
  Division,
  Organisation
} from "./database";

import {
  simulateFight
} from "./fightEngine";

import {
  generateFighterProfile
} from "./database";

import {
  updateRankingAfterFight
} from "./rankings";

import {
  createEvent,
  generateFightNews
} from "./events";



export interface WorldFight {

  organisation:Organisation;

  division:Division;

  fighterA:string;

  fighterB:string;

  winner:string;

  method:string;

}



export const worldFightHistory:WorldFight[]=[];



function randomNumber(max:number){

return Math.floor(
Math.random()*max
);

}




function pickOpponent(

fighters:string[]

){

const a =
randomNumber(fighters.length);


let b =
randomNumber(fighters.length);


while(b===a){

b=randomNumber(fighters.length);

}


return [

fighters[a],

fighters[b]

];

}





export function simulateWorldDivision(

organisation:Organisation,

division:Division

){



const divisionRankings =
rankings[organisation]?.[division];



if(!divisionRankings ||
divisionRankings.length<2){

return null;

}



const [

fighterA,

fighterB

]=pickOpponent(
divisionRankings
);




const profileA =
generateFighterProfile(
fighterA
);


const profileB =
generateFighterProfile(
fighterB
);



const result =
simulateFight(

{

name:fighterA,

stats:profileA.stats

},

{

name:fighterB,

stats:profileB.stats

}

);



const winner =
result.winner;



const loser =
winner===fighterA
? fighterB
:fighterA;




const rankedA={

name:fighterA,

division,

organisation,

rank:

divisionRankings.indexOf(fighterA)+1,

movement:0,

previousRank:
divisionRankings.indexOf(fighterA)+1,

champion:false

};



const rankedB={

name:fighterB,

division,

organisation,

rank:

divisionRankings.indexOf(fighterB)+1,

movement:0,

previousRank:
divisionRankings.indexOf(fighterB)+1,

champion:false

};




updateRankingAfterFight(

winner===fighterA
? rankedA
: rankedB,

winner===fighterA
? rankedB
: rankedA,

divisionRankings.length

);




const fight:WorldFight={


organisation,

division,

fighterA,

fighterB,

winner,

method:
result.method


};



worldFightHistory.push(fight);



generateFightNews(

winner,

loser,

organisation

);



return fight;


}







export function runWeeklyWorldSimulation(){


const events:any[]=[];



organisations.forEach(

organisation=>{


Object.keys(
rankings[organisation] || {}
)

.forEach(

division=>{


const fight =
simulateWorldDivision(

organisation,

division as Division

);



if(fight){

events.push(fight);

}


});


});



return events;


}







export function createWorldEvent(){


const fights =
runWeeklyWorldSimulation();



return createEvent(

"UFC",

new Date()
.toISOString()
.split("T")[0],

fights.map(f=>({

mainEvent:false,

fighterA:f.fighterA,

fighterB:f.fighterB,

division:f.division,

championship:false,

result:
`${f.winner} wins by ${f.method}`

}))

);


}
