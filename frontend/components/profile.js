import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Text } from "galio-framework";
import axios from "axios";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";

export default function Profile() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    return () => {
      axios.get("http://172.16.0.161:5000/profile").then((res) => {
        AsyncStorage.getItem("token").then((res) => {
          console.log(res.data.name);
        }, setUserData(res.data));
      }, []);
      console.log(userData, 'new state');

    }
  });

  return (
    <ImageBackground
      source={{
        uri: "https://images.theconversation.com/files/338577/original/file-20200529-78875-18d0wif.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      }}
      style={{ width: "100%", height: "100%"}}
      imageStyle={{ opacity: 0.3 }}

    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri:
                  "https://rehrealestate.com/wp-content/uploads/2015/08/facebook-default-no-profile-pic-girl-600x600.jpg",
              }}
              style={{ width: 200, height: 200 }}
              // resizeMode="center"
            ></Image>
          </View>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            {"\n"}
            <AntDesign name="user" size={33} color="black"  />
            : {userData[0].name}
          </Text>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontSize: 17 }]}>
              {"\n"}
              <AntDesign name="mail" size={20} color="black" />
              : {userData[0].email}
            </Text>
            <Text size={20} color="black">
              {"\n"}
              {"\n"}
              <AntDesign name="phone" size={24} color="black" />
              : {userData[0].phoneNumber}
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  text: {
    color: "#52575D",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  profileImage: {
    marginTop: 50,
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth : 3,
    borderColor: "pink",
    overflow: "hidden",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 60,
  },
  icon: {
    marginRight: "10px",
  },
});
