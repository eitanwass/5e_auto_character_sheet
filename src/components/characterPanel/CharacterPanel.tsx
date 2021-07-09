import React from "react";

import { Card, Grid, } from "@material-ui/core";

import DetailsPanel from "./DetailsPanel";
import PersonalityPanel from "./PersonalityPanel";
import AppearancePanel from "./AppearancePanel";
import NotesPanel from "./NotesPanel";


const CharacterPanel = (): JSX.Element => (
	<Grid container spacing={2}>
		<Grid item xs={12}>
			<DetailsPanel/>
		</Grid>
		<Grid item xs={6}>
			<PersonalityPanel/>
		</Grid>
		<Grid item xs={6}>
			<AppearancePanel/>
		</Grid>
		<Grid item xs={12}>
			<Card>Group</Card>
		</Grid>
		<Grid item xs={12}>
			<NotesPanel/>
		</Grid>
	</Grid>
);

export default CharacterPanel;
