import React from "react"
import Navigation from "./src/navigation"
import {UserContextProvider} from './src/context/UserContext'

const App = ()=>{
    return(
        <>
            <UserContextProvider>
                <Navigation/>
            </UserContextProvider>
        </>
    )
}

export default App