import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

const allowsNotificationsAsync = async () => {
  const settings = await Notifications.getPermissionsAsync();
  return (
    settings.granted ||
    settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
};

const requestPermissionsAsync = async () => {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
};

export default function App() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('Notification received');
        console.log(notification);

        // get data parameter
        const userName = notification.request.content.data.userName;
        console.log(`userName=${userName}`);
      }
    );

    const responseSubription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log('Notification response received');
        console.log(response);

        // get data parameter
        const userName = response.notification.request.content.data.userName;
        console.log(`userName=${userName}`);
      });

    return () => {
      subscription.remove();
      responseSubription.remove();
    };
  }, []);

  const scheduleNotificationHandler = async () => {
    const hasNotificationPermissionGranted = await allowsNotificationsAsync();
    if (!hasNotificationPermissionGranted) {
      console.log('requestPermissionsAsync1');
      await requestPermissionsAsync();
      console.log('requestPermissionsAsync2');
    }

    if (!hasNotificationPermissionGranted) {
      Alert.alert('You donot have notification permission');
      return;
    }

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This is the body of the notification',
        data: {
          userName: 'techarm',
        },
      },
      trigger: {
        seconds: 3,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
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
