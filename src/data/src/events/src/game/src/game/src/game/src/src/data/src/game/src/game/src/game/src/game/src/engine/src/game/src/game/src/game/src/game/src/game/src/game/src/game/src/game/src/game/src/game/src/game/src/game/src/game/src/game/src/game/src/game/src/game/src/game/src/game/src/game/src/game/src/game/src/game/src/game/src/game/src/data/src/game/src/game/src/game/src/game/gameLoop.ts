import { advanceDays } from "./calendarSystem";
import { runWorldWeek } from "./aiCareer";
import { dailyWorldUpdate } from "./newsGenerator";
import { recover } from "./injurySystem";



export interface GameLoop {


day:number;

week:number;

year:number;

}



export function createGameLoop():GameLoop{


return {


day:1,


week:1,


year:new Date().getFullYear()


};


}








export function nextDay(

loop:GameLoop,

career:any

){



loop.day++;



advanceDays(

career.calendar,

1

);



recover(

career.medical,

1

);





if(loop.day%7===0){



nextWeek(

loop,

career

);



}



return loop;


}








export function nextWeek(

loop:GameLoop,

career:any

){



loop.week++;



dailyWorldUpdate([

career.fighter.name

]);





if(loop.week%4===0){


loop.year++;


}



return loop;


}








export function runWorldTurn(

fighters:any[]

){



return runWorldWeek(

fighters

);


}
