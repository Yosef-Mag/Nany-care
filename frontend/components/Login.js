import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

export default class Login extends React.Component {
  state = {

    password: "",
    email: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  login = async () => {
    const { password, email} = this.state;
    try {
      // here place your login logic
      console.log("user successfully login!: ", success);
    } catch (err) {
      console.log("error logining in: ", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("email", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("password", val)}
        />
        
       
        <Button title="login" onPress={this.login} />
      </View>
    );
  }
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
