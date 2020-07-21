// import React from "react";
// import { View, Text, PermissionsAndroid, Alert, Platform } from "react-native";
// import Geolocation from "react-native-geolocation-service";
// import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
// import { mapStyle } from "./mapStyle";
// export default class Map extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       latitude: 0,
//       longitude: 0,
//       coordinates: [],
//     };
//   }

//   async componentDidMount() {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           coordinates: this.state.coordinates.concat({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           }),
//         });
//       },
//       (error) => {
//         Alert.alert(error.message.toString());
//       },
//       {
//         showLocationDialog: true,
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 0,
//       }
//     );

//     Geolocation.watchPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           coordinates: this.state.coordinates.concat({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           }),
//         });
//       },
//       (error) => {
//         console.log(error);
//       },
//       {
//         showLocationDialog: true,
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 0,
//         distanceFilter: 0,
//       }
//     );
//   }
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <MapView
//           provider={PROVIDER_GOOGLE}
//           customMapStyle={mapStyle}
//           style={{ flex: 1 }}
//           region={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           <Marker
//             coordinate={{
//               latitude: this.state.latitude,
//               longitude: this.state.longitude,
//             }}
//           ></Marker>
//           <Polyline
//             coordinates={this.state.coordinates}
//             strokeColor="#bf8221"
//             strokeColors={[
//               "#bf8221",
//               "#ffe066",
//               "#ffe066",
//               "#ffe066",
//               "#ffe066",
//             ]}
//             strokeWidth={3}
//           />
//         </MapView>
//       </View>
//     );
//   }
// }
import React, { useState, useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import Constants from "expo-constants";
import * as Location from "expo-location";

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

        let location1 = await Location.getCurrentPositionAsync({});
        console.log(JSON.stringify(location1));
        setLocation(location1);
      })();
    }
  });
  const mapRegion = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
