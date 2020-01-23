import React from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet
} from "react-native";
import Colors from "../constants/Colors";

const LocationPicker = props => {
  const getLocationHandler = () => {};
  return (
    <View style={styles.LocationPicker}>
      <View style={styles.mapPreview}>
        <Text>No location chosen yet!</Text>
        <Button
          title="Get User Location"
          color={Colors.primary}
          onPress={getLocationHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LocationPicker;
