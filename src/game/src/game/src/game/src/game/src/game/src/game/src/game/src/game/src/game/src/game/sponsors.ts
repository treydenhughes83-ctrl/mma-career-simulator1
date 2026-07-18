import { sponsors, Sponsor } from "./database";


export interface ActiveSponsor {

name:string;

money:number;

signedDate:string;

}



export function getAvailableSponsors(

reputation:number

):Sponsor[]{


return sponsors.filter(

sponsor =>

reputation >= sponsor.requirement

);


}




export function signSponsor(

name:string,

reputation:number

):ActiveSponsor|null{


const sponsor = sponsors.find(

s => s.name===name

);



if(!sponsor){

return null;

}



if(reputation < sponsor.requirement){

return null;

}




return {

name:sponsor.name,

money:sponsor.money,

signedDate:

new Date()
.toISOString()

};



}







export function calculateSponsorIncome(

activeSponsors:ActiveSponsor[]

){


let total=0;



activeSponsors.forEach(

sponsor=>{

total += sponsor.money;

}

);



return total;


}







export function sponsorGrowth(

reputation:number

){


const unlocked =
getAvailableSponsors(reputation);



return unlocked.sort(

(a,b)=>

b.money-a.money

);

}
