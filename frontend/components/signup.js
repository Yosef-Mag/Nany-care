import React from "react";

import { useState, useEffect } from "react-hook-form";
import { useForm } from "react-hook-form";

import { View, Button, TextInput, StyleSheet } from "react-native";
import axios from "axios";

export default function SignUp() {

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", customerSignUp)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("name");
    register("email");
    register("password");
    register("phoneNumber");
  }, [register]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => setValue("name", text)}
        // value={customerSignUp.name}
        // onChange={handleChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => setValue("password", text)}

        // value={customerSignUp.password}
        // onChange={handleChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="white"
        // onChangeText={(val) => setEmail(val)}
        onChangeText={(text) => setValue("email", text)}

        // value={customerSignUp.email}
        // onChange={handleChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => setValue("phoneNumber", text)}

        // onChangeText={(val) => setPhoneNumber(val)}
        // value={customerSignUp.phoneNumber}
        // onChange={handleChange}
      />
      <Button
        title="sign Up "
        color="white"
        style={styles.buttonText}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 351,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

  // const onChangeText = (key, val) => {
  //   this.setState({ [key]: val });
  // };

  // const [customerSignUp, setCustomerSignUp] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phoneNumber: ""
  // });

  // const handleChange = (event) => {
  //   setCustomerSignUp({
  //     ...customerSignUp,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [isError, setIsError] = useState(false);

  // const signUp = {
  //   email: this.state.email,
  //   password: this.state.password,
  //   phoneNumber: this.state.phoneNumber,
  //   name: this.state.name,
  // };

  // const { name, password, email, phoneNumber } = this.state;

  // fetching data from server side
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsError(false);
  //     try {
  //       const result = await axios.post("http://localhost:5000/signup",{name:'Afnan',
  //     email:'fnh@jh.hb',
  //   password:'ygvfghvv',
  // } );

  //       console.log(req.body);
  //     } catch (error) {
  //       setIsError(true);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // signUp = async () => {
  //   const { name, password, email, phoneNumber } = this.state;
  //   try {

  //     // here place your signup logic
  //     console.log("user successfully signed up!: ", success);
  //   } catch (err) {
  //     console.log("error signing up: ", err);
  //   }
  // };

  
