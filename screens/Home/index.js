import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "native-base";
import Tarjeta from '../Components/Tarjeta';


const Home = () => {
  return (
    <ScrollView style={styles.continer}>
      <StatusBar />
        <View style={styles.contentCard}>
          <Tarjeta />
          <Tarjeta />
        </View>
        <Tarjeta />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 16
  },
  contentCard: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})