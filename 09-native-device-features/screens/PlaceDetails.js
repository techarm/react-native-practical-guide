import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, Image, Text, StyleSheet, View } from 'react-native';
import OutlinedButton from '../components/UI/OutlinedButton';
import { Colors } from '../constants/styles';
import { fetchPlaceDetails } from '../utils/database';

function PlaceDetails({ route, navigation }) {
  const [placeDetails, setPlaceDetails] = useState();
  const selectedPlaceId = route.params.placeId;

  const showOnMapHandler = () => {
    navigation.navigate('Map', {
      initialLat: placeDetails.location.lat,
      initialLng: placeDetails.location.lng,
    });
  };

  useEffect(() => {
    // use selectedPlaceId t fetch data from a single place
    const fetchData = async () => {
      const fetchedPlace = await fetchPlaceDetails(selectedPlaceId);
      setPlaceDetails(fetchedPlace);
      navigation.setOptions({
        title: fetchedPlace.title,
      });
    };
    fetchData();
  }, [selectedPlaceId]);

  if (!placeDetails) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: placeDetails.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{placeDetails.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PlaceDetails;
