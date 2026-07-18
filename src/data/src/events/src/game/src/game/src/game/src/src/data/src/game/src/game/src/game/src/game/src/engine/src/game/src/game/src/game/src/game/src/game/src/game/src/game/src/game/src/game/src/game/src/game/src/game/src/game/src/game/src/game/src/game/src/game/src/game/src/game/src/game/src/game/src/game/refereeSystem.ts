export type OfficialDecision =

"KO/TKO" |
"Submission" |
"Decision" |
"Doctor Stoppage" |
"Disqualification";





export interface RefereeReport {


referee:string;

warnings:number;

fouls:number;

stoppage:boolean;

reason:string;


}







const referees=[

"Herb Dean",

"Marc Goddard",

"Jason Herzog",

"Dan Miragliotta",

"Keith Peterson"

];








export function assignReferee(){



return referees[

Math.floor(

Math.random()*referees.length

)

];


}








export function createReport(){

return {


referee:assignReferee(),


warnings:0,


fouls:0,


stoppage:false,


reason:""


};


}








export function addWarning(

report:RefereeReport

){



report.warnings++;



return report;


}








export function commitFoul(

report:RefereeReport

){



report.fouls++;



if(report.fouls>=3){


report.stoppage=true;


report.reason="Repeated fouls";


}



return report;


}








export function doctorCheck(

report:RefereeReport,

injured:boolean

){



if(injured){


report.stoppage=true;


report.reason="Doctor stoppage";


}



return report;


}








export function finalDecision(

report:RefereeReport

):OfficialDecision{



if(report.reason==="Doctor stoppage"){


return "Doctor Stoppage";


}



if(report.fouls>=3){


return "Disqualification";


}



return "Decision";


}
