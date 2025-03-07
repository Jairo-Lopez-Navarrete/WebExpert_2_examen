//hooks/helpers
import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
{/*import {createDrawerNavigator} from '@react-navigation/drawer';*/}
import {navigationRef} from './helpers/RootNavigation';
import { AuthContext, AuthProvider } from './helpers/AuthProvider';




//screens
//import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import Profile from './screens/Profile';
import Explore from './screens/Explore';
import Books from './screens/Books';
import EditProfile from './screens/EditProfile';
//import Games from './screens/Games';
//import Movies from './screens/Movies';
import Detail from './screens/Detail';

//components
//import Header from './components/Header';
import Footer from './components/Footer';

//constante van de navigatie

//tabmenu constante
const Stack = createStackNavigator();

function AppNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null; // Of laadscherm tonen
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {user ? (
        <>
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Explore" component={Explore} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
        <Footer />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleHeader: {
    background: '#fdf5ec',
    padding: 10
  }
});
