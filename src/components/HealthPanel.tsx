import React, { useContext } from "react";
import { Card, makeStyles } from "@material-ui/core";

import { CharacterContext } from "../contexts/CharacterContext";
import RoundProgress from "./RoundProgress";


const useStyles = makeStyles({
	card: {
		height: "95vh",
		backgroundColor: "#353843",
		margin: "1vh 1vh",
		paddingTop: "3vh",
		fontSize: "0.7rem",
		color: "white",
	},
});

const HealthPanel = (): JSX.Element => {
	const classes = useStyles();
	const { maxHealthPoints, currentDamage, temporaryHealthPoints } = useContext(CharacterContext);

	const currentHealth = maxHealthPoints.getter - currentDamage.getter + temporaryHealthPoints.getter;

	return (
		<Card className={classes.card}>
			<RoundProgress max={maxHealthPoints.getter} current={currentHealth}/>
		</Card>
	);
};

export default HealthPanel;
