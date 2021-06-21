import React, {useContext} from 'react';
import _ from 'lodash';
import {Checkbox, makeStyles} from '@material-ui/core';
import {CheckBoxOutlineBlank, CheckBox} from '@material-ui/icons';
import { CharacterContext } from '../contexts/CharacterContext';
import {valueToModifier} from '../utils';

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

const AbilityChecks = ({abilityName, checks, abilityScoreValue}: {abilityName: string, checks: string[], abilityScoreValue: number}) => {
    const classes = useStyles();
    const {abilityChecksProficiency, abilitySaveThrows, getAbilityCheckValue} = useContext(CharacterContext);

    return (
        <div>
            <div>
                <span>{getAbilityCheckValue(abilityName)}</span>
                <Checkbox classes={{root: classes.savingThrows}}
                        icon={<CheckBoxOutlineBlank fontSize="small"/>}
                        checkedIcon={<CheckBox fontSize="small"/>}
                        name="checkedI"
                        onChange={(e) => abilitySaveThrows.setter(prev => ({...prev, [_.camelCase(abilityName)]: e.target.checked}))}
                        />
                <label>Saving Throws</label>
            </div>
            {
                _.map(checks, (check) =>
                    <div>
                        <span>{getAbilityCheckValue(check)}</span>
                        <Checkbox classes={{root: classes.checkbox}}
                                icon={<CheckBoxOutlineBlank fontSize="small"/>}
                                checkedIcon={<CheckBox fontSize="small"/>}
                                name="checkedI"
                                onChange={(e) => abilityChecksProficiency.setter(prev => ({...prev, [_.camelCase(check)]: e.target.checked}))}
                                />
                        <label>{check}</label>
                    </div>
                )
            }
        </div>
    );
};

export default AbilityChecks;
