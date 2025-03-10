import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { AuthContext } from '../helpers/AuthProvider';

export default function LoginScreen() {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username.trim() !== '' && password.trim() !== '') {
        login({ username, password }); // Stelt gebruiker in en slaat op
      }
    };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inloggen</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Gebruikersnaam" 
        value={username} 
        onChangeText={setUsername} 
      />
       <TextInput 
        style={styles.input} 
        placeholder="Naam" 
        value={name} 
        onChangeText={setName} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Wachtwoord" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />
      <Pressable style={styles.buttonLogin} title="Login" onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonLogin: {
    width: 200,
    backgroundColor: '#368DD0',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 500
  }
});