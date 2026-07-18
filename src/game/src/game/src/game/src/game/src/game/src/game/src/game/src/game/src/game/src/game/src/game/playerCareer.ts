import {
  Division,
  Organisation,
  gyms,
  StatKey,
  gymBonuses
} from "./database";


export type FightingStyle =
  | "Striker"
  | "Grappler"
  | "BJJ Specialist"
  | "Wrestler"
  | "Complete Fighter";



export interface BeltHistory {

organisation:string;

division:Division;

belt:string;

date:string;

}



export interface PlayerFighter {


name:string;

age:number;

country:string;

division:Division;

style:FightingStyle;

gym:string;


stats:Record<StatKey,number>;


wins:number;

losses:number;

draws:number;


reputation:number;


money:number;


belts:BeltHistory[];


amateurRecord:number;


proRecord:number;


}



export function createStarterFighter(

name:string,

style:FightingStyle,

division:Division

):PlayerFighter{


let stats={

striking:50,

power:50,

wrestling:50,

bjj:50,

cardio:50,

fightIQ:50

};



if(style==="Striker"){

stats.striking+=15;

stats.power+=10;

}


if(style==="Grappler"){

stats.wrestling+=15;

stats.bjj+=10;

}


if(style==="BJJ Specialist"){

stats.bjj+=20;

}


if(style==="Wrestler"){

stats.wrestling+=20;

stats.cardio+=5;

}


if(style==="Complete Fighter"){

stats.striking+=5;

stats.wrestling+=5;

stats.bjj+=5;

stats.fightIQ+=5;

}



return {


name,

age:18,

country:"🌎 Unknown",

division,


style,


gym:"Local MMA Gym",


stats,


wins:0,

losses:0,

draws:0,


reputation:0,


money:1000,


belts:[],


amateurRecord:0,


proRecord:0


};


}







export function changeGym(

fighter:PlayerFighter,

newGym:string

){


if(!gyms.includes(newGym)){

return false;

}



fighter.gym=newGym;


return true;


}








export function train(

fighter:PlayerFighter,

stat:StatKey

){



let increase=1;



const bonus =
gymBonuses[fighter.gym]?.[stat];


if(bonus){

increase += bonus;

}



fighter.stats[stat]=Math.min(

100,

fighter.stats[stat]+increase

);



return fighter;


}









export function addWin(

fighter:PlayerFighter,

organisation:Organisation

){


fighter.wins++;

fighter.reputation+=5;

fighter.money+=5000;



if(organisation!=="Amateur Circuit"){

fighter.proRecord++;

}

else{

fighter.amateurRecord++;

}



return fighter;


}







export function addLoss(

fighter:PlayerFighter

){


fighter.losses++;

fighter.reputation=Math.max(

0,

fighter.reputation-2

);


return fighter;

}








export function winBelt(

fighter:PlayerFighter,

organisation:string,

division:Division

){


fighter.belts.push({

organisation,

division,

belt:"Champion",

date:

new Date()
.toISOString()
.split("T")[0]

});


}






export function fighterResume(

fighter:PlayerFighter

){


return {


record:

`${fighter.wins}-${fighter.losses}-${fighter.draws}`,


belts:

fighter.belts,


career:

fighter.style,


gym:

fighter.gym


};


}
