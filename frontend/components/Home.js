import React, { useState, useEffect } from "react";
import { View, Picker, NativeModules } from "react-native";

import axios from 'axios'

// function to load  Nany Place List based on user selection
function loadNanyPlaceList() { 
    return (
      selectedValue.map(user => (
        <Picker.Item label={selectedValue} value={selectedValue} />
  ))
    )}

// dropdown list for the place
 export function Place () {
  const [selectedValue, setSelectedValue] = useState("amman");
  // fetching data from server side
  useEffect(async()=>{
    const result = await axios('http://localhost:5000/ret')
    setSelectedValue(result.data)
  }, [])
  return (
    <View > 
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >  
       {loadNanyPlaceList}
      </Picker> 
      </View>
       )}

// dropdown list for the number of Kids Can Handle
 export function HowManyKidsCanHandle () {
  const [selectedValue, setSelectedValue] = useState(" For how many kids" );
        return (
    
     <View >
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
     
      <Picker.Item label= "kidsNumber" value= "kidsNumber" />
        {/* <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" /> */}
      </Picker>
      <View> 
      
      </View>
    </View>
  
        )}

// dropdown list for the Education Level
 export function EducationLevel() {
          const [selectedValue, setSelectedValue] = useState("Choose Nany's education level");
          return (
       <View >
        <Picker
          selectedValue={selectedValue} 
          // style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="college" value="college" />
          <Picker.Item label="high school" value="high school" />
        </Picker>
      </View>
          )}

// function Home() {
//     return(
//        <>
//         <EducationLevel/>
//         <HowManyKidsCanHandle/> 
//         <Place/>
//       </>
         //    ) }
  



// export default Home;

