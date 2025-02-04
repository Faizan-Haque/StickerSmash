import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/background_image.png')

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#25292e',
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: '#fff'
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})