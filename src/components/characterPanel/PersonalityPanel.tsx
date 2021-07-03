import React from "react";

import { Card, Grid, makeStyles, TextField } from "@material-ui/core";


const useStyles = makeStyles({
	textField: {
		width: "85%",
	},
	card: {
		padding: "1vh 1vh",
	}
});

const PersonalityPanel = (): JSX.Element => {
	const classes = useStyles();
	return (
		<>
			Personality
			<Card className={classes.card}>
				<Grid container>
					<Grid item xs={12}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Alignment"}/>
					</Grid>
					<Grid item xs={12}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Ideals"}/>
					</Grid>
					<Grid item xs={12}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Bonds"}/>
					</Grid>
					<Grid item xs={12}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Flaws"}/>
					</Grid>
				</Grid>
			</Card>
		</>
	);
};

export default PersonalityPanel;
