import { Division, Organisation } from "../data/divisions";


export interface ScheduledFight {

fighterA:string;

fighterB:string;

division:Division;

championship:boolean;

mainEvent:boolean;

}


export interface FightEvent {

name:string;

organisation:Organisation;

date:string;

location:string;

fights:ScheduledFight[];

}





const eventNames = [

"Collision Course",

"Warriors Rising",

"Battle Night",

"Championship Night",

"Fight Festival",

"Clash of Titans",

"Road To Glory"

];



const locations = [

"Manchester Arena",

"Las Vegas UFC Apex",

"London O2 Arena",

"Abu Dhabi Arena",

"Tokyo Dome"

];





export function createFightEvent(

organisation:Organisation,

date:string,

fights:ScheduledFight[]

):FightEvent {



return {


name:

eventNames[

Math.floor(

Math.random()*eventNames.length

)

],


organisation,


date,


location:

locations[

Math.floor(

Math.random()*locations.length

)

],


fights


};


}







export function createFightCard(

organisation:Organisation,

date:string,

division:Division,

fighterA:string,

fighterB:string,

championship=false

){


const fights:ScheduledFight[]=[



{


fighterA,

fighterB,

division,

championship,

mainEvent:true


}


];




return createFightEvent(

organisation,

date,

fights

);


}








export function isTitleFight(

championship:boolean

){

return championship;

}







export function generateEventDate(){

const today=new Date();


today.setDate(

today.getDate()+

Math.floor(Math.random()*30)+1

);


return today

.toISOString()

.split("T")[0];

}
