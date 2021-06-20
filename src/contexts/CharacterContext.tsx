import React, {createContext, useState} from 'react';
import _ from 'lodash';
import {raceType, defaultRace} from "../types/raceTypes";
import {abilityScoresType, defaultAbilityScores} from "../types/abilityScoresTypes";
import {abilityChecksProficientType, defaultAbilityChecks} from "../types/abilityChecksTypes";

import {abilitiesProperties} from '../consts/abilitiesConsts';
import {valueToModifier} from '../utils';

type reactSetter<T> = React.Dispatch<React.SetStateAction<T>>;

type useStateType<T> = {
    getter: T, 
    setter: reactSetter<T>
};

interface CharacterContextType {
    race: useStateType<raceType>,
    abilityScores: useStateType<abilityScoresType>,
    abilityChecksProficiency: useStateType<abilityChecksProficientType>,
    expiriencePoints: useStateType<number>, 

    getAbilityCheckValue: (abilityCheckName: string) => number,
}

const CharacterContext = createContext<CharacterContextType>(undefined!);


const getZippedGetterSetter = <T,>(getter: T, setter: reactSetter<T>): {getter: T, setter: reactSetter<T>} => ({getter, setter});

const CharacterProvider = ({children}) => {
    const [race, setRace] = useState<raceType>(defaultRace);
    const [abilityScores, setAbilityScores] = useState<abilityScoresType>(defaultAbilityScores);
    const [abilityChecksProficiency, setAbilityChecksProficiency] = useState<abilityChecksProficientType>(defaultAbilityChecks);
    const [expiriencePoints, setExpiriencePoints] = useState<number>(0);

    const getAbilityCheckValue = (abilityCheckName: string): number => {
        const compiledAbilityCheckName = _.camelCase(abilityCheckName);
        const abilityCheckAbilityName = _.find(abilitiesProperties, 
            (abilityProperties) => _.map(abilityProperties.abilityChecks, _.camelCase).includes(compiledAbilityCheckName))?.abilityName;
        if (abilityCheckAbilityName === undefined) return -1;

        const abilityScoreValue = abilityScores[abilityCheckAbilityName];
        console.debug(abilityChecksProficiency);
        const addition = abilityChecksProficiency[compiledAbilityCheckName] ? valueToModifier(abilityScoreValue) + 5 : 0;
        return abilityScoreValue + addition;
    };

    const contextValues = {
        race: getZippedGetterSetter(race, setRace),
        abilityScores: getZippedGetterSetter(abilityScores, setAbilityScores),
        abilityChecksProficiency: getZippedGetterSetter(abilityChecksProficiency, setAbilityChecksProficiency),
        expiriencePoints: getZippedGetterSetter(expiriencePoints, setExpiriencePoints),

        getAbilityCheckValue: getAbilityCheckValue,
    };

    return (<CharacterContext.Provider value={contextValues}>
        {children}
    </CharacterContext.Provider>);
};

export {CharacterContext, CharacterProvider};
