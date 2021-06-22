import React, {createContext, useState} from 'react';
import _ from 'lodash';
import {raceType, defaultRace} from "../types/raceTypes";
import {abilityScoresType, defaultAbilityScores} from "../types/abilityScoresTypes";
import { abilitySaveThrowsType, defaultAbilitySaveThrows } from '../types/abilitySaveThrowsTypes';
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
    abilitySaveThrows: useStateType<abilitySaveThrowsType>,
    expiriencePoints: useStateType<number>, 
    maxHealthPoints: useStateType<number>, 
    currentDamage: useStateType<number>, 
    temporaryHealthPoints: useStateType<number>, 

    getAbilityCheckValue: (abilityCheckName: string) => number,
}

const CharacterContext = createContext<CharacterContextType>(undefined!);


const getZippedGetterSetter = <T,>(getter: T, setter: reactSetter<T>): {getter: T, setter: reactSetter<T>} => ({getter, setter});

const CharacterProvider = ({children}) => {
    const [race, setRace] = useState<raceType>(defaultRace);
    const [abilityScores, setAbilityScores] = useState<abilityScoresType>(defaultAbilityScores);
    const [abilitySaveThrows, setAbilitySaveThrows] = useState<abilitySaveThrowsType>(defaultAbilitySaveThrows);
    const [abilityChecksProficiency, setAbilityChecksProficiency] = useState<abilityChecksProficientType>(defaultAbilityChecks);
    const [expiriencePoints, setExpiriencePoints] = useState<number>(0);

    const [maxHealthPoints, setMaxHealthPoints] = useState<number>(0);
    const [currentDamage, setCurrentDamage] = useState<number>(0);
    const [temporaryHealthPoints, setTemporaryHealthPoints] = useState<number>(0);

    const getAbilityCheckValue = (abilityCheckName: string): number => {
        const compiledAbilityCheckName = _.camelCase(abilityCheckName);

        let isProficient = false;
        let finalAbilityCheckName = undefined;

        if (_.keys(abilitySaveThrows).includes(compiledAbilityCheckName)) {
            finalAbilityCheckName = compiledAbilityCheckName;
            isProficient = abilitySaveThrows[compiledAbilityCheckName];
        } else {
            finalAbilityCheckName = _.find(abilitiesProperties, 
                (abilityProperties) => _.map(abilityProperties.abilityChecks, _.camelCase).includes(compiledAbilityCheckName))?.abilityName;
            isProficient = _.get(abilityChecksProficiency, compiledAbilityCheckName, false);
        }
            
        if (finalAbilityCheckName === undefined) return -1;

        const abilityScoreValue = abilityScores[finalAbilityCheckName];
        const addition = isProficient ? valueToModifier(abilityScoreValue) + 5 : 0;

        return abilityScoreValue + addition;
    };

    const contextValues = {
        race: getZippedGetterSetter(race, setRace),
        abilityScores: getZippedGetterSetter(abilityScores, setAbilityScores),
        abilityChecksProficiency: getZippedGetterSetter(abilityChecksProficiency, setAbilityChecksProficiency),
        abilitySaveThrows: getZippedGetterSetter(abilitySaveThrows, setAbilitySaveThrows),
        expiriencePoints: getZippedGetterSetter(expiriencePoints, setExpiriencePoints),

        maxHealthPoints: getZippedGetterSetter(maxHealthPoints, setMaxHealthPoints),
        currentDamage: getZippedGetterSetter(currentDamage, setCurrentDamage),
        temporaryHealthPoints: getZippedGetterSetter(temporaryHealthPoints, setTemporaryHealthPoints),

        getAbilityCheckValue,
    };

    return (<CharacterContext.Provider value={contextValues}>
        {children}
    </CharacterContext.Provider>);
};

export {CharacterContext, CharacterProvider};
