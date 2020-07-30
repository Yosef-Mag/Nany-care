import React from "react";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import MyDrawer from "./slidbar";
import { NavigationContainer } from "@react-navigation/native";
export default function LoginInputs() {
  return (
    <View>
      <Formik
        initialValues={{
          Email: "",
          password: "",
        }}
        onSubmit={(values) => {
          axios

            .post("http://192.168.127.105:5000/login", values)
            .then(function (response) {
              console.log(response);
              if(response.status === 200){
                  return (
                    <NavigationContainer>
                      <MyDrawer />
                    </NavigationContainer>
                  );
                }
              
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        {(props) => (
          <View>
            {/* Email input */}
            <TextInput
              placeholder="enter email "
              onChangeText={props.handleChange("Email")}
              value={props.values.Email}
            ></TextInput>
            {/* password input  */}
            <TextInput
              placeholder="password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            ></TextInput>

            {/* submit bttn  */}
            <Button
              title="login"
              mode="contained"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}


