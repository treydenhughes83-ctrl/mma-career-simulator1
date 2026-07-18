export const amateurOrganisations = [
  "Amateur Circuit",
  "FCC",
  "UKFC",
] as const;

export const professionalOrganisations = [
  "LFA",
  "Cage Warriors",
  "PFL",
  "ONE Championship",
  "UFC",
] as const;

export type AmateurOrganisation =
  (typeof amateurOrganisations)[number];

export type ProfessionalOrganisation =
  (typeof professionalOrganisations)[number];

export type Organisation =
  | AmateurOrganisation
  | ProfessionalOrganisation;


export interface ContractTerms {
  minRep: number;
  purse: number;
  winBonus: number;
  fights: [number, number];
}


export const contractData: Record<string, ContractTerms> = {
  FCC: {
    minRep: 5,
    purse: 500,
    winBonus: 500,
    fights: [2, 3],
  },

  UKFC: {
    minRep: 5,
    purse: 750,
    winBonus: 750,
    fights: [2, 3],
  },

  LFA: {
    minRep: 15,
    purse: 5000,
    winBonus: 3000,
    fights: [3, 5],
  },

  "Cage Warriors": {
    minRep: 25,
    purse: 15000,
    winBonus: 7000,
    fights: [3, 5],
  },

  PFL: {
    minRep: 40,
    purse: 50000,
    winBonus: 20000,
    fights: [3, 6],
  },

  "ONE Championship": {
    minRep: 35,
    purse: 40000,
    winBonus: 15000,
    fights: [4, 6],
  },

  UFC: {
    minRep: 60,
    purse: 100000,
    winBonus: 50000,
    fights: [4, 8],
  },
};
