import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const deviceWidth = Dimensions.get("window").width;

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();
  let content = (
    <React.Fragment>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.sumaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </React.Fragment>
  );

  if (height < width) {
    content = (
      <React.Fragment>
        <View style={styles.landscapeContainer}>
          <View style={styles.landscapeLeftSide}>
            <View style={styles.landscapeImageContainer}>
              <Image
                style={styles.image}
                source={require("../assets/images/success.png")}
              />
            </View>
          </View>
          <View style={styles.landscapeRightSide}>
            <Text style={styles.landscapeSumaryText}>
              Your phone needed{" "}
              <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
              guess the number{" "}
              <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton style={{ width: "50%" }} onPress={onStartNewGame}>
              Start New Game
            </PrimaryButton>
          </View>
        </View>
      </React.Fragment>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 280,
    height: deviceWidth < 380 ? 150 : 280,
    borderRadius: deviceWidth < 380 ? 75 : 140,
    borderWidth: 1,
    borderColor: Colors.accent500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sumaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  landscapeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 15,
  },
  landscapeLeftSide: {
    flex: 1,
    justifyContent: "center",
  },
  landscapeRightSide: {
    flex: 1,
    justifyContent: "center",
  },
  landscapeImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.accent500,
    overflow: "hidden",
  },
  landscapeSumaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 24,
  },
});

export default GameOverScreen;
