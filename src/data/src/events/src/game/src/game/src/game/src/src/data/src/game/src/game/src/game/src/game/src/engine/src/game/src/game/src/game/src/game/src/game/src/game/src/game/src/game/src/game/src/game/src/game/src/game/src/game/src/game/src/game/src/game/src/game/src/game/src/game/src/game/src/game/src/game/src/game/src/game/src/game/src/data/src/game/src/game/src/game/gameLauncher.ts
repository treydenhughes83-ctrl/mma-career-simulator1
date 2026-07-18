import { createStarterFighter } from "./starterCreator";
import { createProgression } from "./playerProgression";
import { createResume } from "./resume";
import { createMoney } from "./economySystem";
import { createFame } from "./fameSystem";
import { createCalendar } from "./calendarSystem";
import { createMedicalStatus } from "./injurySystem";
import { createWeightData } from "./weightClassSystem";
import { createSeason } from "./seasonSystem";



export interface PlayerCareer {


fighter:any;

progression:any;

resume:any;

money:any;

fame:any;

calendar:any;

medical:any;

weight:any;

season:any;


}







export function startGame(

name:string,

style:any,

division:any

):PlayerCareer{



const fighter=

createStarterFighter(

name,

style

);



return {


fighter,


progression:

createProgression(),



resume:

createResume(name),



money:

createMoney(),



fame:

createFame(),



calendar:

createCalendar(),



medical:

createMedicalStatus(),



weight:

createWeightData(division),



season:

createSeason(

new Date()

.getFullYear()

)


};


}








export function getCareerSummary(

career:PlayerCareer

){



return {


name:

career.fighter.name,


record:

`${career.fighter.wins}-${career.fighter.losses}`,



organisation:

career.progression.organisation,


money:

career.money.balance,


fame:

career.fame.fame,


division:

career.weight.currentDivision


};


}
