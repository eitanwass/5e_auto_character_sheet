export interface abilitiesPropertiesTypes {
    name: string;
    checks: string[];
}

export const abilitiesProperties: abilitiesPropertiesTypes[] = [
	{ name: "strength", checks: ["Athletics"] },
	{ name: "dexterity", checks: ["Acrobatics", "Sleight of Hand", "Stealth"] },
	{ name: "constitution", checks: [] },
	{ name: "intelligence", checks: [
		"Arcana", "History", "Investigation", "Nature", "Religion"
	] },
	{ name: "wisdom", checks: [
		"Animal Handling", "Insight", "Medicine", "Perception", "Survival"
	] },
	{ name: "charisma", checks: [
		"Deception", "Intimidation", "Performance", "Persuasion"
	] }
];