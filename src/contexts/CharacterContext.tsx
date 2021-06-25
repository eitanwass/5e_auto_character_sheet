import React, { createContext, useState } from "react";
import _ from "lodash";
import { Race, defaultRace } from "../types/raceTypes";
import { abilityScoresType, defaultAbilityScores } from "../types/abilityScoresTypes";
import { abilitySaveThrowsType, defaultAbilitySaveThrows } from "../types/abilitySaveThrowsTypes";
import { abilityChecksProficientType, defaultAbilityChecks } from "../types/abilityChecksTypes";

import { abilitiesProperties } from "../consts/abilitiesConsts";
import { valueToModifier } from "../utils";

type reactSetter<T> = React.Dispatch<React.SetStateAction<T>>;

type useStateType<T> = {
    getter: T, 
    setter: reactSetter<T>
};

interface CharacterContextType {
    race: useStateType<Race>,
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


const UseGetterSetter = <T,>(defaultValue: T): {getter: T, setter: reactSetter<T>} => _.zipObject(["getter", "setter"], useState<T>(defaultValue));

const CharacterProvider = ({ children }: {children: JSX.Element}): JSX.Element => {
	const characterStats = {
		expiriencePoints: UseGetterSetter<number>(0),
    
		race: UseGetterSetter<Race>(defaultRace),

		abilityScores: UseGetterSetter<abilityScoresType>(defaultAbilityScores),
		abilityChecksProficiency: UseGetterSetter<abilityChecksProficientType>(defaultAbilityChecks),
		abilitySaveThrows: UseGetterSetter<abilitySaveThrowsType>(defaultAbilitySaveThrows),

		maxHealthPoints: UseGetterSetter<number>(40),
		currentDamage: UseGetterSetter<number>(10),
		temporaryHealthPoints: UseGetterSetter<number>(20),
	};

	const getAbilityCheckValue = (abilityCheckName: string): number => {
		const compiledAbilityCheckName = _.camelCase(abilityCheckName);

		let isProficient = false;
		let finalAbilityCheckName = undefined;

		if (_.keys(characterStats.abilitySaveThrows.getter).includes(compiledAbilityCheckName)) {
			finalAbilityCheckName = compiledAbilityCheckName;
			isProficient = characterStats.abilitySaveThrows.getter[compiledAbilityCheckName];
		}
		else {
			finalAbilityCheckName = _.find(abilitiesProperties, 
				(abilityProperties) => _.map(abilityProperties.abilityChecks, _.camelCase).includes(compiledAbilityCheckName))?.abilityName;
			isProficient = _.get(characterStats.abilityChecksProficiency.getter, compiledAbilityCheckName, false);
		}
            
		if (finalAbilityCheckName === undefined) return -1;

		const abilityScoreValue = characterStats.abilityScores.getter[finalAbilityCheckName];
		const addition = isProficient ? valueToModifier(abilityScoreValue) + 5 : 0;

		return abilityScoreValue + addition;
	};

	const contextValues = {
		...characterStats,
		getAbilityCheckValue,
	};

	return (<CharacterContext.Provider value={contextValues}>
		{children}
	</CharacterContext.Provider>);
};

export { CharacterContext, CharacterProvider };
