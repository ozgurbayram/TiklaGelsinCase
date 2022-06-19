import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type AuthStackParamList = {
    Login:undefined
}

export type AuthScreenProps = NativeStackScreenProps<AuthStackParamList,'Login'>

export type MainStackParamList = {
    ProductList:undefined
    Basket:undefined
}
export type MainStackProps = NativeStackScreenProps<MainStackParamList,'ProductList','Basket'>