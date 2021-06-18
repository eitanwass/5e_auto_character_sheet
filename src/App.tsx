import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import {makeStyles, TextField} from "@material-ui/core";
import {Autocomplete} from '@material-ui/lab';
import './App.css';
import axios from 'axios';

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    }
});

interface raceType {
    name: string;
    size: string[];
    speed: object;
    ability: object[];
    entries: object[];
    languageProficiencies: [];
    traitTags: [];
    page: number;
    source: string;
}

const defaultRace: raceType = {
    name: "none",
    size: [],
    speed: {},
    ability: [{}],
    entries: [{}],
    languageProficiencies: [],
    traitTags: [],
    page: 0,
    source: "none",
};

const App = () => {
    const classes = useStyles();
    const [races, _setRaces] = useState<raceType[]>([defaultRace])

    const setRaces = (races: raceType[]) =>
        _setRaces(
            _.map(races, (race: raceType) => {
                if (_.filter(races, (checkedRace) => checkedRace.name === race.name).length > 1)
                    return {...race, name: `${race.name} ${race.source}`};
                return race;
            })
        );

    useEffect(() => {
        axios.get("https://5e.tools/data/races.json")
            .then(({data}: { data: { race: raceType[] } }) => setRaces(data.race));
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <Autocomplete
                    id="select-race"
                    style={{width: 300}}
                    options={races}
                    classes={{option: classes.option}}
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    renderOption={(option) => <>{option.name}</>}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Race"
                            variant="outlined"
                            inputProps={{...params.inputProps}}
                        />)}
                />
            </header>
        </div>
    );
}

export default App;
