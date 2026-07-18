import { StatKey } from "./database";


export interface FightStats {

  strikes:number;

  takedowns:number;

  submissionAttempts:number;

  knockdowns:number;

  controlTime:number;

}


export interface RoundResult {

  round:number;

  fighterAStats:FightStats;

  fighterBStats:FightStats;

  winner?:string;

  commentary:string[];

}



export interface FightResult {

  fighterA:string;

  fighterB:string;

  rounds:RoundResult[];

  winner:string;

  method:
  | "KO/TKO"
  | "Submission"
  | "Decision";

  championship:boolean;

}




export interface FightFighter {

name:string;

stats:Record<StatKey,number>;

}



function random(min:number,max:number){

return Math.floor(
Math.random()*(max-min+1)
)+min;

}




function createStats():FightStats{

return {

strikes:0,

takedowns:0,

submissionAttempts:0,

knockdowns:0,

controlTime:0

};

}




function overallSkill(

fighter:FightFighter

){

return (

fighter.stats.striking +

fighter.stats.wrestling +

fighter.stats.bjj +

fighter.stats.cardio +

fighter.stats.fightIQ

)/5;

}





export function simulateRound(

fighterA:FightFighter,

fighterB:FightFighter,

round:number

):RoundResult{


const a=createStats();

const b=createStats();


const aPower =
overallSkill(fighterA);


const bPower =
overallSkill(fighterB);



const advantage =
aPower-bPower;



a.strikes=random(
20+Math.max(0,advantage),
60
);


b.strikes=random(
20+Math.max(0,-advantage),
60
);



a.takedowns=random(
0,
fighterA.stats.wrestling>70 ? 4:2
);


b.takedowns=random(
0,
fighterB.stats.wrestling>70 ? 4:2
);




a.submissionAttempts=random(
0,
fighterA.stats.bjj>80 ? 3:1
);


b.submissionAttempts=random(
0,
fighterB.stats.bjj>80 ? 3:1
);




if(

fighterA.stats.power >
fighterB.stats.power &&
Math.random()>0.75

){

a.knockdowns++;

}



if(

fighterB.stats.power >
fighterA.stats.power &&
Math.random()>0.75

){

b.knockdowns++;

}




const commentary:string[]=[];



if(a.knockdowns)

commentary.push(
`${fighterA.name scores a knockdown!`
);



if(b.knockdowns)

commentary.push(
`${fighterB.name scores a knockdown!`
);



if(a.takedowns)

commentary.push(
`${fighterA.name lands ${a.takedowns} takedowns`
);



if(b.takedowns)

commentary.push(
`${fighterB.name lands ${b.takedowns} takedowns`
);



return {

round,

fighterAStats:a,

fighterBStats:b,

commentary

};


}





export function simulateFight(

fighterA:FightFighter,

fighterB:FightFighter,

championship:boolean=false

):FightResult{


const totalRounds =
championship ? 5 : 3;


const rounds:RoundResult[]=[];



for(
let i=1;
i<=totalRounds;
i++
){

rounds.push(

simulateRound(

fighterA,

fighterB,

i

)

);

}




let scoreA=0;

let scoreB=0;



rounds.forEach(round=>{


scoreA +=

round.fighterAStats.strikes +

round.fighterAStats.takedowns*5 +

round.fighterAStats.knockdowns*10;



scoreB +=

round.fighterBStats.strikes +

round.fighterBStats.takedowns*5 +

round.fighterBStats.knockdowns*10;


});





let winner =
scoreA>scoreB

? fighterA.name

: fighterB.name;



let method:
"KO/TKO"|"Submission"|"Decision";




const lastRound =
rounds[rounds.length-1];



if(

lastRound.fighterAStats.knockdowns>=2 ||

lastRound.fighterBStats.knockdowns>=2

){

method="KO/TKO";


}

else if(

lastRound.fighterAStats.submissionAttempts>2 ||

lastRound.fighterBStats.submissionAttempts>2

){

method="Submission";


}

else {

method="Decision";

}




return {

fighterA:fighterA.name,

fighterB:fighterB.name,

rounds,

winner,

method,

championship

};


  }
