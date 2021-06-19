import React from 'react';
import _ from 'lodash';
import {Card, Grid, makeStyles, Paper} from "@material-ui/core";

import AbilityScore from './AbilityScore';
import AbilityChecks from './AbilityChecks';
import {abilitiesProperties} from '../consts/abilitiesConsts';

const useStyles = makeStyles({
    card: {
        height: '95vh',
        backgroundColor: '#353843',
        margin: '1vh 1vh',
        paddingTop: '3vh',
        fontSize: '0.8rem',
        color: 'white',
    },
    abilityChecks: {
        textAlign: 'left',
    }
});

const AbilityScores = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            {
                _.map(abilitiesProperties, (abilityScore) =>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={6}><AbilityScore label={abilityScore.abilityName} value={abilityScore.abilityScoreValue}/></Grid>
                        <Grid item xs={6} className={classes.abilityChecks}><AbilityChecks checks={abilityScore.abilityChecks}/></Grid>
                    </Grid>)
            }
        </Card>
    );
};

export default AbilityScores;
