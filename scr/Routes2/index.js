import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Vagas from '../Menu/Vagas/index'
import Status from '../Menu/Status/index'
import Perfil from '../Menu/Perfil/index'
import RoutesUsuario from '../Menu/RoutesUsuario/index'

const Stack = createNativeStackNavigator();


//Rotas para navegar pelo app (tela Menu)
export default function Routes2() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='RoutesUsuario'
        component={RoutesUsuario}  
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='Vagas'
        component={Vagas}  
        options={{headerShown: false}}
      /> 

      <Stack.Screen 
        name='Perfil'
        component={Perfil}  
        options={{headerShown: false}}
      /> 

      <Stack.Screen 
        name='Status'
        component={Status}  
        options={{headerShown: false}}
      /> 
    </Stack.Navigator>
  )
}