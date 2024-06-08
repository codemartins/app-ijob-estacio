import React from 'react';
import {StatusBar} from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import Routes from './scr/Routes/index'
import Routes2 from './scr/Routes2/index'
import Routes3 from './scr/Routes3/index'

export default function App (){
  
  return (
   <NavigationContainer>
    <StatusBar backgroundColor='#313D6F' barStyle='light-content'/>
    <Routes/>
   </NavigationContainer> 
  )
}