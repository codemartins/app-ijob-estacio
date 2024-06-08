import { Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Vagas from '../Vagas/index'
import Perfil from '../Perfil/index'
import Status from '../Status/index'

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
        name='Meus jobs' 
        component={Status}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color}) => (
            <Entypo name= 'bookmark' size={size} color={color}/>
          )
          }}
        />

        <Tab.Screen 
        name='Vagas' 
        component={Vagas}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color}) => (
            <Entypo name= 'briefcase' size={size} color={color}/>
          )
          }}
        />

        <Tab.Screen 
        name='Perfil'
        component={Perfil}
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
