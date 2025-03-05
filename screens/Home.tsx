import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import {navigate} from '../helpers/RootNavigation';
//import Ionicons from 'react-native-vector-icons/Ionicons';




export default function Home(){
  return (
    <View style={styles.container}>

        <Text style={styles.text}>Choose your Topic!</Text>
        <View style={styles.imageContainer}>
            <Pressable onPress={() => navigate('Books')}>
                 <ImageBackground source={require('../assets/books.jpg')} style={styles.image} imageStyle={styles.imageBorder}>
                 <View style={styles.textContainer}>
                      <Text style={styles.imageText}>Books</Text>
                      
                 </View>
                 </ImageBackground>
            </Pressable>
            <Pressable onPress={() => navigate('Games')}>
                 <ImageBackground source={require('../assets/controllers.jpg')} style={styles.image} imageStyle={styles.imageBorder}>
                 <View style={styles.textContainer}>
                      <Text style={styles.imageText}>Games</Text>
      
                 </View>
                 </ImageBackground>
            </Pressable>
        </View>
        <View style={styles.imageContainer}>
            <Pressable onPress={() => navigate('Movies')}>
                 <ImageBackground source={require('../assets/movies.jpg')} style={styles.image} imageStyle={styles.imageBorder}>
                 <View style={styles.textContainer}>
                      <Text style={styles.imageText}>Movies</Text>
                 </View>
                 </ImageBackground>
            </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
textContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#232323',
    padding: 5,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  image: {
    width: 160,
    height: 210,
    margin: 5,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  imageBorder: {
    borderRadius: 10,
  },
  imageText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 17,
  }
});