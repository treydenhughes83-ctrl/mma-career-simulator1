export interface Legacy {


fighter:string;

careerYears:number;

wins:number;

losses:number;

belts:number;

titleDefences:number;

fame:number;

legacyScore:number;

retired:boolean;


}







export interface HallOfFameEntry {


fighter:string;

year:number;

reason:string;


}







export const hallOfFame:HallOfFameEntry[]=[];








export function calculateLegacy(

fighter:Legacy

){



fighter.legacyScore =


fighter.wins * 5 +

fighter.belts * 100 +

fighter.titleDefences * 20 +

fighter.fame * 2 -

fighter.losses * 3;



return fighter.legacyScore;


}








export function retireFighter(

fighter:Legacy

){



fighter.retired=true;



return {


fighter:fighter.fighter,


message:

`${fighter.fighter} has retired from MMA`,


legacyScore:

calculateLegacy(fighter)


};


}








export function eligibleForHallOfFame(

fighter:Legacy

){



return (

fighter.legacyScore>=500 ||

fighter.belts>=2 ||

fighter.titleDefences>=5

);


}








export function addHallOfFame(

fighter:Legacy

){



if(

eligibleForHallOfFame(fighter)

){



hallOfFame.push({


fighter:fighter.fighter,


year:new Date()

.getFullYear(),


reason:

"Outstanding MMA career"


});



return true;


}



return false;


}








export function compareLegacy(

fighterA:Legacy,

fighterB:Legacy

){



return calculateLegacy(fighterB)

-

calculateLegacy(fighterA);


}
