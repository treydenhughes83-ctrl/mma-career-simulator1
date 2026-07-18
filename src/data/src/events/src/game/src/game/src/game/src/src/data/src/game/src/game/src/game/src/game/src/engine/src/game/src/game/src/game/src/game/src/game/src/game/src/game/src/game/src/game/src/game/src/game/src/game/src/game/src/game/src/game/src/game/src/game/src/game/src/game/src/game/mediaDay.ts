export interface MediaEvent {


type:
"Press Conference" |
"Face Off" |
"Interview" |
"Social Media";


fighter:string;

opponent?:string;

hypeGain:number;

date:string;


}







export const mediaEvents:MediaEvent[]=[];







function today(){

return new Date()

.toISOString()

.split("T")[0];

}








function addMediaEvent(

event:MediaEvent

){



mediaEvents.push(event);



return event;


}








export function pressConference(

fighter:string,

opponent:string

){



return addMediaEvent({


type:"Press Conference",


fighter,


opponent,


hypeGain:10,


date:today()


});


}








export function faceOff(

fighter:string,

opponent:string

){



return addMediaEvent({


type:"Face Off",


fighter,


opponent,


hypeGain:15,


date:today()


});


}








export function interview(

fighter:string

){



return addMediaEvent({


type:"Interview",


fighter,


hypeGain:5,


date:today()


});


}








export function socialMediaPost(

fighter:string

){



return addMediaEvent({


type:"Social Media",


fighter,


hypeGain:3,


date:today()


});


}








export function calculateEventHype(

events:MediaEvent[]

){



return events.reduce(

(total,event)=>

total+event.hypeGain,

0

);


}
