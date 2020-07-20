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
 // console.log(nanyList)

  // function renderList () { 
  //   console.log('hi')
  //   //console.log(nanyList)
  
  //   }
    
  // };
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
        nanyList = {nanyList}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
          
          var selected = nanyList.filter(op =>{
            console.log(op.place)
            return op.place === itemValue 
         })

         console.log("selected" , nanyList)
         if (selected){
          // console.log(selected)
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
       return setNanylist(itemValue)
      }
    }
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


