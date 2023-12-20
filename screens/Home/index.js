import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Home = () => {
  return (
    <SafeAreaProvider>
        <View>
        <Text>Home</Text>
        </View>
    </SafeAreaProvider>
  )
}

export default Home

const styles = StyleSheet.create({})