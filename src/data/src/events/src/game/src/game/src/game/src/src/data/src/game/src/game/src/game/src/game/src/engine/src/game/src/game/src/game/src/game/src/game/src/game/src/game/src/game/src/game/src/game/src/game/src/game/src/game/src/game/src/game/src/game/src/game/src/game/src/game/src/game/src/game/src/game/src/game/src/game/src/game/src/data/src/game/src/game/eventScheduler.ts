import { runAIFight } from "./aiCareer";
import { generateFightAnnouncement } from "./newsGenerator";



export interface FightCard {


eventName:string;

organisation:string;

date:string;

fights:any[];

completed:boolean;


}







export const events:FightCard[]=[];








const eventNames=[

"Fight Championship Night",

"UKFC Fight Night",

"FCC Main Event",

"World Combat Series",

"International MMA League"

];








function random(array:string[]){

return array[

Math.floor(

Math.random()*array.length

)

];

}








export function createEvent(

organisation:string,

date:string

):FightCard{


const event:FightCard={


eventName:

random(eventNames),


organisation,


date,


fights:[],


completed:false


};



events.push(event);



return event;


}








export function addFightToCard(

event:FightCard,

fighterA:any,

fighterB:any

){



event.fights.push({


fighterA,


fighterB,


result:null


});



generateFightAnnouncement(

fighterA.name,

fighterB.name,

event.eventName

);



return event;


}








export function runEvent(

event:FightCard

){



event.fights.forEach(

fight=>{


fight.result=

runAIFight(

fight.fighterA,

fight.fighterB

);



}

);



event.completed=true;



return event;


}








export function upcomingEvents(){



return events.filter(

event=>

!event.completed

);


}
