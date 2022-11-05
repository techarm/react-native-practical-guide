import { useCallback, useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';
import { Place } from '../../models/place';
import Button from '../UI/Button';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [pickedLocation, setPickedLication] = useState('');

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const takeImageHandler = (image) => {
    setSelectedImage(image);
  };

  const pickLocationHandler = useCallback((location) => {
    setPickedLication(location);
  }, []);

  const savePlaceHandler = () => {
    const placeData = new Place(enteredTitle, selectedImage, pickedLocation);
    onCreatePlace(placeData);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
        <ImagePicker onTakeImage={takeImageHandler} />
        <LocationPicker onPickLocation={pickLocationHandler} />
        <Button onPress={savePlaceHandler}>Add Place</Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});

export default PlaceForm;
