import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, onPress, Image} from 'react-native';
import React, { useState } from 'react';
import StartButton from './StartButton'

const imageList = ["rosie.png"]
const imageTest = require("./assets/rosie.png");

export default function App() {
  const [showImage, setShowImage] = useState(false);
  const pressed = () =>{
    setShowImage(true);
  }
  return (
    <View style={styles.container}>
      <Text>Pet or Pass?</Text>
      <StartButton onPress={pressed} />
      {showImage && <Image source={imageTest} style={{ width: 300, height: 300, marginTop: 50 }} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
