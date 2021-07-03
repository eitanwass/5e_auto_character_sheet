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

const AppearancePanel = (): JSX.Element => {
	const classes = useStyles();
	return (
		<>
			Appearance
			<Card className={classes.card}>
				<Grid container>
					<Grid item xs={6}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Gender"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Age"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Height"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Weight"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Eyes"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Hair"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Skin"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={classes.textField} defaultValue={""} helperText={"Clothing"}/>
					</Grid>
				</Grid>
			</Card>
		</>
	);
};

export default AppearancePanel;
