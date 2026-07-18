import { createFightCard, generateEventDate } from "./events/fightCards";
import { createChallenge } from "./game/challenges";
import { createResume, addFightToResume } from "./game/resume";
import { announceFightResult, announceRankingChange } from "./game/worldNews";
import { updateRankingAfterFight } from "./engine/rankingSystem";





export interface GameState {

player:string;

resumes:any[];

events:any[];

news:any[];

}





export const game:GameState={


player:"",

resumes:[],

events:[],

news:[]


};







export function startCareer(

fighterName:string

){


game.player=fighterName;



const resume=createResume(

fighterName

);



game.resumes.push(resume);



return resume;


}









export function scheduleFight(

organisation:string,

division:any,

fighterA:string,

fighterB:string,

titleFight=false

){



const event=createFightCard(

organisation as any,

generateEventDate(),

division,

fighterA,

fighterB,

titleFight

);



game.events.push(event);



return event;


}









export function completeFight(

winner:string,

loser:string,

method:string,

round:number

){



const result=announceFightResult(

winner,

loser,

method,

round

);



game.news.unshift(result);



return result;


}








export function createRivalry(

fighterA:string,

fighterB:string

){



return createChallenge(

fighterA,

fighterB

);


}








export function processRankingChange(

winner:string,

loser:string,

rankings:string[],

winnerRank:number,

loserRank:number

){



const changes=updateRankingAfterFight(

winner,

loser,

rankings,

winnerRank,

loserRank

);





changes.forEach(change=>{


announceRankingChange(

change.fighter,

change.oldRank,

change.newRank

);



});




return changes;


}
