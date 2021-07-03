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

const DetailsPanel = (): JSX.Element => {
	const classes = useStyles();
	return(
		<>
			Details
			<Card className={classes.card}>
				<Grid container>
					<Grid item xs={6}>
						<TextField className={ classes.textField } defaultValue={""} helperText={"Name"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={ classes.textField } defaultValue={""} helperText={"Background"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={ classes.textField } defaultValue={""} helperText={"Class"}/>
					</Grid>
					<Grid item xs={6}>
						<TextField className={ classes.textField } defaultValue={""} helperText={"Race"}/>
					</Grid>
				</Grid>
			</Card>
		</>
	);
};

export default  DetailsPanel;
