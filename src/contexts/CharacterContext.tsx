import React, {createContext, useState} from 'react';
import {raceType, defaultRace} from "../types/race-types";

interface CharacterContextType {
    setRace: React.Dispatch<React.SetStateAction<raceType | null>>
}

const CharacterContext = createContext<CharacterContextType>(undefined!);


const CharacterProvider = ({children}) => {
    const [race, setRace] = useState<raceType | null>(defaultRace);
    const contextValues = {
        setRace
    };

    return (<CharacterContext.Provider value={contextValues}>
        {children}
    </CharacterContext.Provider>);
};

export {CharacterContext, CharacterProvider};
