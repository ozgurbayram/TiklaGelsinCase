import React, { useEffect } from "react"
import Navigation from "./src/navigation"
import {UserContextProvider} from './src/context/UserContext'
import * as Linking from "expo-linking";
import { NavigationContainer } from "@react-navigation/native";

const prefix = Linking.createURL('/');

const App = ()=>{
    const linking = {
        prefixes:[prefix],
        config:{
            screens:{
                ProductList:{
                    path:"products"
                },    
                Basket:{
                    path:"basket",
                    parse:{
                        menuId:Number
                    }
                }
            }
        }
    }
    
    return(
        <>
            <UserContextProvider>
                <NavigationContainer linking={linking}>
                    <Navigation/>
                </NavigationContainer>
            </UserContextProvider>
        </>
    )
}

export default App