import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Friends from './screens/friendList'; 
import ChatScreen from './screens/chatScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FriendsScreen">
                <Stack.Screen
                    name="FriendsScreen"
                    component={Friends}
                    options={{
                        title: 'Chats', 
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
                <Stack.Screen name="chatScreen" component={ChatScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
