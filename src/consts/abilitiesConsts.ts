interface abilitiesPropertiesTypes {
    abilityName: string;
    abilityChecks: string[];
}

export const abilitiesProperties: abilitiesPropertiesTypes[] = [
	{ abilityName: "strength", abilityChecks: ["Athletics"] },
	{ abilityName: "dexterity", abilityChecks: ["Acrobatics", "Sleight of Hand", "Stealth"] },
	{ abilityName: "constitution", abilityChecks: [] },
	{ abilityName: "intelligence", abilityChecks: [
		"Arcana", "History", "Investigation", "Nature", "Religion"
	] },
	{ abilityName: "wisdom", abilityChecks: [
		"Animal Handling", "Insight", "Medicine", "Perception", "Survival"
	] },
	{ abilityName: "charisma", abilityChecks: [
		"Deception", "Intimidation", "Performance", "Persuasion"
	] }
];