import { createContext } from 'react';

export const defaultObject = {

    firstName: "",
    lastName: "",
    email: "",
    valueMoney: 0,
    sendMoneyForBet: 0,
    bankMoney: "",
    yourBets: [],
    changeInputValue: () => { },
    handleSendSubmit: () => { },
    handleBetTeam: () => { },
    clearBetList: () => { },
    sendYourBet: () => { }
}

export const AppContext = createContext(defaultObject);