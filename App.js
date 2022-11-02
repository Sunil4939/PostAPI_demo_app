import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingStack from "./components/onboardingStack";

const App = () =>{
  return(
  //  <MyOnboarding/>
  <NavigationContainer>
  <OnBoardingStack/>
</NavigationContainer>
  )
}

export default App;