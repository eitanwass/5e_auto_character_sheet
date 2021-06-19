import React from 'react';
import _ from 'lodash';

import './AbilityScore.css';


const AbilityScore = ({label, value}: {label: string, value: number}) => {
    const abilityScoreModifier = Math.floor((value - 10) / 2);
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