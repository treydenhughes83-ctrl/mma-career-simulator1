export interface TournamentFighter {

name:string;

wins:number;

eliminated:boolean;

}




export interface Tournament {


name:string;

organisation:string;

division:string;

fighters:TournamentFighter[];

round:number;

winner?:string;

prize:string;


}







export function createTournament(

name:string,

organisation:string,

division:string,

fighters:string[],

prize:string

):Tournament{


return {


name,


organisation,


division,


fighters:fighters.map(

fighter=>({


name:fighter,


wins:0,


eliminated:false


})

),


round:1,


prize


};


}








export function runTournamentFight(

fighterA:TournamentFighter,

fighterB:TournamentFighter

){



const winner =

Math.random()>0.5

? fighterA

: fighterB;



const loser =

winner===fighterA

? fighterB

: fighterA;



winner.wins++;

loser.eliminated=true;



return {


winner:winner.name,


loser:loser.name


};


}








export function nextTournamentRound(

tournament:Tournament

){



const remaining=

tournament.fighters.filter(

fighter=>!fighter.eliminated

);



tournament.round++;



if(remaining.length===1){



tournament.winner=

remaining[0].name;



}



return tournament;


}








export function awardTournamentWinner(

tournament:Tournament

){



return {


fighter:tournament.winner,


prize:tournament.prize,


message:

`${tournament.winner} wins ${tournament.name}`


};


}
