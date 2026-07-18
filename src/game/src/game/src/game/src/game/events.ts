import { Organisation, Division } from "./database";


export interface Event {

  name:string;

  organisation:Organisation;

  date:string;

  location:string;

  fights:FightCard[];

}



export interface FightCard {

  mainEvent:boolean;

  fighterA:string;

  fighterB:string;

  division:Division;

  championship:boolean;

  result?:string;

}



export interface WorldNews {

  headline:string;

  date:string;

  type:
  | "Fight"
  | "Ranking"
  | "Contract"
  | "Injury"
  | "Transfer";

}



export const locations = [

"Manchester, England",
"Las Vegas, USA",
"Abu Dhabi, UAE",
"Tokyo, Japan",
"London, England",
"São Paulo, Brazil",
"Paris, France"

];



export const eventNames = [

"Collision Course",
"Warriors Rising",
"Battle Night",
"Champions Clash",
"Fight Island",
"Road To Glory",
"Elite Combat Series",
"Ultimate Showdown"

];



export const worldNews:WorldNews[]=[];



function randomItem<T>(array:T[]){

return array[
Math.floor(
Math.random()*array.length
)
];

}



export function createEvent(

organisation:Organisation,

date:string,

fights:FightCard[]

):Event {


return {

name:
randomItem(eventNames),

organisation,

date,

location:
randomItem(locations),

fights

};


}




export function generateFightCard(

fighters:string[],

division:Division

):FightCard[] {


const card:FightCard[]=[];


for(
let i=0;
i<fighters.length-1;
i+=2
){


card.push({

mainEvent:
i===fighters.length-2,

fighterA:
fighters[i],

fighterB:
fighters[i+1],

division,

championship:
i===fighters.length-2

});


}



return card;

}





export function addWorldNews(

headline:string,

type:WorldNews["type"]

){


worldNews.unshift({

headline,

type,

date:
new Date()
.toISOString()
.split("T")[0]

});


}





export function generateFightNews(

winner:string,

loser:string,

organisation:string

){


const headlines=[

`${winner} defeats ${loser} in a huge ${organisation} fight`,

`${winner} rises after beating ${loser}`,

`${organisation} rankings shaken after major upset`,

`${loser} looks to rebuild after defeat`

];


addWorldNews(

randomItem(headlines),

"Fight"

);


}





export function announceContract(

fighter:string,

organisation:string

){


addWorldNews(

`${fighter} signs a new contract with ${organisation}`,

"Contract"

);


}





export function announceInjury(

fighter:string

){


addWorldNews(

`${fighter} has suffered an injury and will be removed from the next event`,

"Injury"

);


}





export function generateWeeklyWorldNews(){


const stories=[

"New contender breaks into the rankings",

"Champion calls out next challenger",

"Rising amateur prospect turns professional",

"Major gym announces new signing",

"Upset victory changes the division"

];


addWorldNews(

randomItem(stories),

"Ranking"

);


}
