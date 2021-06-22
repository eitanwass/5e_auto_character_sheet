import React, {useContext} from 'react';
import _ from 'lodash';
import {Card, makeStyles} from "@material-ui/core";

import { CharacterContext } from '../contexts/CharacterContext';
import RoundProgress from './RoundProgress';


const useStyles = makeStyles({
    card: {
        height: '95vh',
        backgroundColor: '#353843',
        margin: '1vh 1vh',
        paddingTop: '3vh',
        fontSize: '0.7rem',
        color: 'white',
    },
});

const HealthPanel = () => {
    const classes = useStyles();
    const {abilityScores} = useContext(CharacterContext);
    return (
        <Card className={classes.card}>
            <RoundProgress max={48} current={48 + 24}/>
        </Card>
    );
};

export default HealthPanel;
