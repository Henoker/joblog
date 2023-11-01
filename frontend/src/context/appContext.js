import React, { useState, useContext, useReducer} from 'react';

const initialstate = {
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',

}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, setState] = useState(initialstate)

    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialstate, useAppContext}