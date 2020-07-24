import React, { useState, useEffect } from "react";
import { View, SafeAreaView,  ScrollView ,StyleSheet, Text, Card} from "react-native";
import { Block, theme } from 'galio-framework';
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
    <View>
      <View>
        <Card containerStyle={{padding: 0}}>
        {nanyList.map((nany) => (
        
            <Block flex center style={styles}>
          <Text>
            NAME : {nany.name} - PLACE: {nany.place} - HOURLY COST: {nany.cost}{" "}
            - EDUCATION LEVEL : {nany.educationLevel} - ECPERIANCE LEVEL :{" "}
            {nany.experianceLevel} - KIDS NUMBER : {nany.kidsNumber} - AGE :{" "}
            {nany.age} - WORKING HOURS : {nany.workingHour}{" "}

          </Text>
          </Block>
        

         
        ))}
        </Card>
      </View>
    </View>
   
  );
 
}
// const styles = StyleSheet.create({
//   home: {
//     width: width,    
//   },
//   nanyList: {
//     width: width - theme.SIZES.BASE * 2,
//     paddingVertical: theme.SIZES.BASE,
//   },
// });
// const styles = theme => StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: theme.COLORS.FACEBOOK
//   }
// });


