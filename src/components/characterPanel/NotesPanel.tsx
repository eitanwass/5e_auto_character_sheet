import React from "react";
import { Card, Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
	card: {
		padding: "1vh 1vh",
	}
});

const Note = (): JSX.Element => (
	<Grid item xs={12}>
		Note
	</Grid>
);


const NotesPanel = (): JSX.Element => {
	const classes = useStyles();

	return (
		<>
			Notes
			<Card className={classes.card}>
				<Grid container>
					<Note/>
					<Note/>
					<Note/>
				</Grid>
			</Card>
		</>
	);
};

export default NotesPanel;
