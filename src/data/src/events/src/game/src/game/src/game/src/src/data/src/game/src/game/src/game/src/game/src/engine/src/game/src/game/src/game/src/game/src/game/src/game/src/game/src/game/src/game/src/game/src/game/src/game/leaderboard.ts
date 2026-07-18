export interface LeaderboardFighter {

name:string;

wins:number;

losses:number;

belts:number;

fame:number;

ranking:number;

}



export function calculateScore(

fighter:LeaderboardFighter

){



return (

fighter.wins * 5 +

fighter.belts * 50 +

fighter.fame * 2 -

fighter.losses * 3

);


}







export function createP4PRankings(

fighters:LeaderboardFighter[]

){



return fighters

.sort(

(a,b)=>

calculateScore(b)-calculateScore(a)

)

.map(

(fighter,index)=>({


rank:index+1,


name:fighter.name,


score:calculateScore(fighter)


})

);



}







export function greatestOfAllTime(

fighters:LeaderboardFighter[]

){



const ranked=

createP4PRankings(fighters);



return ranked[0];

}







export function compareCareers(

fighterA:LeaderboardFighter,

fighterB:LeaderboardFighter

){



const scoreA=

calculateScore(fighterA);



const scoreB=

calculateScore(fighterB);





if(scoreA>scoreB){

return fighterA.name;

}



if(scoreB>scoreA){

return fighterB.name;

}



return "Equal";

}
