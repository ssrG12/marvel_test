import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Pages
import { Home } from '../views/home'
import { Login } from '../views/login'
import { Splash } from '../views/splash'
import { Detail } from '../views/detail'
import { Profile } from '../views/profile'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const Router = () => {

  const FooterNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName='HomePrincipal'
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            paddingTop: 5,
            paddingBottom: 5,
            position: 'absolute',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: '#FFFFFF',
          },
          tabBarItemStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <Tab.Screen
          name='HomePrincipal'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Icon name='home-variant-outline' color={focused ? '#5136C1' : '#8E8E8E'} size={24} />
                <Text style={{ color: focused ? '#5136C1' : '#8E8E8E', fontFamily: 'TTNeueTrialMedium', fontSize: 12 }}>Inicio</Text>
              </View>
            ),
            tabBarLabel: () => null
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Icon name='account-outline' color={focused ? '#5136C1' : '#8E8E8E'} size={24} />
                <Text style={{ color: focused ? '#5136C1' : '#8E8E8E', fontFamily: 'TTNeueTrialMedium', fontSize: 12 }}>Perfil</Text>
              </View>
            ),
            tabBarLabel: () => null
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ gestureEnabled: false }} >
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={FooterNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router