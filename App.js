import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Friends from './screens/friendList'; 
import ChatScreen from './screens/chatScreen';
import MapScreen from './screens/mapScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
const FriendsStack = createStackNavigator();

function FriendsStackScreen() {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen name="friendList" 
      component={Friends}
      options={{
        headerShown: false,}}/>
      <FriendsStack.Screen 
          name="chatScreen" 
          component={ChatScreen}
          options={({ navigation, route }) => ({
            headerShown: true, 
          })}
      />
    </FriendsStack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Friends') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'MapS') {
              iconName = focused ? 'map' : 'map-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'pink',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Friends" 
        component={FriendsStackScreen}
        options={{
            headerStyle: {
                backgroundColor: '#FF1987', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize: 20,
            },
            }} 
        />
        <Tab.Screen name="Maps" 
        component={MapScreen}
        options={{
          headerStyle: {
              backgroundColor: '#FF1987', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
          fontWeight: 'bold', 
          fontSize: 20,
          },
          }} 
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


