import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type AuthStackParamList = {
    Login:undefined
}

export type AuthScreenProps = NativeStackScreenProps<AuthStackParamList,'Login'>

export type MainStackParamList = {
    ProductList:undefined
    Basket:undefined
}
export type MainScreenProps = NativeStackScreenProps<MainStackParamList,'ProductList','Basket'>

export type Product = {
    id:number,
    name:string,
    price:number,
    image:string,
    discount:number,
    ingredients:string[],
    count?:number
}