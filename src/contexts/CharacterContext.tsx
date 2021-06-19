import React, {createContext, useState} from 'react';
import {raceType, defaultRace} from "../types/race-types";

interface CharacterContextType {
    race: raceType | null,
    setRace: React.Dispatch<React.SetStateAction<raceType | null>>,
    abilityScores: number[],
    setAbilityScores: React.Dispatch<React.SetStateAction<number[] | null>>,
}

const CharacterContext = createContext<CharacterContextType>(undefined!);


const CharacterProvider = ({children}) => {
    const [abilityScores, setAbilityScores] = useState<number[]>([10, 10, 10, 10, 10, 10]);
    const [race, setRace] = useState<raceType | null>(defaultRace);
    const contextValues = {
        race, setRace,
        abilityScores, setAbilityScores
    };

    return (<CharacterContext.Provider value={contextValues}>
        {children}
    </CharacterContext.Provider>);
};

export {CharacterContext, CharacterProvider};
