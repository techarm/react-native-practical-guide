import { useState } from 'react';
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import { Colors } from '../../constants/styles';
import OutlinedButton from '../UI/OutlinedButton';

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInfomation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInfomation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInfomation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permisisons to use this app.'
      );
      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    console.log(hasPermission);
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
  };

  let imagePreview = <Text style={styles.previewText}>Preview</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  previewText: {
    color: 'white',
    fontSize: 48,
  },
});

export default ImagePicker;
