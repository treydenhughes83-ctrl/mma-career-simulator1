import { StatKey } from "../data/divisions";


export interface FightStats {

knockdowns:number;

submissionAttempts:number;

takedowns:number;

significantStrikes:number;

controlTime:number;

}






export interface RoundResult {

round:number;

minutes:string[];

winner?:string;

statsA:FightStats;

statsB:FightStats;

}






export interface FightResult {

fighterA:string;

fighterB:string;

winner:string;

method:string;

round:number;

rounds:RoundResult[];

}





function random(min:number,max:number){

return Math.floor(

Math.random()*(max-min+1)

)+min;

}








function createStats():FightStats{

return {

knockdowns:0,

submissionAttempts:0,

takedowns:0,

significantStrikes:0,

controlTime:0

};

}









export function simulateFight(

fighterA:string,

fighterB:string,

statsA:Record<StatKey,number>,

statsB:Record<StatKey,number>,

championship=false

):FightResult{



const totalRounds = championship ? 5 : 3;


const rounds:RoundResult[]=[];



let scoreA=0;

let scoreB=0;





for(let r=1;r<=totalRounds;r++){


const fightStatsA=createStats();

const fightStatsB=createStats();


const minutes:string[]=[];



for(let minute=1;minute<=3;minute++){



const powerA =

statsA.power +

statsA.striking +

random(1,20);



const powerB =

statsB.power +

statsB.striking +

random(1,20);





if(powerA>powerB){


fightStatsA.significantStrikes+=random(5,20);

scoreA++;


minutes.push(

`${minute}:00 ${fighterA} lands strikes`

);



}





else{


fightStatsB.significantStrikes+=random(5,20);

scoreB++;


minutes.push(

`${minute}:00 ${fighterB} controls the action`

);



}







if(statsA.wrestling>statsB.wrestling){

fightStatsA.takedowns+=random(0,2);

}



if(statsB.wrestling>statsA.wrestling){

fightStatsB.takedowns+=random(0,2);

}







if(Math.random()<0.15){

fightStatsA.knockdowns++;

minutes.push(

`${fighterA} scores a knockdown`

);

}



if(Math.random()<0.15){

fightStatsB.knockdowns++;

minutes.push(

`${fighterB} scores a knockdown`

);

}








if(statsA.bjj>statsB.bjj && Math.random()<0.12){

fightStatsA.submissionAttempts++;

minutes.push(

`${fighterA} attempts submission`

);

}



if(statsB.bjj>statsA.bjj && Math.random()<0.12){

fightStatsB.submissionAttempts++;

minutes.push(

`${fighterB} attempts submission`

);

}





}




rounds.push({


round:r,


minutes,


statsA:fightStatsA,


statsB:fightStatsB


});



}





let winner=fighterA;

let method="Decision";

let round=totalRounds;





if(scoreB>scoreA){

winner=fighterB;

}





if(Math.random()<0.20){


method="KO/TKO";

round=random(1,totalRounds);


}



else if(Math.random()<0.15){


method="Submission";

round=random(1,totalRounds);


}






return {


fighterA,


fighterB,


winner,


method,


round,


rounds


};


}
