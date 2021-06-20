import React, {useContext} from 'react';
import _ from 'lodash';
import {Checkbox, FormControlLabel, makeStyles} from '@material-ui/core';
import {CheckBoxOutlineBlank, CheckBox} from '@material-ui/icons';
import { CharacterContext } from '../contexts/CharacterContext';

const useStyles = makeStyles({
    root: {
        marginRight: '0',
    },
    label: {
        root: {
            marginRight: '0'
        },
        fontSize: '0.6rem',
        marginRight: '0',
    },
    checkbox: {
        padding: '0',
        paddingRight: '0.5rem',
        paddingLeft: '0.2rem',
        color: 'white',
    },
    savingThrows: {
        padding: '0',
        paddingRight: '0.5rem',
        paddingLeft: '0.2rem',
        color: 'white',
        paddingBottom: '0.5rem',
    }
});

const AbilityChecks = ({checks, abilityScoreValue}: {checks: string[], abilityScoreValue: number}) => {
    const classes = useStyles();
    const {abilityChecks} = useContext(CharacterContext);

    return (
        <div>
            <div>
                <span>{abilityScoreValue}</span>
                <Checkbox classes={{root: classes.savingThrows}}
                        icon={<CheckBoxOutlineBlank fontSize="small"/>}
                        checkedIcon={<CheckBox fontSize="small"/>}
                        name="checkedI"
                        />
                <label>Saving Throws</label>
            </div>
            {
                _.map(checks, (check) =>
                    <div>
                        <span>{abilityChecks[0][_.camelCase(check)]}</span>
                        <Checkbox classes={{root: classes.checkbox}}
                                icon={<CheckBoxOutlineBlank fontSize="small"/>}
                                checkedIcon={<CheckBox fontSize="small"/>}
                                name="checkedI"
                                />
                        <label>{check}</label>
                    </div>
                )
            }
        </div>
    );
};

export default AbilityChecks;
