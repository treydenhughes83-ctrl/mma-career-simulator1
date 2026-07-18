export type Movement = "up" | "down" | "same";


export interface RankingChange {
  oldRank: number;
  newRank: number;
  movement: Movement;
  arrow: string;
}



export function updateRankingAfterFight(
  currentRank: number,
  opponentRank: number,
  won: boolean
): RankingChange {


  let newRank = currentRank;


  if (won) {

    // You only climb 1–2 places
    const jump = Math.floor(
      Math.random() * 2
    ) + 1;

    newRank = Math.max(
      1,
      currentRank - jump
    );


    return {
      oldRank: currentRank,
      newRank,
      movement:
        newRank < currentRank
          ? "up"
          : "same",
      arrow:
        newRank < currentRank
          ? "🟢⬆️"
          : "➡️",
    };

  } else {


    // Loss drops 1–2 places
    const drop = Math.floor(
      Math.random() * 2
    ) + 1;


    newRank =
      currentRank + drop;


    return {
      oldRank: currentRank,
      newRank,
      movement:
        "down",
      arrow:
        "🔴⬇️",
    };

  }

}



export function canChallenge(
  fighterRank: number,
  opponentRank: number
): boolean {


  const difference =
    Math.abs(
      fighterRank - opponentRank
    );


  // Fighters cannot call out someone
  // too far away in rankings
  return difference <= 5;

}
