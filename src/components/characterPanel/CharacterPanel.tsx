import React from "react";

import { Card, Grid, } from "@material-ui/core";

import DetailsPanel from "./DetailsPanel";


const CharacterPanel = (): JSX.Element => (
	<Grid container spacing={2}>
		<Grid item xs={12}>
			<DetailsPanel/>
		</Grid>
		<Grid item xs={6}>
			<Card>
				--Personality Traits--
				Alignment
				Ideals
				Bonds
				Flaws
			</Card>
		</Grid>
		<Grid item xs={6}>
			<Card>
				--Appearance--
				Gender
				Age
				Height
				Weight
				Eyes
				Hair
				Skin
				Clothing
			</Card>
		</Grid>
		<Grid item xs={12}>
			<Card>Group</Card>
		</Grid>
		<Grid item xs={12}>
			<Card>Notes</Card>
		</Grid>
	</Grid>
);

export default CharacterPanel;
