export interface FighterMoney {


balance:number;

careerEarnings:number;

expenses:number;

}


export interface FightPayment {


purse:number;

winBonus:number;

sponsorMoney:number;

total:number;


}








export function createMoney(){

return {


balance:0,


careerEarnings:0,


expenses:0


};


}








export function calculateFightPayment(

purse:number,

winBonus:number,

sponsorMoney:number,

won:boolean

):FightPayment{



const payment =

purse +

(won ? winBonus : 0) +

sponsorMoney;



return {


purse,


winBonus:winnerBonus(won,winBonus),


sponsorMoney,


total:payment


};


}








function winnerBonus(

won:boolean,

bonus:number

){


return won ? bonus : 0;


}








export function receivePayment(

money:FighterMoney,

payment:number

){



money.balance += payment;


money.careerEarnings += payment;



return money;


}








export function payExpense(

money:FighterMoney,

cost:number

){



money.balance -= cost;


money.expenses += cost;



return money;


}








export function trainingCost(

weeks:number

){



return weeks * 500;


}








export function medicalCost(

severity:number

){



return severity * 1000;


}








export function canAfford(

money:FighterMoney,

cost:number

){



return money.balance >= cost;


}








export function financialStatus(

money:FighterMoney

){



if(money.balance>=1000000){

return "MMA Millionaire";

}



if(money.balance>=100000){

return "Successful Fighter";

}



if(money.balance<0){

return "Debt";

}



return "Building Career";

}
