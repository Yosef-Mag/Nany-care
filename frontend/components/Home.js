import React, { useState, useEffect } from "react";
import {View,SafeAreaView,Text} from "react-native";
import axios from "axios";

// render all nanys information

export default function AllNany() {

  const [nanyList, setNanylist] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.127.105:5000/ret')
    .then(res => {
      console.log(res.data)	      
      setNanylist(res.data)	      
    }, []);

  });


  return (
    <SafeAreaView>
    <View>
      <View>
        {nanyList.map((nany) => (
          <Text>
            NAME : {nany.name} - PLACE: {nany.place} - HOURLY COST: {nany.cost}{" "}
            - EDUCATION LEVEL : {nany.educationLevel} - ECPERIANCE LEVEL :{" "}
            {nany.experianceLevel} - KIDS NUMBER : {nany.kidsNumber} - AGE :{" "}
            {nany.age} - WORKING HOURS : {nany.workingHour}{" "}

          </Text>
        ))}
      </View>
    </View>
    </SafeAreaView>
  );
}
