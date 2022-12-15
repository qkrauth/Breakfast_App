import {createContext, useReducer} from "react";

const GlobalContext = createContext();

const initialState = {
    cart: [],
    total: 0
};

const GlobalContextProvider = (props) => {
    const reducer = (state, action) => {
        switch(action.type) {
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )
};

export default GlobalContext;
export {GlobalContextProvider};