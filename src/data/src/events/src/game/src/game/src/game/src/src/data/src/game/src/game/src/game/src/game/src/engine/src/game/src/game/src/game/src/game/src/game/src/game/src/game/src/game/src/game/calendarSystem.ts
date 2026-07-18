export interface CalendarEvent {


date:string;

type:
"Fight" |
"Training" |
"Recovery" |
"Media";

title:string;


}





export interface GameCalendar {


currentDate:string;

events:CalendarEvent[];


}







export function createCalendar()

:GameCalendar{


return {


currentDate:

new Date()

.toISOString()

.split("T")[0],


events:[]


};


}








export function addCalendarEvent(

calendar:GameCalendar,

event:CalendarEvent

){



calendar.events.push(event);



return calendar;


}








export function advanceDays(

calendar:GameCalendar,

days:number

){



const date=

new Date(

calendar.currentDate

);



date.setDate(

date.getDate()+days

);



calendar.currentDate=

date.toISOString()

.split("T")[0];



return calendar;


}








export function scheduleFightDate(

calendar:GameCalendar,

fighter:string,

opponent:string,

date:string

){



return addCalendarEvent(

calendar,


{


date,


type:"Fight",


title:

`${fighter} vs ${opponent}`


}



);


}








export function scheduleTraining(

calendar:GameCalendar,

gym:string,

date:string

){



return addCalendarEvent(

calendar,


{


date,


type:"Training",


title:

`Training camp at ${gym}`


}



);


}








export function upcomingEvents(

calendar:GameCalendar

){



return calendar.events.filter(

event =>

event.date >= calendar.currentDate

);


}
