import React, { useState, useEffect } from "react";
import { View, Picker,  ListView, StyleSheet, NativeModules ,FlatList, SafeAreaView,Text} from "react-native";
import axios from 'axios'


// render all nanys information 

export function allNany() {
  const [nanyList, setNanylist] = useState([]);
  useEffect ( ()=> {
     axios.get('http://localhost:5000/ret')
    .then(res => {
      console.log(res.data)
      setNanylist(res.data)
    },[])
  }) 

return (
  <View>
    <View>
    {nanyList.map(nany =>( 
        <Text>NAME : {nany.name}  PLACE: {nany.place}  HOURLY COST: {nany.cost}  EDUCATION LEVEL : {nany.educationLevel} ECPERIANCE LEVEL : {nany.experianceLevel} KIDS NUMBER : {nany.kidsNumber} AGE : {nany.age} WORKING HOURS : {nany.workingHour}   </Text>
         ))}
        </View>
    </View>
)
}

