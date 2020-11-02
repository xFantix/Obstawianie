import { createContext } from 'react';

export const defaultObject = {
    changeInputValue: () => { },
    handleSendSubmit: () => { },
    handleBetTeam: () => { },
    clearBetList: () => { },
    sendYourBet: () => { },
}

export const AppContext = createContext(defaultObject);