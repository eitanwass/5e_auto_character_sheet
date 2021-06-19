import _ from 'lodash';

interface abilitiesPropertiesTypes {
    abilityName: string;
    abilityScoreValue: number;
    abilityChecks: string[];
}

const _abilitiesProperties: abilitiesPropertiesTypes[] = [
    {abilityName: "strength", abilityScoreValue: 10, abilityChecks: ["Athletics"]},
    {abilityName: "dexterity", abilityScoreValue: 10, abilityChecks: ["Acrobatics", "Sleight of Hand", "Stealth"]},
    {abilityName: "constitution", abilityScoreValue: 10, abilityChecks: []},
    {abilityName: "intelligence", abilityScoreValue: 10, abilityChecks: ["Arcana", "History", "Investigation", "Nature", "Religion"]},
    {abilityName: "wisdom", abilityScoreValue: 10, abilityChecks: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"]},
    {abilityName: "charisma", abilityScoreValue: 10, abilityChecks: ["Deception", "Intimidation", "Performance", "Persuasion"]}
];

export const abilitiesProperties = (abilityScores: number[]): abilitiesPropertiesTypes[] =>
    _.map(_abilitiesProperties, (o, index) => ({...o, abilityScoreValue: abilityScores[index]}));