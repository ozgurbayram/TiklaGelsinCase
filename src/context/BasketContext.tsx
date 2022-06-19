import * as React from 'react'
import { Product } from '../types'

type Action = 
    {type: 'add',product:Product} |
    {type: 'remove',id:number} |
    {type:'clear'} |
    {type:'increase',id:number} |
    {type:'decrease',id:number}

type Dispatch = (action: Action) => void
type State = {
    basket: Product[]
}

type basketProviderProps = {children: React.ReactNode}

const BasketContext = React.createContext<
  {basketState: State; basketDispatch: Dispatch} | undefined
>(undefined)

const basketReducer=(state: State, action: Action)=> {
    switch (action.type) {
        case 'add': {
            const payload = action.product
            const product = state.basket.find((i)=>{return i.id==payload.id})
            if(product && product?.count){
                product.count = product.count+1
                return {
                    ...state
                }
            }else{
                return {
                    basket:[...state.basket,payload] 
                }
            }
        }
        case 'remove': {
            const newList = state.basket.filter((i)=>{return i.id != action.id})
            return {
                basket:newList
            }
        }
        case 'increase':{
            const product = state.basket.find((i)=>{return i.id==action.id})
            if(product?.count){
                product.count = product.count+1
            }
            return {
                ...state
            }
        }
        case 'decrease':{
            const product = state.basket.find((i)=>{return i.id==action.id})
            if(product?.count){
                product.count = product.count-1
            }
            return {
                ...state
            }
        }
        case 'clear':{
            return {
                basket:[]
            }
        }
        default: {
            return state
        }
    }
}

function BasketProvider({children}: basketProviderProps) {
    const [basketState, basketDispatch] = React.useReducer(basketReducer, {basket: []})
    const value = {basketState, basketDispatch}
    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}

function useBasket() {
    const context = React.useContext(BasketContext)
    if (context === undefined) {
        throw new Error('useBasket must be used within a basketProvider')
    }
    return context
}

export {BasketProvider, useBasket}