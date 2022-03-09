import React , { createContext, useReducer } from 'react';
const initialState = {
    cityList : []
};
const reducer = (state,action) => {
    switch(action.type)
    {
        case 'ADD-CITY':
            return {
                cityList : [...state.cityList,action.payload]
            };
        default:
            return state;
    }
}
export const context = createContext();
const ItemContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    return(
        <context.Provider value = {{state,dispatch}}>
            {children}
        </context.Provider>
    )
}
export default ItemContext;