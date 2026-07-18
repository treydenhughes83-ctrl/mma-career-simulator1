export interface FightCamp {


weeks:number;

fighter:string;

opponent:string;

strategy:string;

weightCut:number;

fitness:number;

ready:boolean;


}







export interface GamePlan {


striking:number;

wrestling:number;

submission:number;

defence:number;


}







export function createFightCamp(

fighter:string,

opponent:string

):FightCamp{


return {


weeks:8,


fighter,


opponent,


strategy:"Balanced",


weightCut:0,


fitness:50,


ready:false


};


}








export function trainCampWeek(

camp:FightCamp

){



if(camp.weeks>0){


camp.weeks--;


camp.fitness+=5;


}



if(camp.fitness>100){

camp.fitness=100;

}



return camp;


}








export function chooseStrategy(

camp:FightCamp,

strategy:string

){



camp.strategy=strategy;



return camp;


}








export function cutWeight(

camp:FightCamp,

amount:number

){



camp.weightCut+=amount;



if(camp.weightCut>100){

camp.weightCut=100;

}



return camp;


}








export function scoutOpponent(

opponent:any

){



return {


strength:

opponent.stats.power,


striking:

opponent.stats.striking,


grappling:

opponent.stats.wrestling,


submission:

opponent.stats.bjj


};


}








export function createGamePlan(

style:string

):GamePlan{



if(style==="Striker"){


return {


striking:80,


wrestling:40,


submission:30,


defence:60


};


}





if(style==="Grappler"){


return {


striking:40,


wrestling:85,


submission:75,


defence:60


};


}






return {


striking:60,


wrestling:60,


submission:60,


defence:60


};


}








export function readyForFight(

camp:FightCamp

){



camp.ready =

camp.weeks===0 &&

camp.fitness>=70;



return camp.ready;


}
