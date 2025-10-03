import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Touchable, TouchableOpacity} from 'react-native';
import StartButton from './StartButton'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pet or Pass?</Text>
      <StatusBar style="auto" />
      <StartButton/>
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
