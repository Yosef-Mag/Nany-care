import React from "react";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import SignUpPage from "./components/signup";
import LoginPage from "./Login";
import AllNany from "./Home";

import { Actions } from "react-native-router-flux";

export default function Signup({ navigation }) {
  return (
    <View>
      <KeyboardAvoidingView behavior="position" disabled>
        <View
          style={{ marginTop: 50, marginLeft: "auto", marginRight: "auto" }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#E88877",
              marginTop: 100,
            }}
          >
            Welcome To Nany App !
          </Text>
        </View>
        <View>
          <Formik
            initialValues={{
              Name: "",
              Email: "",
              PhoneNumber: "",
              password: "",
            }}
            onSubmit={(values) => {
              // console.log(values);

              axios
                .post("http://192.168.127.34:5000/signup", values)

                .then(function (res) {
                  // console.log(values);
                  console.log('fnh');
                  // console.log("hi Afnannnnnnnnnmmmm", res);
                })
                .then(function (res) {
                  navigation.navigate("Home");
                  
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            {(props) => (
              <View>
                {/* Name inpute */}
                <TextInput
                  placeholder="Please enter name "
                  onChangeText={props.handleChange("Name")}
                  value={props.values.Name}
                ></TextInput>
                {/* Email input */}
                <TextInput
                  placeholder="Please enter email "
                  onChangeText={props.handleChange("Email")}
                  type="email-address"
                  value={props.values.Email}
                ></TextInput>
                {/* PhoneNumber input */}
                <TextInput
                  placeholder="Please enter your phone number "
                  onChangeText={props.handleChange("PhoneNumber")}
                  value={props.values.PhoneNumber}
                ></TextInput>

                {/* password input  */}
                <TextInput
                  placeholder="password"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                ></TextInput>

                {/* submit bttn  */}
                <Button
                  title="signUp"
                  mode="contained"
                  onPress={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
const style = StyleSheet.create({
  title: {
    color: "red",
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  textButton: {
    width: 140,
    padding: 10,
    fontSize: 20,
    marginTop: 10 + "%",
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    borderRadius: 30,
    color: "white",
    textAlign: "center",
    backgroundColor: "#E88877",
  },
});
