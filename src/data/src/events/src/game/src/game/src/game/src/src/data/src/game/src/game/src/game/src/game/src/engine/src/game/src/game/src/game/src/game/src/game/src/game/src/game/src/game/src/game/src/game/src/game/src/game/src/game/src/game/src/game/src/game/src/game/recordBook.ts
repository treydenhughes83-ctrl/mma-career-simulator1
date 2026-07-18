export interface FighterRecord {


fighter:string;

wins:number;

losses:number;

winStreak:number;

fastestKO:number;

titleDefences:number;

submissions:number;

knockouts:number;


}





export interface WorldRecord {


name:string;

holder:string;

value:number;


}







export const records:WorldRecord[]=[


{

name:"Most Career Wins",

holder:"",

value:0

},


{

name:"Longest Win Streak",

holder:"",

value:0

},


{

name:"Fastest KO",

holder:"",

value:999

},


{

name:"Most Title Defences",

holder:"",

value:0

},


{

name:"Most Submission Wins",

holder:"",

value:0

},


{

name:"Most Knockout Wins",

holder:"",

value:0

}


];








export function updateRecords(

fighter:FighterRecord

){



if(fighter.wins > records[0].value){


records[0]={


name:"Most Career Wins",


holder:fighter.fighter,


value:fighter.wins


};


}





if(fighter.winStreak > records[1].value){


records[1]={


name:"Longest Win Streak",


holder:fighter.fighter,


value:fighter.winStreak


};


}





if(fighter.fastestKO < records[2].value){


records[2]={


name:"Fastest KO",


holder:fighter.fighter,


value:fighter.fastestKO


};


}





if(fighter.titleDefences > records[3].value){


records[3]={


name:"Most Title Defences",


holder:fighter.fighter,


value:fighter.titleDefences


};


}





if(fighter.submissions > records[4].value){


records[4]={


name:"Most Submission Wins",


holder:fighter.fighter,


value:fighter.submissions


};


}





if(fighter.knockouts > records[5].value){


records[5]={


name:"Most Knockout Wins",


holder:fighter.fighter,


value:fighter.knockouts


};


}




return records;


}








export function getRecords(){


return records;


}
