import React from 'react';
import MatchEvent from '../Components/MatchEvent'
import {CounterStrikeList} from '../data/counterStrikeData'
const CounterStrike = () => {
    
    const CounterStrikeElement = CounterStrikeList.map(element => <MatchEvent key={element.id} element={element} />);
    
    return (
        <>
            {CounterStrikeElement}
        </>
    );
}

export default CounterStrike;