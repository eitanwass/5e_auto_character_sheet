import React, { useEffect, useState, useContext, ChangeEvent } from "react";
import axios from "axios";
import _ from "lodash";
import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { defaultRace, Race } from "../types/raceTypes";
import { CharacterContext } from "../contexts/CharacterContext";


const useStyles = makeStyles({
	option: {
		fontSize: 15,
		"& > span": {
			marginRight: 10,
			fontSize: 18,
		},
	}
});


const RaceSelect = (): JSX.Element => {
	const classes = useStyles();
	const { race } = useContext(CharacterContext);
	const [races, _setRaces] = useState<Race[]>([defaultRace]);

	const setRaces = (races: Race[]) => {
		const raceNameCount = {};
		_setRaces(
			_.map(races, (race: Race) => {
				raceNameCount[race.name] = _.get(raceNameCount, race.name,
					_.reduce(races, (count: number, n: Race) => n.name === race.name ? ++count : count, 0));
				if (1 < raceNameCount[race.name]) {
					return { ...race, name: `${race.name} [${race.source}]` };
				}
				return race;
			})
		);
	};

	useEffect(() => {
		axios.get("https://5e.tools/data/races.json")
			.then(({ data }: { data: { race: Race[] } }) => setRaces(data.race));
	}, []);

	return (<Autocomplete
		id="select-race"
		style={{ width: 300 }}
		options={races}
		classes={{ option: classes.option }}
		onChange={(event: ChangeEvent<Record<string, never>>, newValue: Race | null) => {
			if (newValue) race[1](newValue);
		}}
		autoHighlight
		getOptionLabel={(option) => option.name}
		renderOption={(option) => <>{option.name}</>}
		renderInput={(params) => (
			<TextField
				{...params}
				label="Race"
				variant="outlined"
				inputProps={{ ...params.inputProps }}
			/>)}
	/>);
};

export default RaceSelect;
