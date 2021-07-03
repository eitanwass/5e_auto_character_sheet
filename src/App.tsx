import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { CharacterProvider } from "./contexts/CharacterContext";
import RaceSelect from "./components/RaceSelect";
import AbilitiesPanel from "./components/abilityComponents/AbilitiesPanel";
import HealthPanel from "./components/HealthPanel";
import "./App.css";


const App = (): JSX.Element => (
	<div className="App">
		<CharacterProvider>
			<Grid container spacing={5}>
				<Grid item xs={3}>
					<AbilitiesPanel/>
				</Grid>
				<Grid item container direction={"column"} spacing={0} xs={6}>
					<RaceSelect/>
					<Paper>Race selection</Paper>
				</Grid>
				<Grid item spacing={3} xs={3}>
					<HealthPanel/>
				</Grid>
			</Grid>
		</CharacterProvider>
	</div>
);

export default App;
