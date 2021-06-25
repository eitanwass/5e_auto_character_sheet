export interface abilitySaveThrowsType {
    strength: boolean,
    dexterity: boolean,
    constitution: boolean,
    intelligence: boolean,
    wisdom: boolean,
    charisma: boolean,
}

export const defaultAbilitySaveThrows: abilitySaveThrowsType = {
	strength: false,
	dexterity: false,
	constitution: false,
	intelligence: false,
	wisdom: false,
	charisma: false,
};
