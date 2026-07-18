export type InjuryType =

| "Cut"
| "Broken Nose"
| "Hand Injury"
| "Leg Injury"
| "Concussion"
| "Shoulder Injury";





export interface Injury {


type:InjuryType;

severity:number;

recoveryDays:number;

active:boolean;

}







export interface MedicalStatus {


injuries:Injury[];

suspended:boolean;

daysRemaining:number;


}







const injuries:InjuryType[]=[

"Cut",

"Broken Nose",

"Hand Injury",

"Leg Injury",

"Concussion",

"Shoulder Injury"

];








function random(min:number,max:number){

return Math.floor(

Math.random()*(max-min+1)

)+min;

}








export function createMedicalStatus()

:MedicalStatus{


return {


injuries:[],


suspended:false,


daysRemaining:0


};


}








export function generateInjury(

chance:number

):Injury|null{



if(Math.random()*100 > chance){

return null;

}



const type =

injuries[

random(

0,

injuries.length-1

)

];



const severity=

random(1,10);



return {


type,


severity,


recoveryDays:

severity*7,


active:true


};


}








export function addInjury(

status:MedicalStatus,

injury:Injury

){



status.injuries.push(injury);


status.suspended=true;


status.daysRemaining += injury.recoveryDays;



return status;


}








export function recover(

status:MedicalStatus,

days:number

){



status.daysRemaining-=days;



if(status.daysRemaining<=0){



status.daysRemaining=0;


status.suspended=false;


status.injuries.forEach(

injury=>injury.active=false

);


}



return status;


}








export function canFight(

status:MedicalStatus

){



return !status.suspended;


}
