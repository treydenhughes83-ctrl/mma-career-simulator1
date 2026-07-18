export type NewsType =
| "Fight Result"
| "Ranking Update"
| "Championship"
| "Injury"
| "Retirement"
| "Announcement";



export interface NewsStory {

type:NewsType;

headline:string;

details:string;

date:string;

}





export const worldNews:NewsStory[]=[];





function today(){

return new Date()

.toISOString()

.split("T")[0];

}








export function addNews(

type:NewsType,

headline:string,

details:string

){



const story:NewsStory={


type,

headline,

details,

date:today()


};



worldNews.unshift(story);


return story;


}









export function announceFightResult(

winner:string,

loser:string,

method:string,

round:number

){


return addNews(

"Fight Result",

`${winner} defeats ${loser}`,

`${winner} wins by ${method} in round ${round}`

);


}








export function announceRankingChange(

fighter:string,

oldRank:number,

newRank:number

){


const direction =

newRank < oldRank

? "moves up"

: "drops down";



return addNews(

"Ranking Update",

`${fighter} ${direction}`,

`${fighter} changes from #${oldRank} to #${newRank}`

);


}








export function announceChampion(

fighter:string,

organisation:string,

division:string

){


return addNews(

"Championship",

`${fighter} becomes champion`,

`${fighter} wins the ${organisation} ${division} title`

);


}








export function announceInjury(

fighter:string,

injury:string

){


return addNews(

"Injury",

`${fighter} injured`,

`${fighter} suffers ${injury} and is removed from competition`

);


}








export function announceRetirement(

fighter:string

){


return addNews(

"Retirement",

`${fighter} retires`,

`${fighter} has officially retired from MMA`

);


}








export function getLatestNews(

amount:number=10

){


return worldNews.slice(0,amount);


}
