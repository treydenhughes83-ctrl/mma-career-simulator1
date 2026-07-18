import { StatKey } from "../data/divisions";
import { getGymBonus } from "../data/divisions";



export interface TrainingSession {


fighter:string;

gym:string;

stat:StatKey;

improvement:number;

injuryRisk:number;

}





export interface TrainingCamp {


weeks:number;

sessions:TrainingSession[];

fatigue:number;

injured:boolean;

}





function random(min:number,max:number){

return Math.floor(

Math.random()*(max-min+1)

)+min;

}








export function trainFighter(

fighter:any,

gym:string,

stat:StatKey

):TrainingSession{



const gymBoost =

getGymBonus(

gym,

stat

);




const improvement =

1 + gymBoost;



if(fighter.stats[stat] < 99){


fighter.stats[stat]+=improvement;


if(fighter.stats[stat]>99){

fighter.stats[stat]=99;

}

}



const injuryRisk=random(1,100);



return {


fighter:fighter.name,

gym,

stat,

improvement,

injuryRisk


};


}









export function createTrainingCamp(

weeks:number

):TrainingCamp{


return {


weeks,


sessions:[],


fatigue:0,


injured:false


};


}








export function addTrainingWeek(

camp:TrainingCamp,

session:TrainingSession

){



camp.sessions.push(session);


camp.fatigue += 10;



if(session.injuryRisk>95){


camp.injured=true;


}



return camp;


}









export function recoverFighter(

camp:TrainingCamp

){



camp.fatigue=0;


camp.injured=false;


return camp;


}









export function trainingSummary(

camp:TrainingCamp

){



return {


sessions:

camp.sessions.length,


fatigue:

camp.fatigue,


injured:

camp.injured


};


}
