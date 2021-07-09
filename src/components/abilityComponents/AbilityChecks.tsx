import React, { useContext } from "react";
import _ from "lodash";

import { Checkbox, makeStyles } from "@material-ui/core";
import { CheckBoxOutlineBlank, CheckBox } from "@material-ui/icons";

import { CharacterContext, useStateType } from "../../contexts/CharacterContext";
import { abilityChecksProficientType } from "../../types/abilityChecksTypes";
import { abilitySaveThrowsType } from "../../types/abilitySaveThrowsTypes";

interface AbilityCheckTypes {
	label: string;
	abilityCheckName: string;
	abilitiesUseState: useStateType<abilitySaveThrowsType> | useStateType<abilityChecksProficientType>;
	padded?: boolean;
}

interface AbilityChecksTypes {
	abilityName: string;
	checks: string[];
}

const useStyles = makeStyles({
	checkbox: {
		padding: "0 0.5rem 0 0.2rem",
		color: "white",
	},
});


const AbilityCheck = ({
	label,
	abilityCheckName,
	abilitiesUseState,
	padded = false
}: AbilityCheckTypes): JSX.Element => {
	const classes = useStyles();
	const { getAbilityCheckValue } = useContext(CharacterContext);

	const style = padded ? { paddingBottom: "0.5rem" } : undefined;

	return (
		<div style={style}>
			<span>{getAbilityCheckValue(abilityCheckName)}</span>
			<Checkbox classes={{ root: classes.checkbox }}
			          icon={<CheckBoxOutlineBlank fontSize="small"/>}
			          checkedIcon={<CheckBox fontSize="small"/>}
			          name="checkedI"
			          onChange={(e) => abilitiesUseState.setter((prev) => ({
				          ...prev,
				          [_.camelCase(abilityCheckName)]: e.target.checked
			          }))}
			/>
			<label>{label}</label>
		</div>
	);
};


const AbilityChecks = ({ abilityName, checks }: AbilityChecksTypes): JSX.Element => {
	const { abilityChecksProficiency, abilitySaveThrows } = useContext(CharacterContext);

	return (
		<div>
			<AbilityCheck label={"Saving Throws"} padded={true} abilityCheckName={abilityName}
			              abilitiesUseState={abilitySaveThrows}/>
			{
				_.map(checks, (check) =>
					<AbilityCheck label={check} abilityCheckName={check} abilitiesUseState={abilityChecksProficiency}/>
				)
			}
		</div>
	);
};

export default AbilityChecks;
