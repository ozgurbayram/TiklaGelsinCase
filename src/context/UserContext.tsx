import React, { useContext } from "react"
import { useReducer } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

type Action = {type:'login',email:string} | {type:'logout'}

type State ={
    user:{}|null
}

type Dispatch =(action:Action)=>void

const UserContext = React.createContext<
    {userState:State,userDispatch:Dispatch}
|undefined>(undefined)

interface IUserContext {
    children:React.ReactNode
}

const userReducer = (state:State,action:Action) =>{
    switch (action.type) {
        case 'login':
            AsyncStorage.setItem('user',action.email)
            return {
                ...state,
                user:{
                    email:action.email
                }
            }
        case 'logout':
            AsyncStorage.removeItem('user')    
            return {
                ...state,
                user:null,
            }
        default:
            return state
    }
}

const UserContextProvider = ({children}:IUserContext)=>{
    const [userState, userDispatch] = useReducer(userReducer, {user:null})
    const value = {userState,userDispatch}
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
const useUser = () =>{
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUser must be used within a basketProvider')
    }
    return context
}
export {UserContextProvider,useUser}