import { createContext, useContext } from "react";

import {IUserState} from "./types"

export const initState = {
    _id: null
}

export const UserContext = createContext({
    state: initState,
    actions: {
        setId: (id: string):void => {}
    }
})

export enum UserActionTypes {
    LOGIN = "LOGIN",
    REGISTE = "REGISTE"
}

export const reducer = (state: IUserState, action:any) => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                _id: action._id
            }
        default:
            return state;
    }
}

export const useUserContext = () => {
    const {state, actions} = useContext(UserContext);
    const setId = (_id:string) => actions.setId(_id);
    return {
        _id: state._id,
        setId
    }
}