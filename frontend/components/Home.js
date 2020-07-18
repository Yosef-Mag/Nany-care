import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet, NativeModules ,FlatList, SafeAreaView,Text} from "react-native";
import axios from 'axios'


// render all nanys information 

export function allNany() {
  const [nanyList, setNanylist] = useState([]);
  useEffect ( ()=> {
     axios.get('http://localhost:5000/ret')
    .then(res => {
      console.log(res)
      setNanylist(res.data)
      break
      //  console.log(nanyList)
    })
  }) 


// export function allNany () {
// const [nanyList, setNanylist] = useState([]);

//   useEffect(() => {
//   const fetchData = async () => {
//     console.log("hello")
//   const response = await axios.get('http://localhost:5000/ret');
  

//     setNanylist=useState(response.data);
//      console.log(response.data)
//      console.log(nanyList)


//   }
    
//   fetchData();
// }, []);
return (
  <View>
    <Text>
      hello
      </Text>
    
    <FlatList
    {...nanyList.map(nany =>( 
      // console.log(nany)
      <View>
        <Text>{nany.name}</Text>
        </View>
    ))}
  />
  
</View>
)
    

 }

// useEffect (() => {
//    async function fetchData (){
//     try {
//       const result = await fetch(`http://localhost:5000/ret`)
//       console.log("hello")
//       jsonData = await result.json()
//       console.log("hi")
//      setNanylist(jsonData.data.map(n=> n.data))
//         console.log(result.data[0])
      
//     }
//     catch(error) {
//       console.log(error)
//     }
//   }
//     fetchData()
  
// },[])

// return (   
//   <SafeAreaView style={{ flex: 1 }}>
//     <FlatList
//     nanyList = {nanyList}
//     />
//   </SafeAreaView>
// );        
//       }
// //   // useEffect(
// //   //     () => {
  
      
// //   //   fetch('http://localhost:5000/ret')
// //   //     .then(res => res.json())
// //   //     .then(res => {
// //   //       setNanylist([...nanyList, ...res.results]);
      
// //   //     });
// //   //   }
// //   // )
// //   //      return nanyList
       
// //   //   }

// //   // export default () => {
// //   //   const { nanyList } = allNany();
  
    
 
// // // function loadNanyPlaceList() { 
// // //     return (
// // //       selectedValue.map((item) => (
// // //         <Picker.Item label={item.place} value={item.place} />
// // //   ))
// // //     )}

// // // // dropdown list for the place
// //  export function Place () {
// //   const [selectedValue, setSelectedValue] = useState("amman");
// //   const[isError, setIsError] = useState(false)
// //   // fetching data from server side
// //   useEffect(()=>{
// //     const fetchData = async()=>{
// //       setIsError(false)
// //       try {
// //     const result = await axios.get('http://localhost:5000/ret')
// //     result.data.map((item)=>{
// //       setSelectedValue(item.place)
// //       console.log(item.place)
// //     })} 
// //       catch (error) {
// //                setIsError(true)
// //        }
// //     }  
// //     fetchData();  
// // }, [])
   
// //   return (
// //     <View > 
// //       {/* <Text>Place</Text> */}
// //       <Picker

// //         selectedValue={selectedValue}
// //         style={{ height: 50, width: 150 }}
// //         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
// //       >  
// //        {loadNanyPlaceList}
// //       </Picker> 
// //       </View>
// //        )}



// // // //*************************************************************************************

// // // // dropdown list for the number of Kids Can Handle
// // //  export function HowManyKidsCanHandle () {
// // //   const [selectedValue, setSelectedValue] = useState(" For how many kids" );
// // //         return (
    
// // //      <View >
// // //       <Picker
// // //         selectedValue={selectedValue}
// // //         style={{ height: 50, width: 150 }}
// // //         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
// // //       >
     
// // //       <Picker.Item label= "kidsNumber" value= "kidsNumber" />
// // //         {/* <Picker.Item label="1" value="1" />
// // //         <Picker.Item label="2" value="2" />
// // //         <Picker.Item label="3" value="3" />
// // //         <Picker.Item label="4" value="4" /> */}
// // //       </Picker>
// // //       <View> 
      
// // // //       </View>
// // // //     </View>


// // // // dropdown list for the Education Level
// // //  export function EducationLevel() {
// // //           const [selectedValue, setSelectedValue] = useState("Choose Nany's education level");
// // //           return (
// // //        <View >
// // //         <Picker
// // //           selectedValue={selectedValue} 
// // //           // style={{ height: 50, width: 150 }}
// // //           onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
// // //         >
// // //           <Picker.Item label="college" value="college" />
// // //           <Picker.Item label="high school" value="high school" />
// // //         </Picker>
// // //       </View>
// // //           )}


// import React, { useState, useEffect } from "react";
// import { View, Picker, NativeModules } from "react-native";
// import axios from "axios";
// // function to load  Nany Place List based on user selection
// function loadNanyPlaceList() {
//   return selectedValue.map((item) => (
//     <Picker.Item label={item.place} value={item.place} />
//   ));
// }
// // dropdown list for the place
// export function Place() {
//   const [selectedValue, setSelectedValue] = useState("amman");
//   const [isError, setIsError] = useState(false);
//   // fetching data from server side
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsError(false);
//       try {
//         const result = await axios.get("http://localhost:5000/ret");
//         result.data.map((item) => {
//           setSelectedValue(item.place);
//           console.log(item.place);
//         });
//       } catch (error) {
//         setIsError(true);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <View>
//       <Picker
//         selectedValue={selectedValue}
//         style={{ height: 50, width: 150 }}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         {loadNanyPlaceList}
//       </Picker>
//     </View>
//   );
// }
// //*************************************************************************************
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
//       <View></View>
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
//     </View>
//   );
// }