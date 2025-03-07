import React, {useState, useEffect} from 'react';
import { View, Image, StyleSheet, Text, Pressable, ScrollView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailScreen({ route }) {
    const { detail } = route.params; // Haalt het boek op
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const checkIfSaved = async () => {
            try {
                const storedBooks = await AsyncStorage.getItem('savedBooks');
                const savedBooks = storedBooks ? JSON.parse(storedBooks) : [];
                const bookExists = savedBooks.some(book => book.id === detail.id);
                setIsSaved(bookExists);
            } catch (error) {
                console.error('Fout bij ophalen van opgeslagen boeken:', error);
            }
        };
        checkIfSaved();
    }, []);


    const saveBookToProfile = async () => {
        try {
            // Haal de bestaande boeken op
            const storedBooks = await AsyncStorage.getItem('savedBooks');
            let savedBooks = storedBooks ? JSON.parse(storedBooks) : [];

            // Controleer of het boek al is toegevoegd
            if (!isSaved) {
                savedBooks.push(detail);
                await AsyncStorage.setItem('savedBooks', JSON.stringify(savedBooks));
                setIsSaved(true);
            }
        } catch (error) {
            console.error('Fout bij opslaan van boek:', error);
        }
    };

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Image source={detail.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{detail.name}</Text>
                    <Text style={styles.authorText}>{detail.author}</Text>
                    <Pressable onPress={saveBookToProfile} style={styles.button}>
                        <Text style={styles.buttonText}>{isSaved ? 'Opgeslagen' : 'Voeg toe'}</Text>
                        <Ionicons name={isSaved ? 'checkmark' : 'add'} style={styles.buttonIcon} />
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
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 40,
        elevation: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E88205',
        width: 300,
        height: 70,
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        marginRight: 2,
    },
    buttonIcon: {
        color: '#fff',
        fontSize: 30,
    },
    textContainer: {
        alignItems: 'center',
        width: '100%',
        height: 300,
        padding: 20,
        elevation: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'center',
    },
    authorText: {
        fontSize: 22,
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        marginTop: 20,
        fontSize: 22,
        textAlign: 'center',
    },
});