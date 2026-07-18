import { StatKey } from "../data/divisions";



export type StarterStyle =

| "Striker"
| "Grappler"
| "BJJ Specialist"
| "Wrestler"
| "Complete Fighter";





export interface StarterFighter {


name:string;

style:StarterStyle;

age:number;

country:string;

gym:string;

stats:Record<StatKey,number>;

wins:number;

losses:number;

amateurFights:number;

professional:boolean;


}







const starterTemplates:

Record<StarterStyle,Record<StatKey,number>> = {



Striker:{


striking:65,

power:65,

wrestling:45,

bjj:40,

cardio:55,

fightIQ:55


},




Grappler:{


striking:45,

power:55,

wrestling:70,

bjj:65,

cardio:60,

fightIQ:60


},




"BJJ Specialist":{


striking:40,

power:45,

wrestling:55,

bjj:75,

cardio:60,

fightIQ:65


},





Wrestler:{


striking:50,

power:60,

wrestling:75,

bjj:55,

cardio:70,

fightIQ:60


},





"Complete Fighter":{


striking:55,

power:55,

wrestling:55,

bjj:55,

cardio:60,

fightIQ:60


}


};







export function createStarterFighter(

name:string,

style:StarterStyle,

country:string="🌎 Unknown"

):StarterFighter{


return {


name,


style,


age:18,


country,


gym:"Local MMA Gym",


stats:starterTemplates[style],


wins:0,


losses:0,


amateurFights:0,


professional:false


};


}








export function trainStat(

fighter:StarterFighter,

stat:StatKey

){



if(fighter.stats[stat] < 99){


fighter.stats[stat]+=1;


}



return fighter;


}








export function gainFightExperience(

fighter:StarterFighter,

win:boolean

){



if(win){


fighter.wins++;

}


else{


fighter.losses++;

}



fighter.amateurFights++;



return fighter;


}








export function turnProfessional(

fighter:StarterFighter

){



if(fighter.amateurFights >= 5){


fighter.professional=true;


}



return fighter;


}
