import { rankings } from "../data/divisions";
import { amateurRankings } from "../data/amateurCompanies";



export interface WorldFighter {


name:string;

organisation:string;

division:string;

rank:number;

champion:boolean;

active:boolean;


}







export interface WorldDatabase {


fighters:WorldFighter[];

companies:string[];

divisions:string[];


}








export const world:WorldDatabase={



fighters:[],


companies:[

"FCC",

"UKFC",

"Amateur Circuit",

"LFA",

"Cage Warriors",

"PFL",

"ONE Championship",

"UFC"

],



divisions:[

"Flyweight",

"Bantamweight",

"Featherweight",

"Lightweight",

"Welterweight",

"Middleweight",

"Light Heavyweight",

"Heavyweight"

]



};









export function loadProfessionalWorld(){



Object.entries(rankings)

.forEach(([company,divisionData])=>{


Object.entries(divisionData)

.forEach(([division,fighters])=>{



fighters?.forEach(

(name, index)=>{



world.fighters.push({


name,


organisation:company,


division,


rank:index+1,


champion:index===0,


active:true


});



}



);



});



});



return world;


}









export function loadAmateurWorld(){



amateurRankings.UKFC

.forEach(weight=>{


weight.rankings.forEach(

(name,index)=>{


world.fighters.push({


name,


organisation:"UKFC",


division:weight.division,


rank:index+1,


champion:false,


active:true


});


});


});





amateurRankings.FCC

.forEach(weight=>{


weight.rankings.forEach(

(name,index)=>{


world.fighters.push({


name,


organisation:"FCC",


division:weight.division,


rank:index+1,


champion:false,


active:true


});


});


});





return world;


}








export function getDivisionFighters(

organisation:string,

division:string

){



return world.fighters.filter(

fighter =>

fighter.organisation===organisation &&

fighter.division===division


);


}








export function findFighter(

name:string

){


return world.fighters.find(

fighter => fighter.name===name

);


}
