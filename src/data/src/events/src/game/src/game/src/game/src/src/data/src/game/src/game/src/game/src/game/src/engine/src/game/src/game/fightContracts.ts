import { contractData, Organisation } from "../data/divisions";



export interface FighterContract {


organisation:Organisation;

fights:number;

purse:number;

winBonus:number;

active:boolean;

}





export function canSignContract(

organisation:string,

reputation:number

){



const contract =

contractData[organisation];



if(!contract){

return false;

}



return reputation >= contract.minRep;


}








export function createContract(

organisation:Organisation,

reputation:number

):FighterContract | null {



if(!canSignContract(

organisation,

reputation

)){

return null;

}



const data=

contractData[organisation];



const fightAmount =

Math.floor(

Math.random() *

(data.fights[1]-data.fights[0]+1)

)

+ data.fights[0];




return {


organisation,


fights:fightAmount,


purse:data.purse,


winBonus:data.winBonus,


active:true


};


}









export function completeContractFight(

contract:FighterContract,

won:boolean

){



let earnings=

contract.purse;



if(won){


earnings += contract.winBonus;


}



contract.fights--;



if(contract.fights<=0){


contract.active=false;


}



return {


earnings,


remainingFights:contract.fights,


active:contract.active


};


}








export function nextOrganisation(

current:string

){



const path=[

"Amateur Circuit",

"LFA",

"Cage Warriors",

"PFL",

"ONE Championship",

"UFC"

];



const index=

path.indexOf(current);



if(index===-1 || index===path.length-1){

return null;

}



return path[index+1];


}
