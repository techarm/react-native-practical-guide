import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from 'expo-location';
import OutlinedButton from '../UI/OutlinedButton';
import { getAddress, getMapPreview } from '../../utils/location';
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';

function LocationPicker({ onPickLocation }) {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  const [pickedLocation, setPickedLication] = useState();
  const [locationPermissionInfomation, requestPermission] =
    useForegroundPermissions();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };

      if (mapPickedLocation) {
        setPickedLication(mapPickedLocation);
      }
    }
  }, [route, isFocused]);

  useEffect(() => {
    const handleLocation = async () => {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng
        );
        onPickLocation({ ...pickedLocation, address: address });
      }
    };
    handleLocation();
  }, [pickedLocation, onPickLocation]);

  const verifyPermissions = async () => {
    if (locationPermissionInfomation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInfomation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant location permisisons to use this app.'
      );
      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    const pickedLocation = {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };

    setPickedLication(pickedLocation);
  };

  const pickOnMapHandler = () => {
    navigation.navigate('Map');
  };

  let locationPreview = <Text style={styles.previewText}>Location</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  previewText: {
    color: '#eee',
    fontSize: 48,
  },
});

export default LocationPicker;
