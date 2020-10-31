import React from 'react';
import MatchEvent from '../Components/MatchEvent'


const LeagueOfLegends = () => {

    const LeagueOfLegendsList = [
        {
            id: 1,
            HomeName: "Excel Esports",
            VisitName: "DRX",
            HomeWin: 1.89,
            VisitWin: 2.10,


        },
        {
            id: 2,
            HomeName: "G2 Esports",
            VisitName: "Team Vitality",
            HomeWin: 1.59,
            VisitWin: 2.30,


        },
        {
            id: 3,
            HomeName: "Complexity",
            VisitName: "Vartex",
            HomeWin: 2.30,
            VisitWin: 1.80,


        },
        {
            id: 4,
            HomeName: "CrowCrowd",
            VisitName: "LNG Esports",
            HomeWin: 1.80,
            VisitWin: 2.30,


        },
        {
            id: 5,
            HomeName: "Origen",
            VisitName: "Rainbow7",
            HomeWin: 1.80,
            VisitWin: 2.30,


        }

    ]

    const LeagueOfLegendsElement = LeagueOfLegendsList.map(element => <MatchEvent key={element.id} element={element} />)

    return (
        <>
            {LeagueOfLegendsElement}
        </>
    );
}

export default LeagueOfLegends;