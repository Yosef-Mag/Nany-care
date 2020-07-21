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
import {Button} from "react-native-paper";



export default function AllNany() {

  const [nanylist, setNanylist] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [selected, setSelected] = useState([]);



  useEffect(() => {
    fetch(
      `http://localhost:5000/ret`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        setNanylist(response);
        //console.log(response)
      })
      .catch(error => console.log(error));
  }, []);

  //console.log(nanylist)


  function renderList () { 
    if(selectedValue === "allNany"){
      setSelected(nanylist)
    }
    else{
    var selected1;
     selected1 = nanylist.filter(op =>{
      //  console.log("op", op.place)
      //  console.log("select", selectedValue)
      //  console.log("hi" ,op.place === selectedValue)
      return op["name"] === selectedValue 
   })
  
   setSelected(selected1)
   console.log (selected)
  }
}
  
    return(
      
      <View>
          {/* <View>
            {nanylist.map((nany) => (
              <Text>
                NAME : {nany.name} PLACE: {nany.place} HOURLY COST: {nany.cost}{" "}
                EDUCATION LEVEL : {nany.educationLevel} ECPERIANCE LEVEL :{" "}
                {nany.experianceLevel} KIDS NUMBER : {nany.kidsNumber} AGE :{" "}
                {nany.age} WORKING HOURS : {nany.workingHour}{" "}
              </Text>
            ))}
          </View> */}
      <Text> City </Text>
          <Picker
            nanylist = {nanylist}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => { setSelectedValue(itemValue)}}
          > 
            <Picker.Item label= "All" value= "allNany" /> 
            <Picker.Item label= "Amman" value= "amman" />
            <Picker.Item label= "Ahlam" value= "ahlam" />
            <Picker.Item label= "Zarqa" value= "zarqa" />
            <Picker.Item label= "Aqaba" value= "aqaba" />
            
          </Picker> 
      <Button onClick= {renderList} >go</Button>
      
  
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
   </View>
    )  

} 