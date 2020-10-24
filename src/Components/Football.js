import React from 'react';
import FootballElement from './FootballElement'


const FootballList = [
    {
        id: 1,
        HomeName: "Fc Barcelona",
        VisitName: "Real Madryt",
        HomeWin: 1.89,
        VisitWin: 2.00,
        Draw: 3.20,

    },
    {
        id: 2,
        HomeName: "Bayern Monachium",
        VisitName: "Borussia Dortmund",
        HomeWin: 1.59,
        VisitWin: 2.30,
        Draw: 3.80,

    },
    {
        id: 3,
        HomeName: "Olimpia Grudziądz",
        VisitName: "Wigry Suwałki",
        HomeWin: 2.30,
        VisitWin: 1.80,
        Draw: 2.76,

    },
    {
        id: 4,
        HomeName: "Juventus Turyn",
        VisitName: "Fc Napoli",
        HomeWin: 1.80,
        VisitWin: 2.30,
        Draw: 3.10,

    },
    {
        id: 5,
        HomeName: "Legia Warszawa",
        VisitName: "Lechia Gdańsk",
        HomeWin: 1.80,
        VisitWin: 2.30,
        Draw: 3.10,

    }
]


const FootballElements = FootballList.map(element => <FootballElement element={element} id={element.id} />);

const Football = () => {
    return (
        <>
            {FootballElements}
        </>
    );
}

export default Football;