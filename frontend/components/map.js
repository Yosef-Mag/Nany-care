import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, View, Text, Button } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Constants from "expo-constants";
import * as Location from "expo-location";
import axios from "axios";

export default function MapScreen() {
  const [selectedLocation, setSelectedLocation] = useState();
  const [location, setLocation] = useState({
    coords: {
      accuracy: 20,
      altitude: 5,
      heading: 0,
      latitude: 37.4219983,
      longitude: -122.084,
      speed: 0,
    },
    mocked: false,
    timestamp: 1577294172000,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  buttonClickListener = () => {
    axios
      .post("http://192.168.43.32:5000/select", selectedLocation)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("You send your location !!!");
  };
  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
        }

        let userLocation = await Location.getCurrentPositionAsync({});

        console.log(JSON.stringify(userLocation));
        setLocation(userLocation);
      })();
    }
  }, []);
  var mapRegion = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0,
    longitudeDelta: 0,
  };

  Geolocation.getCurrentPosition(
    position => { 
      setSelectedLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      coordinates: this.state.coordinates.concat({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
      })
      })

    }
  )
  const selectLocationHandler = (event) => {
    event.preventDefault();
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
      latitudeDelta: 0,
      longitudeDelta: 0,
    };
  }
  if (selectedLocation) {
    mapRegion = {
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
  }
  return (
    <View style={styles.mapContainer}>
      <Text
        style={{
          fontWeight: "200",
          fontSize: 20,
          marginTop: 40,
          marginRight: 50,
        }}
      >
        select your location
      </Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={mapRegion}
        onPress={selectLocationHandler}
      >
        {markerCoordinates && (
          <Marker title="Picked Location" coordinate={markerCoordinates} />
        )}
      </MapView>
      <View style={styles.button}>
        <Button onPress={this.buttonClickListener} title="NEXT!" color="blue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 60 + "%",
  },
  map: {
    marginTop: 30 + "%",
    flex: 0.9,
  },

  mapContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    bottom: 200,
  },
  rad: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0,122,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(0,122,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  mark: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF",
  },
});
