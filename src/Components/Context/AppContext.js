import React, { createContext, useContext } from 'react';

export const defaultObject = {

    firstName: "",
    lastName: "",
    email: "",
    valueMoney: "",

    bankMoney: "",

    changeInputValue: () => { },
}

export const AppContext = createContext(defaultObject);