import React, {createContext, useState} from 'react';
import {raceType, defaultRace} from "../types/race-types";

interface AbilityScoresType {
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
}

const defaultAbilityScores = {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
};

interface CharacterContextType {
    race: raceType | null,
    setRace: React.Dispatch<React.SetStateAction<raceType | null>>,
    abilityScores: AbilityScoresType,
    setAbilityScores: React.Dispatch<React.SetStateAction<AbilityScoresType>>,
    expiriencePoints: number, 
    setExpiriencePoints: React.Dispatch<React.SetStateAction<number>>,
}

const CharacterContext = createContext<CharacterContextType>(undefined!);


const CharacterProvider = ({children}) => {
    const [expiriencePoints, setExpiriencePoints] = useState<number>(0);
    const [abilityScores, setAbilityScores] = useState<AbilityScoresType>(defaultAbilityScores);
    const [race, setRace] = useState<raceType | null>(defaultRace);
    const contextValues = {
        race, setRace,
        abilityScores, setAbilityScores,
        expiriencePoints, setExpiriencePoints
    };

    return (<CharacterContext.Provider value={contextValues}>
        {children}
    </CharacterContext.Provider>);
};

export {CharacterContext, CharacterProvider};
