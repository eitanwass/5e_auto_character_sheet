import { abilityChecksProficientType, abilitySaveThrowsType, abilityScoresType } from "./abilitiesTypes";

export const defaultAbilitySaveThrows: abilitySaveThrowsType = {
	strength: false,
	dexterity: false,
	constitution: false,
	intelligence: false,
	wisdom: false,
	charisma: false,
};

export const defaultAbilityScores: abilityScoresType = {
	strength: 10,
	dexterity: 10,
	constitution: 10,
	intelligence: 10,
	wisdom: 10,
	charisma: 10,
};

export const defaultAbilityChecks: abilityChecksProficientType = {
	athletics: false,
	acrobatics: false,
	sleightOfHand: false,
	stealth: false,
	arcana: false,
	history: false,
	investigation: false,
	nature: false,
	religion: false,
	animalHandling: false,
	insight: false,
	medicine: false,
	perception: false,
	survival: false,
	deception: false,
	intimidation: false,
	performance: false,
	persuasion: false,
};
