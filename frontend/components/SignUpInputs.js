import React from "react";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
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
                .post("http://192.168.1.65:5000/signup", values)

                .then(function (res) {
                  console.log(res.data);
                  if (res.data === "User authenticated") {
                    navigation.navigate("LoginPage");
                  } else {
                    if (res.data === "User authenticated") {
                      navigation.navigate("LoginPage");
                    } else {
                      if (res.data === "User already exists...") {
                        alert("User already exists...");
                      }
                    }
                  }
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
                  onBlur={function allLetter(uname) {
                    var letters = /^[A-Za-z]+$/;
                    if (props.values.Name.match(letters)) {
                      return true;
                    } else {
                      alert("Username must have alphabet characters only");
                      uname.focus();
                      return false;
                    }
                  }}
                ></TextInput>
                {/* Email input */}
                <TextInput
                  placeholder="Please enter email "
                  onChangeText={props.handleChange("Email")}
                  type="email-address"
                  value={props.values.Email}
                  onBlur={function ValidateEmail(mail) {
                    if (
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        props.values.Email
                      )
                    ) {
                      return true;
                    }
                    alert("You have entered an invalid email address!");
                    return false;
                  }}
                ></TextInput>
                {/* PhoneNumber input */}
                <TextInput
                  placeholder="Please enter your phone number "
                  onChangeText={props.handleChange("PhoneNumber")}
                  value={props.values.PhoneNumber}
                  onBlur={function phonenumber(number) {
                    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                    if (props.values.PhoneNumber.match(phoneno)) {
                      return true;
                    } else {
                      alert("Not a valid Phone Number");
                      return false;
                    }
                  }}
                ></TextInput>

                {/* password input  */}
                <TextInput
                  placeholder="password"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onBlur={function CheckPassword(inputtxt) {
                    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
                    if (props.values.password.match(decimal)) {
                      return true;
                    } else {
                      alert(
                        "Wrong password it should contain 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]"
                      );
                      return false;
                    }
                  }}
                ></TextInput>

                {/* submit bttn  */}
                <Button
                  title="signUp"
                  mode="contained"
                  Text="signUp"
                  onPress={props.handleSubmit}
                >
                  <Text style={{ color: "pink" }}>Signup</Text>
                </Button>
                <Button
                  title="Login"
                  mode="contained"
                  Text="Login"
                  onPress={() => navigation.navigate("LoginPage")}
                >
                  <Text style={{ color: "pink" }}>Login</Text>
                </Button>

                {/* <Button
                  color="blue"
                  dark={true}
                  compact={true}
                  mode="contained"
                  onPress={navigation.navigate("LoginPage")}
                >
                  <Text style={{ color: "pink" }}>login</Text>
                </Button> */}
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
    backgroundColor: "60ecff",
  },
});
