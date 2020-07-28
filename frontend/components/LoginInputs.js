import React from "react";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import allNany from './Home'
import { Actions } from 'react-native-router-flux';


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

            .post("http://192.168.43.32:5000/login", values)
            .then(function (response) {
              console.log(response);
                Actions.allNany()
             
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
              onPress={ () => {
                props.handleSubmit ;
                Actions.allNany()
              }
              } 

            />
          </View>
        )}
      </Formik>
    </View>
  );
}
