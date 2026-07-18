import { coaches, Coach, StatKey } from "../data/divisions";



export interface HiredCoach {


name:string;

style:string;

cost:number;

boost:StatKey;

active:boolean;


}





export function getAvailableCoaches(

money:number

):Coach[]{


return coaches.filter(

coach => money >= coach.cost

);


}








export function hireCoach(

coach:Coach

):HiredCoach{


return {


name:coach.name,


style:coach.style,


cost:coach.cost,


boost:coach.boost,


active:true


};


}








export function applyCoachBoost(

fighter:any,

coach:HiredCoach

){



if(!coach.active){

return fighter;

}



if(fighter.stats[coach.boost] < 99){



fighter.stats[coach.boost]+=2;



if(fighter.stats[coach.boost]>99){

fighter.stats[coach.boost]=99;

}



}



return fighter;


}








export function fireCoach(

coach:HiredCoach

){


coach.active=false;


return coach;


}








export function coachMessage(

coach:HiredCoach

){



return `${coach.name} is now training your fighter in ${coach.style}`;

}
