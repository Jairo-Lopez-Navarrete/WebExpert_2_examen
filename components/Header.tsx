import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function Header(props: any) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Bookkings</Text>
      <Text style={styles.slogan}>Kies je theme! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#987653',
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
      marginTop: 15,
       fontWeight: 500,
       fontSize: 25,
       color: 'white',

  },
    slogan: {
       marginTop: 8,
       fontSize: 20,
       color: 'white',
  },
});