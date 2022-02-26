import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();
export const Provider = ({children}) => {
    const [currency, setCurrency] = useState('SGD');
    const [symbol, setSymbol] = useState('S$');

    useEffect(() => {
        if (currency === 'SGD'){
            setSymbol('S$');
        } else if (currency === 'USD') {
            setSymbol('$');
        }
    }, [currency]);


  return (
    <AppContext.Provider value = {{currency, setCurrency, symbol}}>
        {children}
    </AppContext.Provider>
  )
}


