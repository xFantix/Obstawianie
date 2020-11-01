import React from 'react';
import MatchEvent from './MatchEvent'
import {FootballList} from '../data/footballData'
const FootballElements = FootballList.map(element => <MatchEvent element={element} key={element.id} />);

const Football = () => {
    return (
        <>
            {FootballElements}
        </>
    );
}

export default Football;