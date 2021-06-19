import React from 'react';
import _ from 'lodash';
import {Checkbox, FormControlLabel, makeStyles} from '@material-ui/core';
import {CheckBoxOutlineBlank, CheckBox} from '@material-ui/icons'

const useStyles = makeStyles({
    label: {
        fontSize: '0.7rem',
    },
    checkbox: {
        padding: '0',
        paddingRight: '0.5rem',
        color: 'white',
    },
    savingThrows: {
        padding: '0',
        paddingRight: '0.5rem',
        color: 'white',
        paddingBottom: '0.5rem',
    }
});

const AbilityChecks = ({checks}) => {
    const classes = useStyles();

    return (
        <div>
            <div>
                <FormControlLabel classes={{label: classes.label}}
                                  control={
                                      <Checkbox
                                          classes={{root: classes.savingThrows}}
                                          icon={<CheckBoxOutlineBlank fontSize="small"/>}
                                          checkedIcon={<CheckBox fontSize="small"/>}
                                          name="checkedI"
                                      />
                                  }
                                  label="Saving Throws"
                />
            </div>
            {
                _.map(checks, (check) =>
                    <div>
                        <FormControlLabel classes={{label: classes.label}}
                            control={
                                <Checkbox
                                    classes={{root: classes.checkbox}}
                                    icon={<CheckBoxOutlineBlank fontSize="small"/>}
                                    checkedIcon={<CheckBox fontSize="small"/>}
                                    name="checkedI"
                                />
                            }
                            label={check}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default AbilityChecks;
