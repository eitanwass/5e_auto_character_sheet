import React, { useContext } from "react";
import _ from "lodash";
import { Card, Grid, makeStyles } from "@material-ui/core";

import AbilityScore from "./AbilityScore";
import AbilityChecks from "./AbilityChecks";
import { abilitiesProperties } from "../consts/abilitiesConsts";
import { CharacterContext } from "../contexts/CharacterContext";


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

const AbilityScores = (): JSX.Element => {
	const classes = useStyles();
	const { abilityScores } = useContext(CharacterContext);
	return (
		<Card className={classes.card}>
			{
				_.map(abilitiesProperties, (abilityProperty) => {
					const abilityScoreValue: number = abilityScores.getter[abilityProperty.abilityName];
					return (
						<Grid container item xs={12} spacing={2}>
							<Grid item xs={5}>
								<AbilityScore label={abilityProperty.abilityName} value={abilityScoreValue}/>
							</Grid>
							<Grid item xs={7} className={classes.abilityChecks}>
								<AbilityChecks abilityName={abilityProperty.abilityName} checks={abilityProperty.abilityChecks}/>
							</Grid>
						</Grid>
					);
				})
			}
		</Card>
	);
};

export default AbilityScores;
