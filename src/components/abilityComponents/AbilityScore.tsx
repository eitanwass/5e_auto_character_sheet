import React from "react";
import _ from "lodash";

import { valueToModifier } from "../../utils";

import "./AbilityScore.css";


interface AbilityScoreType {
	label: string;
	value: number;
}

const AbilityScore = ({ label, value }: AbilityScoreType): JSX.Element => {
	const abilityScoreModifier = valueToModifier(value);
	const compiledLabel = _.toUpper(label.substring(0, 3));

	return (
		<div className={"ability-scores"}>
			<div>
				<span className={"ability-name"}>{compiledLabel}</span>
				<span className={"ability-value"}>{value}</span>
			</div>
			<div className={"ability-modifier"}>{`${0 <= abilityScoreModifier ? "+" : ""}${abilityScoreModifier}`}</div>
		</div>
	);
};

export default AbilityScore;