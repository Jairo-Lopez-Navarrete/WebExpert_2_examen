import React from 'react';
import { View, Image, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function DetailScreen({ route }) {
    const { detail } = route.params; // Haalt de game afbeelding op uit de navigatie

    return (
        <ScrollView style={styles.scroll}>
             <View style={styles.container}>
            <Image source={detail.image} style={styles.image} />
            <View style={styles.textContainer}>
            <Text style={styles.title}> {detail.name} </Text>
            <Text style={styles.authorText}>{detail.author}</Text>
            <Pressable onPress={() => navigate('Profile')} style={styles.button}>
                <Text style={styles.buttonText}>Voeg toe</Text>
                <Ionicons name="add" style={styles.buttonIcon}/>
            </Pressable>
            <Text style={styles.description}>{detail.description}</Text>
            </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        paddingBottom: 10,
    },
    container: {
        flex: 1,
        padding: 0,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 40,
        shadowColor: '#000', // Zwarte schaduw
        shadowOffset: { width: 0, height: 4 }, // Schaduwpositie
        shadowOpacity: 0.5, // Transparantie
        shadowRadius: 4, // Hoe vervaagd de schaduw is
        elevation: 20,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E88205',
        width: 300,
        height: 70,
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 500,
        fontSize: 22,
        marginRight: 2
    },
    buttonIcon: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 30,
    },
    textContainer: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 300,
        padding: 20,
        shadowColor: '#000', // Zwarte schaduw
        shadowOffset: { width: 0, height: 4 }, // Schaduwpositie
        shadowOpacity: 0.5, // Transparantie
        shadowRadius: 4, // Hoe vervaagd de schaduw is
        elevation: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 500,
        textAlign: 'center'    
    },
    authorText: {
        fontSize: 22,
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center'
    },
    description: {
        marginTop: 20,
        fontSize: 22,
        textAlign: 'center' 
    }
});