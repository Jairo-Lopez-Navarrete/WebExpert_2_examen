import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Books(){
    
    const navigation = useNavigation();

    const popularBooks = [
        {
            id: 1,
            name: 'Between Two Fires',
            author: 'Christopher Buehlman',
            description: 'Set during the Black Death, it follows a disgraced knight and a mysterious young girl who travel across France, as Lucifer and other fallen angels start another war with Heaven.',
            image: require('../assets/betweenTwoFires.jpg')
        },
        {
            id: 2,
            name: 'The witcher: the last wish ',
            author: 'Andrzej Sapkowski',
            description: 'The Last Wish is all about Geralt of Rivia: the witcher. While a witcher should just stick to accepting coin to kill the monsters plaguing the world, Geralt finds himself intervening in the lives of humans more often than not. Its his opinion that not all monsters look like one.',
            image: require('../assets/Witcher.jpg'),
        },
        {
            id: 3,
            name: 'Lord of the rings',
            author: 'J.R. Tolkien',
            description: 'the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil.',
            image:  require('../assets/lotr.jpg'),
        },
        {
            id: 4,
            name: 'Onyx Storm',
            author: 'Rebecca Yarros',
            description: 'Onyx Storm is a nonstop-thrilling adventure fantasy set in the brutal and competitive world of a military college for dragon riders',
            image: require('../assets/onyxStorm.jpg'),
        },
        {
            id: 5,
            name: 'Prince of thorns',
            author: 'Mark Lawrence',
            description: 'From being a privileged royal child, raised by a loving mother, Jorg Ancrath has become the Prince of Thorns, a charming, immoral boy leading a grim band of outlaws in a series of raids and atrocities. The world is in chaos: violence is rife, nightmares everywhere.',
            image: require('../assets/princeOfThorns.jpg'),
        },
    ];

    const foryouBooks = [
        {
            id: 6,
            name: 'Between Two Fires',
            author: 'Christopher Buehlman',
            description: 'Set during the Black Death, it follows a disgraced knight and a mysterious young girl who travel across France, as Lucifer and other fallen angels start another war with Heaven.',
            image: require('../assets/betweenTwoFires.jpg')
        },
        {
            id: 7,
            name: 'Way of kings',
            author: 'Brandon Sanderson',
            description: 'The Way of Kings takes place on the world of Roshar, where war is constantly being waged on the Shattered Plains, and the Highprinces of Alethkar fight to avenge a king that died many moons ago.',
            image: require('../assets/wayOfKings.jpg')
        },
        {
            id: 8,
            name: 'A game of thrones',
            description: 'The Song of Ice and Fire is a prophecy from King Aegon the Conqueror, who had a dream about an impending darkness that will threaten Westeros, and that a king or queen would take the Iron Throne and defeat the evil to save the world. Aegons prophecy was passed down from king to heir over several generations.',
            image: require('../assets/got.jpg'),
        },
    ]


    const latestReleases = [
        {
            id: 9,
            name: 'The reddening',
            author: 'Adam Nevill',
            description: 'The Reddening is described as a folk-horror thriller, wherein a hoard of human remains and prehistoric artefacts are discovered in caves along the Devon coast. It isnt long before our two protagonists are caught up in the secrets circling these horrific discoveries.',
            image: require('../assets/reddening.jpg'),
        },
        {
            id: 10,
            name: 'The silent patient',
            author: 'Alex Michaelides',
            description: 'The story is narrated by an English psychotherapist, Theo Faber, dealing with a patient who turns mute after murdering her husband. Upon its release, the book debuted on The New York Times Best Seller list at No. 1. It later won the Goodreads Choice Award 2019 in the Mystery and Thriller category.',
            image: require('../assets/silent.jpg')
        },
        {
            id: 11,
            name: 'The emperor of thorns',
            author: 'Mark Lawrence',
            description: 'Jorg journeys with his family to Congression, battling the minions of the Dead King along the way, in order to restore the Broken Empire under one ruler – and Jorg intends to be that ruler',
            image: require('../assets/emperor.jpg'),
        },
        {
            id: 12,
            name: 'Onyx Storm',
            author: 'Rebecca Yarros',
            description: 'Onyx Storm is a nonstop-thrilling adventure fantasy set in the brutal and competitive world of a military college for dragon riders',
            image: require('../assets/onyxStorm.jpg'),
        },
        {
            id: 13,
            name: 'A haunting in Venice',
            author: 'Agatha Christie',
            description: 'At a Halloween party, Joyce—a surly thirteen-year-old—boasts that she once witnessed a murder. When no one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. Famed detective Hercule Poirot is called in to investigate.',
            image:  require('../assets/haunting.jpg'),
        },
    ]


    return(
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.text}>Popular</Text>
            <FlatList
                data={popularBooks}
                keyExtractor={(item) => item.id.toString()} 
                horizontal={true} 
                pagingEnabled 
                showsHorizontalScrollIndicator={false}  
                renderItem={({ item }) => ( 
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {detail: item})}>
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>
                )}
            />
            <Text style={styles.text}>For you</Text>
            <FlatList
                data={foryouBooks}
                keyExtractor={(item) => item.id.toString()} 
                horizontal={true} 
                pagingEnabled 
                showsHorizontalScrollIndicator={false}  
                renderItem={({ item }) => ( 
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {detail: item})}>
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>
            )}
            />
            <View>
            <Text style={styles.text}>Latest releases</Text>
            <Text style={styles.text}>See all</Text>
            </View>
            <FlatList
                data={latestReleases}
                keyExtractor={(item) => item.id.toString()} 
                horizontal={true} 
                pagingEnabled 
                showsHorizontalScrollIndicator={false}  
                renderItem={({ item }) => ( 
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {detail: item})}>
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>
            )}
            />
        </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 30,
        fontWeight: 700,
        marginTop: 10,
        marginLeft: 20,
        marginBottom:10
    },
    image: {
        width: 150,
        height: 240,
        borderRadius: 15,
        margin: 5,
        padding: 5,
        display: 'flex',
        justifyContent: 'flex-end'
      },
});