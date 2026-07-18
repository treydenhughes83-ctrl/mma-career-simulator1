import { sponsors, Sponsor } from "../data/divisions";



export interface ActiveSponsor {


name:string;

money:number;

requirement:number;

active:boolean;

}





export function getAvailableSponsors(

fame:number

):Sponsor[]{



return sponsors.filter(

sponsor =>

fame >= sponsor.requirement

);


}








export function signSponsor(

sponsor:Sponsor

):ActiveSponsor {



return {


name:sponsor.name,


money:sponsor.money,


requirement:sponsor.requirement,


active:true


};


}








export function removeSponsor(

sponsor:ActiveSponsor

){



sponsor.active=false;



return sponsor;


}








export function sponsorIncome(

activeSponsors:ActiveSponsor[]

){



return activeSponsors

.filter(

s=>s.active

)

.reduce(

(total,sponsor)=>

total+sponsor.money,

0

);


}








export function sponsorMessage(

sponsor:ActiveSponsor

){



return `${sponsor.name} has signed a sponsorship deal worth $${sponsor.money}`;

}
