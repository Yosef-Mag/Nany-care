import React from "react";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

export default function Signup() {
  return (
    <View>
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          PhoneNumber: "",
          password: "",
        }}
        onSubmit={(values) => {
          axios

            // <<<<<<< HEAD
            .post("http://192.168.127.43:5000/signup", values)
            // =======
            //             // .post("http://localhost:5000/signup", values)
            // >>>>>>> 388e08325efbc821f4f70d0ecb154e62cadc03b1
            .then(function (response) {
              console.log(response);
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
  );
}
