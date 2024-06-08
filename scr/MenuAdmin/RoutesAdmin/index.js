import { Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VagasAdmin from '../VagasAdmin/index'
import PerfilAdmin from '../PerfilAdmin/index'

//rotas usuario
export default function RoutesUsuario () {
  const Tab = createBottomTabNavigator()
  
  return(
      <Tab.Navigator
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#222A4D',
            borderTopColor: 'transparent',
            paddingBottom:20,
            paddingTop:10,
          },
          tabBarActiveTintColor: '#06C6FB',
          tabBarInactiveTintColor: '#F6F6F6',
          
        }}
      >

        <Tab.Screen 
        name='Jobs' 
        component={VagasAdmin}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color}) => (
            <Entypo name= 'briefcase' size={size} color={color}/>
          )
          }}
        />

        <Tab.Screen 
        name='Perfil'
        component={PerfilAdmin}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color}) => (
            <Feather name= 'user' size={size} color={color}/>
          )
        }}
        />
        
      </Tab.Navigator>
  
  )
}
