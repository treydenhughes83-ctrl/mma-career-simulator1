export interface TitleShot {


fighter:string;

division:string;

organisation:string;

qualified:boolean;

reason:string;


}





export function checkTitleShot(

fighter:string,

rank:number,

wins:number,

winStreak:number

):TitleShot {



let qualified=false;

let reason="";





if(rank===1){


qualified=true;


reason="Number 1 contender";


}

else if(rank<=3 && winStreak>=3){


qualified=true;


reason="Top contender with winning streak";


}

else if(rank<=5 && wins>=10){


qualified=true;


reason="Experienced ranked contender";


}

else{


reason="Needs more ranked wins";


}






return {


fighter,


division:"",

organisation:"",


qualified,


reason


};


}








export function earnTitleFight(

shot:TitleShot,

champion:string

){



if(!shot.qualified){


return {


accepted:false,


message:

`${shot.fighter} has not earned a title fight yet`


};


}




return {


accepted:true,


message:

`${shot.fighter} receives a championship fight against ${champion}`


};



}








export function contenderProgress(

currentRank:number,

wins:number

){



return {


currentRank,


wins,


nextGoal:

currentRank<=5

? "Win more ranked fights for title shot"

: "Enter rankings"


};


}
