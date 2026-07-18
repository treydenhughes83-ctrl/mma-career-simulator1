import { PlayerFighter } from "./playerCareer";
import { StatKey } from "./database";


export type FightResult =
| "KO"
| "TKO"
| "Submission"
| "Decision"
| "Draw";


export interface FightStats {

rounds:number;

minutes:number;

knockdowns:number;

takedowns:number;

submissionAttempts:number;

significantStrikes:number;

winner:string;

result:FightResult;

}



function random(min:number,max:number){

return Math.floor(
Math.random()*(max-min+1)+min
);

}





function fighterScore(
fighter:PlayerFighter
){

return (

fighter.stats.striking * 0.25 +

fighter.stats.power * 0.20 +

fighter.stats.wrestling * 0.20 +

fighter.stats.bjj * 0.15 +

fighter.stats.cardio * 0.10 +

fighter.stats.fightIQ * 0.10

);

}








export function simulateFight(

fighterA:PlayerFighter,

fighterB:PlayerFighter,

championship=false

):FightStats{


const rounds = championship ? 5 : 3;


let AScore=0;

let BScore=0;


let stats:FightStats={


rounds,

minutes:0,

knockdowns:0,

takedowns:0,

submissionAttempts:0,

significantStrikes:0,

winner:"",

result:"Decision"


};




for(let round=1;round<=rounds;round++){



for(let minute=1;minute<=3;minute++){


stats.minutes++;



const A=fighterScore(fighterA)+random(-20,20);

const B=fighterScore(fighterB)+random(-20,20);



if(A>B){


AScore++;


stats.significantStrikes += random(3,10);



if(fighterA.stats.power>85 && Math.random()<0.08){

stats.knockdowns++;

}


if(fighterA.stats.wrestling>85 && Math.random()<0.15){

stats.takedowns++;

}


if(fighterA.stats.bjj>90 && Math.random()<0.05){

stats.submissionAttempts++;

}


}



else{


BScore++;


stats.significantStrikes += random(3,10);



if(fighterB.stats.power>85 && Math.random()<0.08){

stats.knockdowns++;

}


if(fighterB.stats.wrestling>85 && Math.random()<0.15){

stats.takedowns++;

}


if(fighterB.stats.bjj>90 && Math.random()<0.05){

stats.submissionAttempts++;

}


}




}



}




if(AScore>BScore){


stats.winner=fighterA.name;


}

else if(BScore>AScore){


stats.winner=fighterB.name;


}

else{


stats.result="Draw";

return stats;

}




const winner =

stats.winner===fighterA.name

?

fighterA

:

fighterB;




// Finish chances

const finishChance =

(

winner.stats.power +

winner.stats.bjj +

winner.stats.fightIQ

)/300;



if(Math.random()<finishChance*0.25){



if(winner.stats.bjj>winner.stats.power){

stats.result="Submission";

}

else{

stats.result="KO";

}



}

else{


stats.result="Decision";


}



return stats;


}import { PlayerFighter } from "./playerCareer";
import { StatKey } from "./database";


export type FightResult =
| "KO"
| "TKO"
| "Submission"
| "Decision"
| "Draw";


export interface FightStats {

rounds:number;

minutes:number;

knockdowns:number;

takedowns:number;

submissionAttempts:number;

significantStrikes:number;

winner:string;

result:FightResult;

}



function random(min:number,max:number){

return Math.floor(
Math.random()*(max-min+1)+min
);

}





function fighterScore(
fighter:PlayerFighter
){

return (

fighter.stats.striking * 0.25 +

fighter.stats.power * 0.20 +

fighter.stats.wrestling * 0.20 +

fighter.stats.bjj * 0.15 +

fighter.stats.cardio * 0.10 +

fighter.stats.fightIQ * 0.10

);

}








export function simulateFight(

fighterA:PlayerFighter,

fighterB:PlayerFighter,

championship=false

):FightStats{


const rounds = championship ? 5 : 3;


let AScore=0;

let BScore=0;


let stats:FightStats={


rounds,

minutes:0,

knockdowns:0,

takedowns:0,

submissionAttempts:0,

significantStrikes:0,

winner:"",

result:"Decision"


};




for(let round=1;round<=rounds;round++){



for(let minute=1;minute<=3;minute++){


stats.minutes++;



const A=fighterScore(fighterA)+random(-20,20);

const B=fighterScore(fighterB)+random(-20,20);



if(A>B){


AScore++;


stats.significantStrikes += random(3,10);



if(fighterA.stats.power>85 && Math.random()<0.08){

stats.knockdowns++;

}


if(fighterA.stats.wrestling>85 && Math.random()<0.15){

stats.takedowns++;

}


if(fighterA.stats.bjj>90 && Math.random()<0.05){

stats.submissionAttempts++;

}


}



else{


BScore++;


stats.significantStrikes += random(3,10);



if(fighterB.stats.power>85 && Math.random()<0.08){

stats.knockdowns++;

}


if(fighterB.stats.wrestling>85 && Math.random()<0.15){

stats.takedowns++;

}


if(fighterB.stats.bjj>90 && Math.random()<0.05){

stats.submissionAttempts++;

}


}




}



}




if(AScore>BScore){


stats.winner=fighterA.name;


}

else if(BScore>AScore){


stats.winner=fighterB.name;


}

else{


stats.result="Draw";

return stats;

}




const winner =

stats.winner===fighterA.name

?

fighterA

:

fighterB;




// Finish chances

const finishChance =

(

winner.stats.power +

winner.stats.bjj +

winner.stats.fightIQ

)/300;



if(Math.random()<finishChance*0.25){



if(winner.stats.bjj>winner.stats.power){

stats.result="Submission";

}

else{

stats.result="KO";

}



}

else{


stats.result="Decision";


}



return stats;


}
