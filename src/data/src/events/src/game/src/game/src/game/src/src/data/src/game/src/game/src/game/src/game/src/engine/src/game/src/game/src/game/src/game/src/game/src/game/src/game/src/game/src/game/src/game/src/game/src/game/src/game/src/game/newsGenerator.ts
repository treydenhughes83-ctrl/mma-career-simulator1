import { addNews } from "./worldNews";



const fightHeadlines=[

"calls out a top contender",

"demands a title shot",

"signs a major fight deal",

"returns to competition",

"moves closer to a championship fight"

];



const rumourHeadlines=[

"is linked with a huge matchup",

"has contract negotiations underway",

"could be making a division move",

"is being watched by major organisations"

];



const retirementHeadlines=[

"announces retirement",

"leaves the sport after a legendary career",

"says the next fight could be the final one"

];







function random(array:string[]){

return array[

Math.floor(

Math.random()*array.length

)

];

}








export function generateCallout(

fighter:string,

target:string

){



return addNews(

"Announcement",

`${fighter} calls out ${target}`,

`${fighter} ${random(fightHeadlines)} against ${target}`

);


}








export function generateRumour(

fighter:string

){



return addNews(

"Announcement",

`${fighter} transfer rumours`,

`${fighter} ${random(rumourHeadlines)}`

);


}








export function generateRetirement(

fighter:string

){



return addNews(

"Retirement",

`${fighter} retirement news`,

`${fighter} ${random(retirementHeadlines)}`

);


}








export function generateFightAnnouncement(

fighterA:string,

fighterB:string,

event:string

){



return addNews(

"Announcement",

`${fighterA} vs ${fighterB} announced`,

`The fight will take place at ${event}`

);


}








export function dailyWorldUpdate(

fighters:string[]

){



const fighter=

fighters[

Math.floor(

Math.random()*fighters.length

)

];



return generateRumour(fighter);


}
