import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {navigate} from '../helpers/RootNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useNavigationState } from '@react-navigation/native';

export default function Footer(){

    const currentRoute = useNavigationState(state => { 
        if (state && state.routes) {
            return state.routes[state.index].name;
        }
        return '';
    });

    const getFooterStyle = () => {
        switch (currentRoute) {
            case 'Games':
                return { backgroundColor: '#88120E' };
            case 'Explore':
                return { backgroundColor: '#987653' };
            case 'Profile':
                return { backgroundColor: '#363285' };
            case 'Detail':
                return { backgroundColor: '#E88205' };
            default:
                return { backgroundColor: '#333' };
        }
    };

    return(
        <View style={[styles.footer, getFooterStyle()]}>
            <TouchableOpacity style={styles.button} onPress={() => navigate('Books')}>
                <Ionicons name="home" style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigate('Explore')}>
                <Ionicons name="compass" style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigate('Profile')}>
                <Ionicons name="person" style={styles.icon}/>
            </TouchableOpacity>
            {/*<TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
                <Ionicons name="menu" size={30} color="white" />
            </TouchableOpacity>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#987653',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    icon: {
        color: '#fff',
        fontSize: 30,
        marginLeft: 20,
        marginRight: 20
    },
    button: {
        //padding: 20,
    }
})