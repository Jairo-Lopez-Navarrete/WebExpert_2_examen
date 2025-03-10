import React, {useState, useContext} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import {AuthContext} from '../helpers/AuthProvider';

export default function EditProfile(props: any) {
    const {user, logout} = useContext(AuthContext);
    const [username, setUsername] = useState(user?.username || '');
    const [name, setName] = useState(user?.name || '');

    const handleSave = async () => {
        const updatedUser = {...user, username, name};
        await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

        props.navigation.goBack();
    };

    const handleLogout = async () => {
        await logout();
        props.navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Pas je account aan!</Text>
    
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Naam"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Gebruikersnaam"
              value={username}
              onChangeText={setUsername}
            />
            <Button title="Opslaan" onPress={handleSave} />
          </View>
    
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Uitloggen</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          justifyContent: 'space-between',
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        form: {
          marginTop: 20,
        },
        input: {
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
        },
        logoutButton: {
          marginTop: 30,
          padding: 10,
          backgroundColor: '#ff4d4d',
          borderRadius: 5,
          alignItems: 'center',
        },
        logoutText: {
          color: 'white',
          fontSize: 16,
        },
      });