import { PlayerFighter } from "./playerCareer";


export interface Challenge {


from:string;

to:string;

reason:string;

accepted:boolean;

date:string;

}




export const challenges:Challenge[]=[];




const reasons=[

"wants a ranked fight",

"called you out after a win",

"wants revenge",

"wants your belt",

"wants to prove they are better"

];






export function createChallenge(

from:string,

to:string

):Challenge{


const challenge:Challenge={


from,

to,


reason:

reasons[

Math.floor(

Math.random()*reasons.length

)

],


accepted:false,


date:

new Date()

.toISOString()

.split("T")[0]


};



challenges.push(challenge);


return challenge;


}







export function acceptChallenge(

challenge:Challenge

){


challenge.accepted=true;


return challenge;


}







export function declineChallenge(

challenge:Challenge

){


challenge.accepted=false;


return challenge;


}







export function challengeFighter(

player:PlayerFighter,

opponent:string

){



return createChallenge(

player.name,

opponent

);


}







export function randomOpponentCallout(

player:PlayerFighter,

fighters:string[]

){



const available = fighters.filter(

fighter => fighter !== player.name

);



if(available.length===0){

return null;

}



const opponent =

available[

Math.floor(

Math.random()*available.length

)

];




return createChallenge(

opponent,

player.name

);


}
