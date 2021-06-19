import _ from 'lodash';

const _experiencePointsToLevel = [
    {xp: 0, level: 1, prof: 2},
    {xp: 300, level: 2, prof: 2},
    {xp: 900, level: 3, prof: 2},
    {xp: 2700, level: 4, prof: 2},
    {xp: 6500, level: 5, prof: 3},
    {xp: 14000, level: 6, prof: 3},
    {xp: 23000, level: 7, prof: 3},
    {xp: 34000, level: 8, prof: 3},
    {xp: 48000, level: 9, prof: 4},
    {xp: 64000, level: 10, prof: 4},
    {xp: 85000, level: 11, prof: 4},
    {xp: 100000, level: 12, prof: 4},
    {xp: 120000, level: 13, prof: 5},
    {xp: 140000, level: 14, prof: 5},
    {xp: 165000, level: 15, prof: 5},
    {xp: 195000, level: 16, prof: 5},
    {xp: 225000, level: 17, prof: 6},
    {xp: 265000, level: 18, prof: 6},
    {xp: 305000, level: 19, prof: 6},
    {xp: 355000, level: 20, prof: 6},
];

const getLevel = (experiencePoints: number): number => {
    return _.last(_.takeWhile(_experiencePointsToLevel, (o) => o.xp <= experiencePoints)).level;
};

const getProficiencyBonus = (experiencePoints: number): number => {
    return _.last(_.takeWhile(_experiencePointsToLevel, (o) => o.xp <= experiencePoints)).level;
};
