export interface Achievement {


name:string;

description:string;

unlocked:boolean;

date?:string;


}





export const achievements:Achievement[]=[


{

name:"First Blood",

description:"Win your first MMA fight",

unlocked:false

},


{

name:"Rising Prospect",

description:"Win 5 fights in a row",

unlocked:false

},


{

name:"Champion",

description:"Win your first championship belt",

unlocked:false

},


{

name:"Two Division Champion",

description:"Win titles in two weight divisions",

unlocked:false

},


{

name:"UFC Fighter",

description:"Earn a UFC contract",

unlocked:false

},


{

name:"Legend",

description:"Reach superstar status",

unlocked:false

},


{

name:"Hall Of Fame",

description:"Become one of the greatest fighters ever",

unlocked:false

}


];








export function unlockAchievement(

name:string

){



const achievement=

achievements.find(

a=>a.name===name

);



if(achievement && !achievement.unlocked){



achievement.unlocked=true;


achievement.date=

new Date()

.toISOString()

.split("T")[0];


}



return achievement;


}








export function checkAchievements(

fighter:any

){



const unlocked:Achievement[]=[];



if(fighter.wins>=1){


unlocked.push(

unlockAchievement("First Blood")!

);


}



if(fighter.wins>=5){


unlocked.push(

unlockAchievement("Rising Prospect")!

);


}



if(fighter.belts && fighter.belts.length>0){


unlocked.push(

unlockAchievement("Champion")!

);


}



if(fighter.divisionsWon>=2){


unlocked.push(

unlockAchievement("Two Division Champion")!

);


}



if(fighter.organisation==="UFC"){


unlocked.push(

unlockAchievement("UFC Fighter")!

);


}



if(fighter.fame>=90){


unlocked.push(

unlockAchievement("Legend")!

);


}



return unlocked;

}
