import { createContext } from 'react';

export const defaultObject = {

    formState:{
        firstName: '',
        lastName: '',
        email: '',
        valueMoney: 0,
        bankMoney: 0,
        yourBets:[],
        sendMoneyForBet: 0
    },
    changeInputValue: () => { },
    handleSendSubmit: () => { },
    handleBetTeam: () => { },
    clearBetList: () => { },
    sendYourBet: () => { }
}

export const AppContext = createContext(defaultObject);