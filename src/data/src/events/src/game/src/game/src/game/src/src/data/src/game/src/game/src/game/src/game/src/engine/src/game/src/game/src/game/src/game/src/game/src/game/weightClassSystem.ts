import { divisions, Division } from "../data/divisions";



export interface WeightHistory {


division:Division;

date:string;

champion:boolean;


}






export interface FighterWeightData {


currentDivision:Division;

history:WeightHistory[];


}








export function createWeightData(

division:Division

):FighterWeightData{


return {


currentDivision:division,


history:[{


division,


date:new Date()

.toISOString()

.split("T")[0],


champion:false


}]


};


}








export function moveDivision(

fighter:FighterWeightData,

newDivision:Division

){



fighter.currentDivision=newDivision;



fighter.history.push({


division:newDivision,


date:new Date()

.toISOString()

.split("T")[0],


champion:false


});



return fighter;


}








export function moveUpDivision(

fighter:FighterWeightData

){



const index=

divisions.indexOf(

fighter.currentDivision

);



if(index < divisions.length-1){


return moveDivision(

fighter,

divisions[index+1]

);


}



return fighter;


}








export function moveDownDivision(

fighter:FighterWeightData

){



const index=

divisions.indexOf(

fighter.currentDivision

);



if(index > 0){


return moveDivision(

fighter,

divisions[index-1]

);


}



return fighter;


}








export function winDivisionTitle(

fighter:FighterWeightData

){



const current=

fighter.history.find(

h=>

h.division===fighter.currentDivision

);



if(current){

current.champion=true;

}



return fighter;


}








export function getDivisionHistory(

fighter:FighterWeightData

){


return fighter.history;


}
