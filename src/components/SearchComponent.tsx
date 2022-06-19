import { brandColor } from "../constant"
import { TextInput } from "react-native"

interface ISearchComponent {
    onChangeText:(e:string)=>void
}
const SearchComponent = ({onChangeText}:ISearchComponent) =>{
    return(
        <TextInput
            placeholder='Ürün Ara'
            onChangeText={onChangeText}
            style={{
                borderColor:brandColor,
                borderWidth:1,
                marginHorizontal:20,
                marginVertical:5,
                paddingHorizontal:20,
                paddingVertical:5,
                borderRadius:50,
                fontSize:19
            }}       
        />
    )
}
export default SearchComponent