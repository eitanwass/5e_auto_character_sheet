import React, { createContext, useState } from "react";
import _ from "lodash";

import { Race, defaultRace } from "../types/raceTypes";
import { abilityScoresType, defaultAbilityScores } from "../types/abilityScoresTypes";
import { abilitySaveThrowsType, defaultAbilitySaveThrows } from "../types/abilitySaveThrowsTypes";
import { abilityChecksProficientType, defaultAbilityChecks } from "../types/abilityChecksTypes";
import { abilitiesProperties, abilitiesPropertiesTypes } from "../consts/abilitiesConsts";

import { valueToModifier } from "../utils";
import { getProficiencyBonus } from "../consts/xpLevelProf";

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
    experiencePoints: useStateType<number>,
    maxHealthPoints: useStateType<number>, 
    currentDamage: useStateType<number>, 
    temporaryHealthPoints: useStateType<number>, 

    getAbilityCheckValue: (abilityCheckName: string) => number,
}

const CharacterContext = createContext<CharacterContextType>(undefined!);


const UseGetterSetter = <T,>(defaultValue: T): {getter: T, setter: reactSetter<T>} => _.zipObject(["getter", "setter"], useState<T>(defaultValue));

const CharacterProvider = ({ children }: {children: JSX.Element}): JSX.Element => {
	const characterStats = {
		experiencePoints: UseGetterSetter<number>(0),
    
		race: UseGetterSetter<Race>(defaultRace),

		abilityScores: UseGetterSetter<abilityScoresType>(defaultAbilityScores),
		abilityChecksProficiency: UseGetterSetter<abilityChecksProficientType>(defaultAbilityChecks),
		abilitySaveThrows: UseGetterSetter<abilitySaveThrowsType>(defaultAbilitySaveThrows),

		maxHealthPoints: UseGetterSetter<number>(40),
		currentDamage: UseGetterSetter<number>(10),
		temporaryHealthPoints: UseGetterSetter<number>(20),
	};

	/* Determines the value of an ability check or saving throw.
	*  If parameter is an ability name (e.g. strength, dexterity, etc), it is evaluated as saving throw value.
	*  Otherwise, it checks if any of the abilities have a check that includes the parameter and evaluates
	*  that one's value. */
	const getAbilityCheckValue = (abilityCheckName: string): number => {
		const compiledAbilityCheckName = _.camelCase(abilityCheckName);

		let isProficient = false;
		let abilityName = undefined;

		if ((isProficient = characterStats.abilitySaveThrows.getter[compiledAbilityCheckName]) !== undefined) {
			// Ability saving throw.
			abilityName = compiledAbilityCheckName;
		}
		else {
			// Ability check.
			abilityName = _.find<abilitiesPropertiesTypes>(abilitiesProperties,
				({ checks }) => _.map(checks, _.camelCase).includes(compiledAbilityCheckName))?.name;
			isProficient = _.get(characterStats.abilityChecksProficiency.getter, compiledAbilityCheckName, false);
		}

		if (abilityName === undefined) return -1;

		const abilityScoreModifier = valueToModifier(characterStats.abilityScores.getter[abilityName]);
		const addition = isProficient ? getProficiencyBonus(characterStats.experiencePoints.getter) : 0;

		return abilityScoreModifier + addition;
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
