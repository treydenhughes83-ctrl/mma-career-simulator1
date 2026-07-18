import { Division } from "./database";


export type ChallengeStatus =
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "Completed";



export interface Challenge {

  id:number;

  challenger:string;

  opponent:string;

  division:Division;

  reason:
  | "Rank Callout"
  | "Title Shot"
  | "Rivalry"
  | "Opportunity";

  status:ChallengeStatus;

  date:string;

}



export const challenges:Challenge[]=[];



function createID(){

return Math.floor(
Math.random()*1000000
);

}




export function challengeFighter(

challenger:string,

opponent:string,

division:Division,

reason:Challenge["reason"]

){


const challenge:Challenge={


id:createID(),

challenger,

opponent,

division,

reason,

status:"Pending",

date:
new Date()
.toISOString()
.split("T")[0]


};


challenges.push(challenge);


return challenge;


}




export function acceptChallenge(

id:number

){


const fight =
challenges.find(
c=>c.id===id
);



if(fight){

fight.status="Accepted";

}



return fight;


}





export function rejectChallenge(

id:number

){


const fight =
challenges.find(
c=>c.id===id
);



if(fight){

fight.status="Rejected";

}



return fight;


}





export function completeChallenge(

id:number,

winner:string

){


const fight =
challenges.find(
c=>c.id===id
);



if(fight){

fight.status="Completed";


}



return {

fight,

winner

};


}





export function generateAIChallenge(

fighter:string,

rankedOpponent:string,

division:Division

){


const reasons:[Challenge["reason"],Challenge["reason"],Challenge["reason"]]=[

"Rank Callout",

"Rivalry",

"Opportunity"

];


return challengeFighter(

fighter,

rankedOpponent,

division,

reasons[
Math.floor(
Math.random()*reasons.length
)
]

);


}





export function getPendingChallenges(

fighter:string

){


return challenges.filter(

c=>

c.opponent===fighter &&

c.status==="Pending"

);


}





export function startRivalry(

fighterA:string,

fighterB:string

){


return {

name:
`${fighterA} vs ${fighterB} rivalry`,

heat:
Math.floor(
Math.random()*100
)+1

};


}
