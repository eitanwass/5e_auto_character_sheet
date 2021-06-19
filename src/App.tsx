import React from 'react';
import {CharacterProvider} from "./contexts/CharacterContext";
import RaceSelect from "./components/RaceSelect";
import './App.css';
import Attributes from "./components/Attributes";
import {Grid} from "@material-ui/core";

const App = () => {
    return (
        <div className="App">
            <CharacterProvider>
                <Grid container spacing={5}>
                    <Grid container item spacing={3} xs={3}>
                        <Attributes/>
                    </Grid>
                    <Grid container item spacing={3} xs={6}>
                        <RaceSelect/>
                    </Grid>
                    <Grid container item spacing={3} xs={3}>
                        Here go stats
                    </Grid>
                </Grid>
            </CharacterProvider>
        </div>
    );
}

export default App;
