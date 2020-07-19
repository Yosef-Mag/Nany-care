import React, { useState, useEffect } from "react";
import {
  View,
  Picker,
  ListView,
  StyleSheet,
  NativeModules,
  FlatList,
  SafeAreaView,
  Text,
} from "react-native";
import axios from "axios";

// render all nanys information

export default function AllNany() {
  const [nanyList, setNanylist] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/ret").then((res) => {
      //console.log(res.data);
      setNanylist(res.data);
      
    }, []);
  });
  //console.log(nanyList)

  function renderList () { 
    console.log('hi')
   var selected = nanyList.filter((op) => op.place === "amman")
   
   if (selected){
     console.log('hi')
   return(
    <View>
    {selected.map((nany) => (
      <Text>
        NAME : {nany.name} PLACE: {nany.place} HOURLY COST: {nany.cost}{" "}
        EDUCATION LEVEL : {nany.educationLevel} ECPERIANCE LEVEL :{" "}
        {nany.experianceLevel} KIDS NUMBER : {nany.kidsNumber} AGE :{" "}
        {nany.age} WORKING HOURS : {nany.workingHour}{" "}
      </Text>
    ))}
  </View>
   )
    }
    
  };
  return (
    <View>
      <View>
        {nanyList.map((nany) => (
          <Text>
            NAME : {nany.name} PLACE: {nany.place} HOURLY COST: {nany.cost}{" "}
            EDUCATION LEVEL : {nany.educationLevel} ECPERIANCE LEVEL :{" "}
            {nany.experianceLevel} KIDS NUMBER : {nany.kidsNumber} AGE :{" "}
            {nany.age} WORKING HOURS : {nany.workingHour}{" "}
          </Text>
        ))}
      </View>
      <View>
      <Text> City </Text>
      <Picker
        // nanyList={ele.place}
        style={{ height: 50, width: 150 }}
        onValueChange={()=> {renderList()}}
          //(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >  
        <Picker.Item label= "Amman" value= "amman" />
        <Picker.Item label= "Irbed" value= "irbed" />
        <Picker.Item label= "Zarqa" value= "zarqa" />
        <Picker.Item label= "Aqaba" value= "aqaba" />
        
      </Picker> 
      </View>
    </View>
  );
} 


