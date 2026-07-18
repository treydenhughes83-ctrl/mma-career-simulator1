import { FighterProfile, StatKey } from "./database";


export interface FightResult {

  winner: string;

  loser: string;

  method:
    | "KO"
    | "TKO"
    | "Submission"
    | "Decision";

  round: number;

  time: string;

  knockdowns: {
    winner: number;
    loser: number;
  };

  submissions: {
    winner: number;
    loser: number;
  };

  scorecards?: string[];

}




export interface FightStats {

  fighter: string;

  strikes: number;

  takedowns: number;

  submissionAttempts: number;

  knockdowns: number;

  controlTime: number;

  points: number;

}




function random(min:number,max:number){

  return Math.floor(
    Math.random() *
    (max-min+1)
  ) + min;

}




function calculateFighterStrength(
  fighter: FighterProfile
){

  const stats =
    fighter.stats;


  return (

    stats.striking * 0.25 +

    stats.power * 0.15 +

    stats.wrestling * 0.20 +

    stats.bjj * 0.15 +

    stats.cardio * 0.15 +

    stats.fightIQ * 0.10

  );

}




function simulateRound(
  fighterA:FighterProfile,
  fighterB:FighterProfile
){


  const a =
    calculateFighterStrength(
      fighterA
    );


  const b =
    calculateFighterStrength(
      fighterB
    );


  const statsA:FightStats = {

    fighter:fighterA.name,

    strikes:random(15,50),

    takedowns:random(0,5),

    submissionAttempts:random(0,3),

    knockdowns:0,

    controlTime:random(20,180),

    points:0

  };


  const statsB:FightStats = {

    fighter:fighterB.name,

    strikes:random(15,50),

    takedowns:random(0,5),

    submissionAttempts:random(0,3),

    knockdowns:0,

    controlTime:random(20,180),

    points:0

  };



  statsA.points =
    a +
    statsA.strikes +
    statsA.takedowns * 5;


  statsB.points =
    b +
    statsB.strikes +
    statsB.takedowns * 5;




  if(
    fighterA.stats.power > 95 &&
    Math.random() > 0.7
  ){

    statsA.knockdowns++;

  }



  if(
    fighterB.stats.power > 95 &&
    Math.random() > 0.7
  ){

    statsB.knockdowns++;

  }




  return {

    statsA,

    statsB

  };

}





export function simulateFight(

  fighterA:FighterProfile,

  fighterB:FighterProfile,

  championship:boolean = false

):FightResult {



  const rounds =
    championship ? 5 : 3;



  let scoreA = 0;

  let scoreB = 0;


  let totalKnockA = 0;

  let totalKnockB = 0;


  let totalSubsA = 0;

  let totalSubsB = 0;



  for(
    let round=1;
    round<=rounds;
    round++
  ){


    const result =
      simulateRound(
        fighterA,
        fighterB
      );



    scoreA +=
      result.statsA.points;


    scoreB +=
      result.statsB.points;



    totalKnockA +=
      result.statsA.knockdowns;


    totalKnockB +=
      result.statsB.knockdowns;



    totalSubsA +=
      result.statsA.submissionAttempts;


    totalSubsB +=
      result.statsB.submissionAttempts;




    if(
      result.statsA.knockdowns >=2
    ){

      return {

        winner:fighterA.name,

        loser:fighterB.name,

        method:"KO",

        round,

        time:
          `${random(1,4)}:${random(10,59)}`,

        knockdowns:{
          winner:totalKnockA,
          loser:totalKnockB
        },

        submissions:{
          winner:totalSubsA,
          loser:totalSubsB
        }

      };

    }



    if(
      result.statsB.knockdowns >=2
    ){

      return {

        winner:fighterB.name,

        loser:fighterA.name,

        method:"KO",

        round,

        time:
          `${random(1,4)}:${random(10,59)}`,

        knockdowns:{
          winner:totalKnockB,
          loser:totalKnockA
        },

        submissions:{
          winner:totalSubsB,
          loser:totalSubsA
        }

      };

    }


  }




  if(
    scoreA > scoreB
  ){

    return {

      winner:fighterA.name,

      loser:fighterB.name,

      method:"Decision",

      round:rounds,

      time:"15:00",

      knockdowns:{
        winner:totalKnockA,
        loser:totalKnockB
      },

      submissions:{
        winner:totalSubsA,
        loser:totalSubsB
      },

      scorecards:[
        "29-28",
        "30-27",
        "29-28"
      ]

    };

  }




  return {

    winner:fighterB.name,

    loser:fighterA.name,

    method:"Decision",

    round:rounds,

    time:"15:00",

    knockdowns:{
      winner:totalKnockB,
      loser:totalKnockA
    },

    submissions:{
      winner:totalSubsB,
      loser:totalSubsA
    },

    scorecards:[
      "29-28",
      "30-27",
      "29-28"
    ]

  };


        }
