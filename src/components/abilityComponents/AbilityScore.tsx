import React, { MouseEventHandler, useContext } from "react";
import _ from "lodash";

import "./AbilityScore.css";
import { IconButton, SvgIconTypeMap } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import { valueToModifier } from "../../utils";
import { CharacterContext } from "../../contexts/CharacterContext";


interface AbilityScoreType {
	label: string;
	value: number;
	isEditable: boolean;
}

const ModifyButton = ({
	action,
	Icon
}: { action: MouseEventHandler<HTMLButtonElement>, Icon: OverridableComponent<SvgIconTypeMap> }): JSX.Element =>
	<IconButton style={{ padding: "0 0.1rem" }} onClick={action}><Icon color={"primary"}/></IconButton>;


const AbilityScore = ({ label, value, isEditable }: AbilityScoreType): JSX.Element => {
	const { abilityScores } = useContext(CharacterContext);
	const abilityScoreModifier = valueToModifier(value);
	const compiledLabel = _.toUpper(label.substring(0, 3));

	const modifyAction = (amount: number): void =>
		abilityScores.setter({ ...abilityScores.getter, [label]: abilityScores.getter[label] + amount });

	return (
		<div className={"ability-scores"}>
			<div>
				<span className={"ability-name"}>{compiledLabel}</span>
				<span className={"ability-value"}>{value}</span>
			</div>
			<div className={"ability-modifier"}>
				{isEditable && <ModifyButton action={() => modifyAction(1)} Icon={KeyboardArrowUp}/>}
				{`${0 <= abilityScoreModifier ? "+" : ""}${abilityScoreModifier}`}
				{isEditable && <ModifyButton action={() => modifyAction(-1)} Icon={KeyboardArrowDown}/>}
			</div>
		</div>
	);
};

export default AbilityScore;