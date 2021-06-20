export interface raceType {
    name: string;
    size: string[];
    speed: object;
    ability: object[];
    entries: object[];
    languageProficiencies: [];
    traitTags: [];
    page: number;
    source: string;
}

export const defaultRace: raceType = {
    name: "none",
    size: [],
    speed: {},
    ability: [{}],
    entries: [{}],
    languageProficiencies: [],
    traitTags: [],
    page: 0,
    source: "none",
};
