import { createContext } from 'react';

export const defaultObject = {
    formState:{},
    yourBets:[],
    changeInputValue: () => { },
    handleSendSubmit: () => { },
    handleBetTeam: () => { },
    clearBetList: () => { },
    sendYourBet: () => { }
}

export const AppContext = createContext(defaultObject);