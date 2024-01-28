import React from 'react';
import { View, FlatList, Text, StyleSheet,Pressable } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

export default function Friends({ navigation }) {
    const users = [
        { uid: '1', first_name: 'John', last_name: 'Doe', avatar: 'http://example.com/avatar1.png' },
        { uid: '2', first_name: 'Blake', last_name: 'Johnson', avatar: 'http://example.com/avatar2.png' },
        { uid: '3', first_name: 'Cory', last_name: 'Smith', avatar: 'http://example.com/avatar1.png' },
        { uid: '4', first_name: 'Carl', last_name: 'Wilson', avatar: 'http://example.com/avatar2.png' },
        { uid: '5', first_name: 'Danny', last_name: 'Williams', avatar: 'http://example.com/avatar1.png' },
        { uid: '6', first_name: 'Emily', last_name: 'Anderson', avatar: 'http://example.com/avatar2.png' },
        { uid: '7', first_name: 'Jane', last_name: 'Miller', avatar: 'http://example.com/avatar1.png' },
        { uid: '8', first_name: 'Andy', last_name: 'Thompson', avatar: 'http://example.com/avatar2.png' },
        { uid: '9', first_name: 'Lorry', last_name: 'Martin', avatar: 'http://example.com/avatar1.png' },
        { uid: '10', first_name: 'Jack', last_name: 'Williams', avatar: 'http://example.com/avatar2.png' },
        
    ];

    const handlePress = (item) => {
        navigation.navigate('chatScreen', { user: item });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <Pressable onPress={() => handlePress(item)}> 
                        <View style={styles.item}>
                            <UserAvatar size={50} name={`${item.first_name} ${item.last_name}`} src={item.avatar} />
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameText}>{item.first_name} {item.last_name}</Text>   
                            </View>
                        </View>
                    </Pressable>
                )}
                keyExtractor={item => item.uid}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    nameContainer: {
        paddingBottom: 10,
        marginLeft: 35,
    },
    nameText: {
        fontWeight: 'bold', 
        fontSize: 15,
    },
    title: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
    },
    pressedStyle: {
      opacity: 0.5
  },
  
});

