// import React, { useState, useEffect } from "react";
// <<<<<<< HEAD
// import { View, Picker, NativeModules, Text } from "react-native";

// //import body-parser from "body-parser"
// import axios from 'axios'




// // dropdown list for the place
//  export function Place () {
//   const [selectedValue, setSelectedValue] = useState([]);
//   const[isError, setIsError] = useState(false)
// // function to load  Nany Place List based on user selection

//     useEffect(() => {
//     axios.get('http://localhost:5000/ret').then(res =>{
//     // console.log(Array.isArray(res.data))
//      setSelectedValue(res.data)
//      console.log(selectedValue)
//      selectedValue.map((item)=> {
//        //setSelectedValue(item.place)
       
//        console.log(item.place)
//      })
//     // console.log(Array.isArray(res.data))
//  })
//     }); 
//     // <Picker.Item label={place.place} value={place.place} />

//   return (
//     <View>
//       <Text> City </Text>
//       <Picker
//         selectedValue={selectedValue}
//         style={{ height: 50, width: 150 }}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >  
//         <Picker.Item label= "Amman" value= "amman" />
//         <Picker.Item label= "Irbed" value= "irbed" />
//         <Picker.Item label= "Zarqa" value= "zarqa" />
//         <Picker.Item label= "Aqaba" value= "aqaba" />
//       </Picker> 
//        <Text> {selectedValue} </Text>
//       </View>
//        )}





// // dropdown list for the number of Kids Can Handle
// export function HowManyKidsCanHandle() {
//   const [selectedValue, setSelectedValue] = useState(" For how many kids");
//   return (
//     <View>
//       <Picker
//         selectedValue={selectedValue}
//         style={{ height: 50, width: 150 }}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         <Picker.Item label="kidsNumber" value="kidsNumber" />
//         {/* <Picker.Item label="1" value="1" />
//         <Picker.Item label="2" value="2" />
//         <Picker.Item label="3" value="3" />
//         <Picker.Item label="4" value="4" /> */}
//       </Picker>
//       <View> </View>
//     </View>
//   );
// }

// // dropdown list for the Education Level
// export function EducationLevel() {
//   const [selectedValue, setSelectedValue] = useState(
//     "Choose Nany's education level"
//   );
//   return (
//     <View>
//       <Picker
//         selectedValue={selectedValue}
//         // style={{ height: 50, width: 150 }}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         <Picker.Item label="college" value="college" />
//         <Picker.Item label="high school" value="high school" />
//       </Picker>
// =======
// {/* import {
//   View,
//   Picker,
//   ListView,
//   StyleSheet,
//   NativeModules,
//   FlatList,
//   SafeAreaView,
//   Text,
// } from "react-native";
// import axios from "axios";

// // render all nanys information

// export default function AllNany() {
//   const [nanyList, setNanylist] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:5000/ret").then((res) => {
//       console.log(res.data);
//       setNanylist(res.data);
//     }, []);
//   });

//   return (
//     <View>
//       <View>
//         {nanyList.map((nany) => (
//           <Text>
//             NAME : {nany.name} PLACE: {nany.place} HOURLY COST: {nany.cost}{" "}
//             EDUCATION LEVEL : {nany.educationLevel} ECPERIANCE LEVEL :{" "}
//             {nany.experianceLevel} KIDS NUMBER : {nany.kidsNumber} AGE :{" "}
//             {nany.age} WORKING HOURS : {nany.workingHour}{" "}
//           </Text>
//         ))}
//       </View>
// >>>>>>> c321cd7e10caf535643a0afad76228bba254ea88
//     </View>
//   );
// } */}
