import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Buttons';
import * as ImagePicker from 'expo-image-picker';

import PlaceholderImage from './assets/background-image.png';

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled){
      // console.log(result);
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }else{
      alert('Tu no seleccionaste una imagen');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
          placeholderImageSource={PlaceholderImage} 
          selectedImage={selectedImage}
        />
      </View>
      { showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escoge una photo" onPress={pickImageAsync} />
          <Button label="Use esta Foto" onPress={() => setShowAppOptions()} />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center'
  }
});
