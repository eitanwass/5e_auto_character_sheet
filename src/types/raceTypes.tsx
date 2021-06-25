export enum Size {
	M = "M",
	S = "S",
	V = "V",
}

export enum Ability {
	Cha = "cha",
	Con = "con",
	Dex = "dex",
	Int = "int",
	Str = "str",
	Wis = "wis",
}

export enum Language {
	Common = "common",
	Primordial = "primordial",
	Celestial = "celestial",
	Goblin = "goblin",
	Sylvan = "sylvan",
	Draconic = "draconic",
	Dwarvish = "dwarvish",
	Elvish = "elvish",
	Giant = "giant",
	Gnomish = "gnomish",
	Undercommon = "undercommon",
	Orc = "orc",
	Halfling = "halfling",
	Aquan = "aquan",
	Infernal = "infernal",
	Abyssal = "abyssal",
	Other = "other",
}

export interface SpeedClass {
	walk?: 	number;
	fly?: 	number;
	swim?: 	number;
	climb?: number;
}

export interface AbilityClass {
	str?: 		number;
	dex?: 		number;
	con?: 		number;
	int?: 		number;
	wis?: 		number;
	cha?: 		number;
	choose?:	AbilityChoose
}

export interface LanguageProficiency {
	anyStandard?: number;
	common?:      boolean;
	primordial?:  boolean;
	celestial?:   boolean;
	goblin?:      boolean;
	sylvan?:      boolean;
	draconic?:    boolean;
	dwarvish?:    boolean;
	elvish?:      boolean;
	giant?:       boolean;
	gnomish?:     boolean;
	undercommon?: boolean;
	orc?:         boolean;
	halfling?:    boolean;
	aquan?:       boolean;
	infernal?:    boolean;
	abyssal?:     boolean;
	other?:       boolean;
	choose?:      LanguageProficiencyChoose;
}

export interface AbilityChoose {
	from?: 		Ability[];
	count?: 	number;
	amount?: 	number;
}

export interface LanguageProficiencyChoose {
	from:  Language[];
	count: number;
}

export interface Race {
	name:					string;
	source:                 string;
	page:                   number;
	size?:                  Size[];
	speed?:                 SpeedClass | number | string;
	ability?:               AbilityClass[];
	traitTags?:             string[];
	languageProficiencies?: LanguageProficiency[];
	entries?:               Array<string>;
	// otherSources?:          Source[];
	// soundClip?:             SoundClip;
	// hasFluff?:              boolean;
	// hasFluffImages?:        boolean;
	// darkvision?:            number;
	// resist?:                Array<ResistClass | string>;
	// additionalSpells?:      RaceAdditionalSpell[];
	// heightAndWeight?:       HeightAndWeight | null;
	// subraces?:              Subrace[];
	// skillProficiencies?:    RaceSkillProficiency[];
	// creatureTypes?:         Array<CreatureType | string>;
	// _copy?:                 Copy;
	// lineage?:               Lineage;
	// feats?:                 number;
	// srd?:                   boolean;
	// weaponProficiencies?:   WeaponProficiency[];
	// additionalSources?:     Source[];
	// immune?:                string[];
	// conditionImmune?:       ConditionImmune[];
	// armorProficiencies?:    RaceArmorProficiency[];
	// vulnerable?:            string[];
}

export const defaultRace: Race = {
	name: "none",
	size: [],
	speed: {},
	ability: [{}],
	entries: [""],
	languageProficiencies: [],
	traitTags: [],
	page: 0,
	source: "none",
};
