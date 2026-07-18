export interface BeltHistory {

organisation:string;

division:string;

title:string;

wonDate:string;

lostDate?:string;

}



export interface FightHistory {


opponent:string;

event:string;

date:string;

result:"Win"|"Loss"|"Draw";

method:string;

round:number;

}



export interface FighterResume {


fighterName:string;

wins:number;

losses:number;

draws:number;

belts:BeltHistory[];

fights:FightHistory[];

achievements:string[];

}





export function createResume(

name:string

):FighterResume{


return {


fighterName:name,


wins:0,


losses:0,


draws:0,


belts:[],


fights:[],


achievements:[]


};


}








export function addFightToResume(

resume:FighterResume,

fight:FightHistory

){


resume.fights.push(fight);



if(fight.result==="Win"){

resume.wins++;

}



if(fight.result==="Loss"){

resume.losses++;

}



if(fight.result==="Draw"){

resume.draws++;

}



}








export function winBelt(

resume:FighterResume,

organisation:string,

division:string

){


resume.belts.push({


organisation,


division,


title:"Champion",


wonDate:

new Date()

.toISOString()

.split("T")[0]


});



resume.achievements.push(

`${organisation} ${division} Champion`

);


}








export function loseBelt(

resume:FighterResume,

organisation:string

){



const belt = resume.belts.find(

b=>b.organisation===organisation

);



if(belt){


belt.lostDate=

new Date()

.toISOString()

.split("T")[0];


}



}








export function getRecord(

resume:FighterResume

){


return `${resume.wins}-${resume.losses}-${resume.draws}`;


}
