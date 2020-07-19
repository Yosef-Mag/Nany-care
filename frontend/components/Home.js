import React, { useState, useEffect } from "react";
import { View, Picker, NativeModules } from "react-native";

//import body-parser from "body-parser"
import axios from 'axios'




// dropdown list for the place
 export function Place () {
  const [selectedValue, setSelectedValue] = useState([]);
  const[isError, setIsError] = useState(false)
// function to load  Nany Place List based on user selection

    useEffect(() => {
    axios.get('http://localhost:5000/ret').then(res =>{
    // console.log(Array.isArray(res.data))
     setSelectedValue(res.data)
     console.log(selectedValue)
     selectedValue.map((item)=> {
       //setSelectedValue(item.place)
       
       console.log(item.place)
     })
    // console.log(Array.isArray(res.data))
 })
    }); 

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}

        onValueChange={(item) => {item.place}}
      >  {selectedValue.map(place =>(
        <Picker.Item label={place.place} value={place.place} />
      ))}  
      </Picker> 
      </View>
       )}





// dropdown list for the number of Kids Can Handle
export function HowManyKidsCanHandle() {
  const [selectedValue, setSelectedValue] = useState(" For how many kids");
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="kidsNumber" value="kidsNumber" />
        {/* <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" /> */}
      </Picker>
      <View></View>
    </View>
  );
}

// dropdown list for the Education Level
export function EducationLevel() {
  const [selectedValue, setSelectedValue] = useState(
    "Choose Nany's education level"
  );
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        // style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="college" value="college" />
        <Picker.Item label="high school" value="high school" />
      </Picker>
    </View>
  );
}
