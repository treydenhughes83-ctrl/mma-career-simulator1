export interface Rivalry {


fighterA:string;

fighterB:string;

heat:number;

fights:number;

active:boolean;

reason:string;


}







export const rivalries:Rivalry[]=[];







const reasons=[

"bad blood after a controversial decision",

"trash talk between fighters",

"unfinished business",

"championship rivalry",

"training camp incident",

"rematch after a close fight"

];








export function createRivalry(

fighterA:string,

fighterB:string

):Rivalry{


const rivalry:Rivalry={


fighterA,


fighterB,


heat:50,


fights:0,


active:true,


reason:

reasons[

Math.floor(

Math.random()*reasons.length

)

]


};



rivalries.push(rivalry);



return rivalry;


}








export function increaseRivalryHeat(

rivalry:Rivalry,

amount:number

){



rivalry.heat+=amount;



if(rivalry.heat>100){

rivalry.heat=100;

}



return rivalry;


}








export function recordRivalryFight(

rivalry:Rivalry

){



rivalry.fights++;



rivalry.heat+=10;



if(rivalry.heat>100){

rivalry.heat=100;

}



return rivalry;


}








export function rematchAvailable(

rivalry:Rivalry

){



return (

rivalry.active &&

rivalry.fights>0 &&

rivalry.heat>=70

);


}








export function endRivalry(

rivalry:Rivalry

){



rivalry.active=false;



rivalry.heat=0;



return rivalry;


}








export function getBiggestRivalries(){



return rivalries.sort(

(a,b)=>

b.heat-a.heat

);


}
