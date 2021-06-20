import React, {createContext, useState} from 'react';
import {raceType, defaultRace} from "../types/raceTypes";
import {abilityScoresType, defaultAbilityScores} from "../types/abilityScoresTypes";
import {abilityChecksType, defaultAbilityChecks} from "../types/abilityChecksTypes";

type useStateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

interface CharacterContextType {
    race: useStateType<raceType>,
    abilityScores: useStateType<abilityScoresType>,
    abilityChecks: useStateType<abilityChecksType>,
    expiriencePoints: useStateType<number>, 
}

const CharacterContext = createContext<CharacterContextType>(undefined!);


const CharacterProvider = ({children}) => {
    const contextValues = {
        race: useState<raceType>(defaultRace),
        abilityScores: useState<abilityScoresType>(defaultAbilityScores),
        abilityChecks: useState<abilityChecksType>(defaultAbilityChecks),
        expiriencePoints: useState<number>(0),
    };

    return (<CharacterContext.Provider value={contextValues}>
        {children}
    </CharacterContext.Provider>);
};

export {CharacterContext, CharacterProvider};
