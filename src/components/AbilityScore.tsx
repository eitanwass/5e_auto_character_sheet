import React from 'react';
import _ from 'lodash';
import {valueToModifier} from '../utils';

import './AbilityScore.css';


const AbilityScore = ({label, value}: {label: string, value: number}) => {
    const abilityScoreModifier = valueToModifier(value);
    const compiledLabel = _.toUpper(label.substring(0, 3));

    return (
        <div className={"ability-scores"}>
            <div>
                <span className={"ability-name"}>{compiledLabel}</span>
                <span className={"ability-value"}>{value}</span>
            </div>
            <div className={"ability-modifier"}>{`${abilityScoreModifier >= 0 ? "+" : ""}${abilityScoreModifier}`}</div>
        </div>
    );
};

export default AbilityScore;