import React from "react";
import {TouchableOpacity, Text} from 'react-native'

const Done = ({...props}) =>{ 
    return(
        <TouchableOpacity
        {...props} 
        >
        <Text style={{fontSize:16, marginHorizontal:20}}>Done</Text>
        </TouchableOpacity>
    )
}
export default Done;