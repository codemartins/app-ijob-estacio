import { createNativeStackNavigator } from '@react-navigation/native-stack';


import VagasAdmin from '../MenuAdmin/VagasAdmin/index'
import PerfilAdmin from '../MenuAdmin/PerfilAdmin/index'
import RoutesAdmin from '../MenuAdmin/RoutesAdmin/index'


const Stack = createNativeStackNavigator();


//Rotas para navegar pelo app (tela Menu Admin)
export default function Routes3() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='RoutesAdmin'
        component={RoutesAdmin}
        options={{headerShown: false}}
      />
      
      <Stack.Screen 
        name='VagasAdmin'
        component={VagasAdmin}  
        options={{headerShown: false}}
      /> 

      <Stack.Screen 
        name='PerfilAdmin'
        component={PerfilAdmin}  
        options={{headerShown: false}}
      /> 

    </Stack.Navigator>
  )
}