import { createContext } from 'react';

export const defaultObject = {

    firstName: "",
    lastName: "",
    email: "",
    valueMoney: 0,

    bankMoney: "",
    setyourBets: [],
    changeInputValue: () => { },
    handleSendSubmit: () => { },
    handleBetTeam: () => { }
}

export const AppContext = createContext(defaultObject);