import React from "react";
import { Image, } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import  Dots from "./indicator";
//MyOnboarding is a function of onboarding.js file
import Done from "./done";

const MyOnboarding = ({navigation}) =>{
    
  return(
   
    <Onboarding  
    //To handle the navigation to the Homepage if Skip is clicked
onSkip={() => navigation.replace("Home")}

//To handle the navigation to the Homepage after Done is clicked
onDone={() => navigation.replace("Home")}

DoneButtonComponent={Done}
DotComponent={Dots}

    pages={[
      {
        backgroundColor: '#a6e4d0',
        image: <Image style={{width:200, height:200}} source={{uri: "https://media.istockphoto.com/photos/dedicated-female-student-of-asian-ethnicity-having-online-class-via-picture-id1344252964?s=612x612"}} />,
        title: 'Welcome',
        subtitle: 'Welcome to the first slide of the Onboarding Swiper.',
    },
    {
        backgroundColor: '#fdeb93',
        image: <Image style={{width:200, height:200}}  source={{uri: "https://media.istockphoto.com/photos/dedicated-male-freelancer-having-online-meeting-while-working-from-picture-id1344252159?s=612x612"}} />,
        title: 'Explore',
        subtitle: 'This is the second slide of the Onboarding Swiper.',
    },
    {
        backgroundColor: '#e9bcbe',
        image: <Image style={{width:200, height:200}}  source={{uri: "https://media.istockphoto.com/photos/young-man-working-from-internet-cafe-picture-id1147292719?s=612x612"}} />,
        title: 'All Done',
        subtitle: 'This is the Third slide of the Onboarding Swiper.',
    },
    ]}
/>
  )
}

export default MyOnboarding;