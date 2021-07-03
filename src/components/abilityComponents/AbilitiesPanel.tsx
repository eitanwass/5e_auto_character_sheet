import React, { useContext, useState } from "react";
import _ from "lodash";

import { Card, Grid, IconButton, makeStyles } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import AbilityScore from "./AbilityScore";
import AbilityChecks from "./AbilityChecks";
import { abilitiesProperties } from "../../consts/abilitiesConsts";
import { CharacterContext } from "../../contexts/CharacterContext";

import "./AbilitiesPanel.sass";


const useStyles = makeStyles({
	card: {
		height: "95vh",
		backgroundColor: "#353843",
		margin: "1vh 1vh",
		paddingTop: "3vh",
		fontSize: "0.7rem",
		color: "white",
	},
	abilityChecks: {
		paddingLeft: "0",
		textAlign: "left",
	}
});

const AbilitiesPanel = (): JSX.Element => {
	const classes = useStyles();
	const { abilityScores } = useContext(CharacterContext);
	const [isEditable, setEditable] = useState<boolean>(false);
	const toggleEditable = () => setEditable(!isEditable);

	return (
		<>
			<IconButton className={"toggle-edit-button"} onClick={toggleEditable}>
				<Edit color={isEditable ? "action" : "primary"} fontSize={"small"}/>
			</IconButton>
			<Card className={classes.card}>
				{
					_.map(abilitiesProperties, ({ name, checks }) =>
						<Grid container xs={12} spacing={2}>
							<Grid item xs={5}>
								<AbilityScore label={name} value={abilityScores.getter[name]} isEditable={isEditable} />
							</Grid>
							<Grid item xs={7} className={classes.abilityChecks}>
								<AbilityChecks abilityName={name} checks={checks}/>
							</Grid>
						</Grid>
					)
				}
			</Card>
		</>
	);
};

export default AbilitiesPanel;
