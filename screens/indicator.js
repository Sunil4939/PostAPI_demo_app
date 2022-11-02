import React from "react";
import { View, } from "react-native";



const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'blue' : 'black'
    return (
    <View
    style={{
        width:24,
        height:6,
        marginHorizontal:3,
        backgroundColor
    }}
    />
    )
}

export default Dots;