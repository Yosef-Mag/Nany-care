import React, { useState } from "react";
import { View, Picker, StyleSheet, NativeModules } from "react-native";



// dropdown list for the place
export function place () {
  const [selectedValue, setSelectedValue] = useState(" Choose the nany's place");
  return (
    <View style={styles.container}> 
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >  
        <Picker.Item label="Amman" value="amman" />
      </Picker> 
      </View>
       )}

// dropdown list for the number of Kids Can Handle
export function howManyKidsCanHandle () {
  const [selectedValue, setSelectedValue] = useState(" For how many kids" );
        return (
     <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
      </Picker>
    </View>
        )}

// dropdown list for the Education Level
export function educationLevel() {
          const [selectedValue, setSelectedValue] = useState("Choose Nany's education level");
          return (
       <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="college" value="college" />
          <Picker.Item label="high school" value="high school" />
        </Picker>
      </View>
          )}


  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});



