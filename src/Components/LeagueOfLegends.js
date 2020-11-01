import React from 'react';
import MatchEvent from '../Components/MatchEvent'
import {LeagueOfLegendsList} from '../data/leagueOfLegendsData'
const LeagueOfLegends = () => {

    const LeagueOfLegendsElement = LeagueOfLegendsList.map(element => <MatchEvent key={element.id} element={element} />)
    return (
        <>
            {LeagueOfLegendsElement}
        </>
    );
}

export default LeagueOfLegends;