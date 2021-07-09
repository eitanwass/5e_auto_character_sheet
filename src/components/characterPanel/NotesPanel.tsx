import React, { useState, useContext } from "react";
import { Card, Grid, IconButton, makeStyles, TextField } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import { CharacterContext } from "../../contexts/CharacterContext";


const useStyles = makeStyles({
	textField: {
		width: "95%",
	},
	card: {
		padding: "1vh 1vh",
	}
});

const Note = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Grid container xs={12}>
			<Grid item xs={10}>
				<TextField className={classes.textField} defaultValue={""}/>
			</Grid>
			<Grid item xs={1}>
				<h6 style={{ margin: 0 }}>1.1.1</h6>
			</Grid>
			<Grid item xs={1}>
				<IconButton>
					<Delete fontSize={"small"}/>
				</IconButton>
			</Grid>
		</Grid>
	);
};


const NotesPanel = (): JSX.Element => {
	const classes = useStyles();
	const { notes } = useContext(CharacterContext);

	// TODO: Add note button
	// TODO: Remove note button
	return (
		<>
			Notes
			<Card className={classes.card}>
				<Grid container>
					<Grid xs={1}>
						<IconButton>
							<Add fontSize={"small"}/>
						</IconButton>
					</Grid>
					<Note/>
					<Note/>
					<Note/>
				</Grid>
			</Card>
		</>
	);
};

export default NotesPanel;
