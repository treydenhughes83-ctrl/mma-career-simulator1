export interface MarketFighter {


name:string;

age:number;

organisation:string;

division:string;

ranking:number;

reputation:number;

freeAgent:boolean;


}





export const fighterMarket:MarketFighter[]=[];







export function addFreeAgent(

fighter:MarketFighter

){



fighter.freeAgent=true;



fighterMarket.push(fighter);



return fighter;


}








export function signFighter(

fighter:MarketFighter,

organisation:string

){



fighter.organisation=organisation;


fighter.freeAgent=false;



return fighter;


}








export function releaseFighter(

fighter:MarketFighter

){



fighter.freeAgent=true;


fighter.organisation="Free Agent";



return fighter;


}








export function transferFighter(

fighter:MarketFighter,

newOrganisation:string

){



const oldOrganisation=

fighter.organisation;



fighter.organisation=

newOrganisation;



return {


fighter:fighter.name,


from:oldOrganisation,


to:newOrganisation


};


}








export function getFreeAgents(){



return fighterMarket.filter(

fighter=>fighter.freeAgent

);


}








export function searchMarket(

division:string

){



return fighterMarket.filter(

fighter=>

fighter.division===division

);


}








export function aiTransferWindow(){



const available=

getFreeAgents();



if(available.length===0){

return null;

}



const fighter=

available[

Math.floor(

Math.random()*available.length

)

];



const companies=[

"UFC",

"PFL",

"ONE Championship",

"Cage Warriors",

"LFA"

];



return signFighter(

fighter,

companies[

Math.floor(

Math.random()*companies.length

)

]

);


}
