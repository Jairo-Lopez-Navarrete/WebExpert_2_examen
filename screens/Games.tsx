import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Books(){
    
    const navigation = useNavigation();

    const popularBooks = [
        {
            id: 1,
            name: 'Zelda: Breath of the wild',
            description: 'Dit is een test',
            image: require('../assets/zelda.jpg')
        },
        {
            id: 2,
            name: 'Witcher 3: Wild hunt',
            description: 'leleleilelelelei lelelelelei',
            image: require('../assets/Witcher_3.jpg'),
        },
        {
            id: 3,
            name: 'Dying Light: The beast',
            description: 'Good night, Good Luck',
            image:  require('../assets/dlbeast.jpg'),
        },
        {
            id: 4,
            name: 'Lies Of P',
            description: 'Gepetto is mi master',
            image: require('../assets/Lies_of_p_cover_art.jpg'),
        },
        {
            id: 5,
            name: 'Sekiro: Shadows Die Twice',
            description: 'A lone wolf seeks for his master and will do everything to get him back',
            image: require('../assets/sekiro.jpg'),
        },
    ];

    const foryouBooks = [
        {
            id: 6,
            name: 'Where winds meet',
            description: 'This is a game where you meet wind wollah',
            image: require('../assets/where_winds_meet.jpg'),
        },
        {
            id: 7,
            name: 'Kingdom Come Deliverance 2',
            description: 'This game ye',
            image: require('../assets/kcd2.jpg')
        },
        {
            id: 8,
            name: 'Ninja Gaiden 2: Black',
            description: 'This game ye',
            image: require('../assets/ninjagaiden2.jpg'),
        },
        {
            id: 9,
            name: 'Dynasty Warriors: Origins',
            description: 'This game ye',
            image: require('../assets/Dynasty-Warriors-Origins-Preview-01-Header.jpg'),
        },
        {
            id: 10,
            name: 'Bloodborne',
            description: 'This game ye',
            image:  require('../assets/Bloodborne.jpg'),
        },
    ]


    const latestReleases = [
        {
            id: 6,
            name: 'Where winds meet',
            description: 'This is a game where you meet wind wollah',
            image: require('../assets/where_winds_meet.jpg'),
        },
        {
            id: 7,
            name: 'Kingdom Come Deliverance 2',
            description: 'This game ye',
            image: require('../assets/kcd2.jpg')
        },
        {
            id: 8,
            name: 'Ninja Gaiden 2: Black',
            description: 'This game ye',
            image: require('../assets/ninjagaiden2.jpg'),
        },
        {
            id: 9,
            name: 'Dynasty Warriors: Origins',
            description: 'This game ye',
            image: require('../assets/Dynasty-Warriors-Origins-Preview-01-Header.jpg'),
        },
        {
            id: 10,
            name: 'Bloodborne',
            description: 'This game ye',
            image:  require('../assets/Bloodborne.jpg'),
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
        width: 170,
        height: 220,
        borderRadius: 15,
        margin: 5,
        padding: 5,
        display: 'flex',
        justifyContent: 'flex-end',
      },
});