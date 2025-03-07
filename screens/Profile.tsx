import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../helpers/AuthProvider';

export default function Profile() {
    const {user, logout} = useContext(AuthContext);
    //const navigation = useNavigation();
    const [savedBooks, setSavedBooks] = useState([]);
    
    useEffect(() => {
        loadSavedBooks();
    }, []);

    const loadSavedBooks = async () => {
        try {
            const books = await AsyncStorage.getItem('savedBooks');
            if (books) {
                setSavedBooks(JSON.parse(books));
            }
        } catch (error) {
            console.error('Fout bij laden van boeken:', error);
        }
    };

    const removeBook = async (id) => {
        try {
            let books = savedBooks.filter(book => book.id !== id);
            await AsyncStorage.setItem('savedBooks', JSON.stringify(books));
            setSavedBooks(books);
            
        } catch (error) {
            console.error('Fout bij verwijderen:', error);
        }
    };

    return (
        <View style={styles.container}>
          <View style={styles.editContainer}>
          <Text>@{user?.username}</Text>
          <Pressable onPress={() => navigation.navigate('EditProfile')} style={styles.editButton}>
            <Ionicons name='create' style={styles.editIcon} />
          </Pressable>
          </View>
          <View style={styles.profileContainer}>
            <Image source={require("../assets/crowHunter.jpg")} style={styles.profileImage}/>
            <View style={styles.profileTextContainer}>
            <Text style={styles.profileTextBold}>298</Text>
            <Text style={styles.profileText}>Juegos</Text>
            </View>
            <View style={styles.profileTextContainer}>
            <Text style={styles.profileTextBold}>4</Text>
            <Text style={styles.profileText}>seguidores</Text>
            </View>
            <View style={styles.profileTextContainer}>
            <Text style={styles.profileTextBold}>4</Text>
            <Text style={styles.profileText}>seguidos</Text>
            </View>
          </View>
          <View style={styles.profileContainer}>
              <Text style={styles.profileText}>{user?.name}</Text>
              <Text style={styles.profileText}>Total books: 58</Text>
            </View>
            <Text style={styles.text}>Jouw boeken</Text>
            {savedBooks.length === 0 ? (
                <Text style={styles.noBooksText}>Geen boeken opgeslagen.</Text>
            ) : (
                <FlatList
                    data={savedBooks}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.bookContainer}>
                            <TouchableOpacity onPress={() => removeBook(item.id)} style={styles.removeButton}>
                                <Ionicons name='close' style={styles.removeButtonIcon}/>
                            </TouchableOpacity>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.bookTitle}>{item.name}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      alignItems: 'center', 
      backgroundColor: '#f5f5f5', 
      padding: 20 
    },
    editContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    editButton: {
      position: 'relative',
      left: 87,
    },
    editIcon: {
      fontSize: 20
    },
    text: { 
      marginTop: 10,
      fontSize: 28, 
      fontWeight: '500', 
      marginBottom: 10 
    },
    noBooksText: { 
      fontSize: 18, 
      fontStyle: 'italic', 
      color: 'gray' 
    },
    bookContainer: { 
      alignItems: 'center', 
      marginRight: 15 
    },
    image: { 
      width: 150, 
      height: 240, 
      borderRadius: 15 
    },
    bookTitle: { 
      fontSize: 18, 
      fontWeight: '500', 
      textAlign: 'center', 
      marginTop: 5 
    },
    removeButton: { 
      zIndex: 1,
      position: 'relative',
      top: 12,
      left: 65,
      marginTop: 10, 
      backgroundColor: '#A7A6A6', 
      padding: 8, 
      borderRadius: 100
     },
    removeButtonIcon: { 
      color: '#fff', 
      fontSize: 20
    },
    profileContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    profileTextContainer: {
      margin: 8,
      alignItems: 'center'
    },
    profileTextBold: {
      fontWeight: 700,
      marginLeft: 5,
      marginRight: 5,
      fontSize: 15
    },
    profileText: {
      marginLeft: 5,
      marginRight: 5,
      fontSize: 15
    },
    profileImage: {
      height: 80,
      width: 80,
      borderRadius: 100
    }
});