import React from 'react';
import { View, Text } from 'react-native';

export default function ChatScreen({ route }) {
    const { user } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>Chat with {user.first_name} {user.last_name}</Text>
        </View>
    );
}