import { Fighter } from "../data/fighters";


export type FightResult =
  | "KO"
  | "TKO"
  | "Submission"
  | "Decision";


export interface RoundStats {
  round: number;
  strikesLanded: number;
  takedowns: number;
  submissionAttempts: number;
  knockdowns: number;
}


export interface FightReport {
  winner: string;
  loser: string;
  result: FightResult;
  rounds: RoundStats[];
  championship: boolean;
}


function random(min: number, max: number) {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
}


function getFightScore(fighter: Fighter) {

  return (
    fighter.stats.striking +
    fighter.stats.wrestling +
    fighter.stats.bjj +
    fighter.stats.cardio +
    fighter.stats.fightIQ
  );
}


function simulateRound(
  fighterA: Fighter,
  fighterB: Fighter,
  round: number
): RoundStats {


  const aScore = getFightScore(fighterA);
  const bScore = getFightScore(fighterB);


  return {
    round,

    strikesLanded:
      random(5, 35) +
      Math.floor(aScore / 20),

    takedowns:
      random(0, 5) +
      Math.floor(
        fighterA.stats.wrestling / 30
      ),

    submissionAttempts:
      random(0, 3) +
      Math.floor(
        fighterA.stats.bjj / 40
      ),

    knockdowns:
      fighterA.stats.power >
      fighterB.stats.power
        ? random(0, 2)
        : random(0, 1),
  };
}



export function simulateFight(
  fighterA: Fighter,
  fighterB: Fighter,
  championship = false
): FightReport {


  const totalRounds = championship ? 5 : 3;


  const rounds: RoundStats[] = [];


  for (let i = 1; i <= totalRounds; i++) {

    rounds.push(
      simulateRound(
        fighterA,
        fighterB,
        i
      )
    );

  }


  const aPower =
    getFightScore(fighterA) +
    random(0, 50);

  const bPower =
    getFightScore(fighterB) +
    random(0, 50);



  let winner = fighterA;
  let loser = fighterB;


  if (bPower > aPower) {
    winner = fighterB;
    loser = fighterA;
  }



  let result: FightResult = "Decision";


  const finishChance = random(1,100);


  if (
    winner.stats.power > 90 &&
    finishChance > 80
  ) {
    result = "KO";

  } else if (
    winner.stats.bjj > 90 &&
    finishChance > 85
  ) {
    result = "Submission";

  } else if (
    finishChance > 90
  ) {
    result = "TKO";
  }



  winner.wins++;
  loser.losses++;



  return {
    winner: winner.name,
    loser: loser.name,
    result,
    rounds,
    championship,
  };

}
