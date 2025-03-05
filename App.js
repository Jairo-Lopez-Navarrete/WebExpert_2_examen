//hooks/helpers
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
{/*import {createDrawerNavigator} from '@react-navigation/drawer';*/}
import {navigationRef} from './helpers/RootNavigation';




//screens
//import Home from './screens/Home';
import Profile from './screens/Profile';
import Explore from './screens/Explore';
import Books from './screens/Books';
//import Games from './screens/Games';
//import Movies from './screens/Movies';
import Detail from './screens/Detail';

//components
//import Header from './components/Header';
import Footer from './components/Footer';

//constante van de navigatie

//tabmenu constante
const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer ref={navigationRef}>
             <Stack.Navigator style={styles.styleHeader} screenOptions={{headerShown: true}}>
                 {/*<Stack.Screen name="Home" component={Home}/>*/}
                 <Stack.Screen name="Books" component={Books} />
                 <Stack.Screen name="Profile" component={Profile}/>
                 <Stack.Screen name="Explore" component={Explore}/>
                 {/*<Stack.Screen name="Movies" component={Movies}/>*/}
                 <Stack.Screen name="Detail" component={Detail}/>
             </Stack.Navigator>
            <Footer />
       <StatusBar style="auto" />
      </NavigationContainer>
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
