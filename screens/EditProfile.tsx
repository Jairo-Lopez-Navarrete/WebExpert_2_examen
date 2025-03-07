import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function EditProfile(props: any) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Pas je account aan!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
      marginTop: 5,
       fontWeight: 500,
       fontSize: 25,
       color: '#323232',

  }
});