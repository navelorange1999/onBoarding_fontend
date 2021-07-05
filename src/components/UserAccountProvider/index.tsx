import React, { FC, useReducer } from "react";

import {UserContext, UserActionTypes, initState, reducer} from "./utils";

const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const setId = (_id: string) => dispatch({
        type: UserActionTypes.LOGIN,
        _id,
    });
    const actions = {
        setId
    };

    return (
        <UserContext.Provider value={{state, actions}}>
            {children}
        </UserContext.Provider>
    )
    
}

export default UserProvider;