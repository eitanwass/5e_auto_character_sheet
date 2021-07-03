import React from "react";
import { Grid } from "@material-ui/core";
import { CharacterProvider } from "./contexts/CharacterContext";
import AbilitiesPanel from "./components/abilityComponents/AbilitiesPanel";
import HealthPanel from "./components/HealthPanel";
import GeneralPanel from "./components/GeneralPanel";
import "./App.css";


const App = (): JSX.Element => (
	<div className="App">
		<CharacterProvider>
			<Grid container spacing={0}>
				<Grid item xs>
					<AbilitiesPanel/>
				</Grid>
				<Grid item direction={"column"} xs={7}>
					<GeneralPanel/>
				</Grid>
				<Grid item spacing={3} xs>
					<HealthPanel/>
				</Grid>
			</Grid>
		</CharacterProvider>
	</div>
);

export default App;
