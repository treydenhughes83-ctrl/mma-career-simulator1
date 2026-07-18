import { Division } from "./database";


export type AmateurOrganisation =
  | "Amateur Circuit"
  | "FCC"
  | "UKFC";


export interface AmateurFighter {

  name:string;

  organisation:AmateurOrganisation;

  division:Division;

  rank:number;

  wins:number;

  losses:number;

  reputation:number;

  champion:boolean;

}




export const amateurOrganisations:AmateurOrganisation[] = [

"Amateur Circuit",
"FCC",
"UKFC"

];





// UKFC real rankings supplied + generated divisions

export const UKFCRankings:

Record<Division,string[]> = {


Flyweight:[

"Bruce Riley",

"Bobby Kristensen",

"Umberto Del Prete",

"Kalum Guest",

"Dylan Hall",

"Dan Farrell",

"Jacob Wilson",

"Rocco Bernstein",

"Arona Fieldhouse",

"Morgan Fletcher",

"Conrad Connolly"

],


Bantamweight:[

"Jack Cartwright",

"Liam Gittins",

"Jordan Vucenic",

"Nathaniel Wood",

"Fabian Edwards"

],


Featherweight:[

"Paul Hughes",

"Harry Hardwick",

"James Hendin",

"Conor McKee",

"Dean Trueman"

],


Lightweight:[

"Mason Jones",

"Jai Herbert",

"George Hardwick",

"Kane Mousah",

"Rhys McKee"

],


Welterweight:[

"Adam Proctor",

"Kiefer Crosbie",

"Matt Inman",

"Alex Lohore",

"Charlie Ward"

],


Middleweight:[

"Will Currie",

"Tom Breese",

"Matthew Bonner",

"James Webb",

"John Phillips"

],


"Light Heavyweight":[

"Karl Moore",

"Paul Craig",

"Will Fleury",

"Modestas Bukauskas",

"Luke Trainer"

],


Heavyweight:[

"Stuart Austin",

"Phil De Fries",

"Mark Godbeer",

"James Mulheron",

"Sam Creasey"

]


};






// FCC rankings (placeholder fighters can be replaced when official lists are provided)

export const FCCRankings:

Record<Division,string[]> = {


Flyweight:[

"Connor Hignett",

"Jake Hadley",

"Sam Creasey",

"Luke Shanks",

"Will Currie"

],


Bantamweight:[

"Jack Shore",

"Nathaniel Wood",

"Scott Malone",

"Dean Garnett",

"Brian Bouland"

],


Featherweight:[

"Morgan Charriere",

"Paul Hughes",

"Jordan Vucenic",

"Harry Hardwick",

"Chris Fishgold"

],


Lightweight:[

"Jai Herbert",

"Mason Jones",

"Marc Diakiese",

"George Hardwick",

"Kane Mousah"

],


Welterweight:[

"Liam Gittins",

"Adam Proctor",

"Rhys McKee",

"Kiefer Crosbie",

"Jack Marshman"

],


Middleweight:[

"Tom Breese",

"Fabian Edwards",

"Will Currie",

"James Webb",

"Matthew Bonner"

],


"Light Heavyweight":[

"Paul Craig",

"Karl Moore",

"Modestas Bukauskas",

"Will Fleury",

"Lee Chadwick"

],


Heavyweight:[

"Tom Aspinall",

"Stuart Austin",

"Phil De Fries",

"Mark Godbeer",

"James Mulheron"

]


};






export function amateurWin(

fighter:AmateurFighter

){


fighter.wins++;

fighter.reputation += 5;


if(fighter.rank>1){

fighter.rank -=
Math.random()>0.5 ? 2 : 1;

}


return fighter;


}





export function amateurLoss(

fighter:AmateurFighter

){


fighter.losses++;

fighter.reputation =
Math.max(

0,

fighter.reputation-2

);


fighter.rank +=
Math.random()>0.5 ? 1 : 2;


return fighter;


}





export function winAmateurTitle(

fighter:AmateurFighter

){


fighter.champion=true;

fighter.rank=0;

fighter.reputation += 25;


return fighter;


}





export function turnProfessional(

fighter:AmateurFighter){


return {


name:fighter.name,

organisation:"LFA",

division:fighter.division,

rank:15,

record:

`${fighter.wins}-${fighter.losses}`


};


}
