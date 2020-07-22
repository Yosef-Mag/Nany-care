import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text , Picker, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";
import {Button} from "react-native-paper";
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';



export default function AllNany() { // function to render results based on selected category
// states to use 
  const [nanylist, setNanylist] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedKids, setSelectedKids] = useState([]);
  const [selectedEdu, setSelectedEdu] = useState([]);
  const [selected, setSelected] = useState([]);

//fetching data from the db 
  useEffect(() => {
    fetch(`http://192.168.1.14:5000/ret`)
      .then(res => res.json())
      .then(response => {
        console.log("====== == ===  ");
        console.log(response);
        setNanylist(response);
      })
      .catch(error => console.log(error));
  }, []);


// filtering the list data 
  function listFilter () { 
    if(selectedCity === "allNany"){
      setSelected(nanylist)
    }
    else{
    var selected1;
     selected1 = nanylist.filter(op => { 
       console.log(op["place"])
              return ((op["place"] === selectedCity) && (op["educationLevel"] ===  selectedEdu) && ( op["kidsNumber"] === selectedKids)) 
            }
             )
      setSelected(selected1)
     // console.log(op["place"])
    //  console.log(selected1)
    //  console.log("selected",selected)
    //  console.log("selected city",selectedCity)
    //  console.log("selected level",selectedEdu)
    //  console.log("selected kids",selectedKids)
    }
  }
  
    return(  
      <View>
{/* city picker */}
      <Text> Select a city </Text>
          <Picker
            nanylist = {nanylist}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => { setSelectedCity(itemValue)}}
          > 
            <Picker.Item label= "All Cities" value= "allNany" /> 
            <Picker.Item label= "Amman" value= "amman" />
            <Picker.Item label= "Irbid" value= "irbid" />
            <Picker.Item label= "Zarqa" value= "zarqa" />
            <Picker.Item label= "Aqaba" value= "aqaba" />  
          </Picker> 



          {/* Kids can handle picker */}
      <Text> Kids can Handle </Text>
          <Picker
            nanylist = {nanylist}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => { setSelectedKids(itemValue)}}
          > 
            <Picker.Item label= "1 kid" value= "1" />
            <Picker.Item label= "2 kids" value= "2" />
            <Picker.Item label= "3 kids" value= "3" />
            <Picker.Item label= "4 kids" value= "4" />  
          </Picker> 


          {/* Education level picker */}
      <Text> Education level </Text>
          <Picker
            nanylist = {nanylist}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => { setSelectedEdu(itemValue)}}
          > 
            <Picker.Item label= "College" value= "college" />
            <Picker.Item label= "High school" value= "high school" />  
          </Picker> 

          <Button
        title="Press me"
        mode="contained"
        onPress={listFilter}
      />
      
  {/* rendering based on the selection condition */}
    <View>
    {selected.map((nany) => (
      <>
      <ScrollView style={{ width: '100%' }}>
       
          
            <View style={styles.box}>
              <Image style={styles.image} source={nany.image} />
              <View style={styles.boxContent}>
          <Text style={styles.title}> {nany.name}</Text>
                <Text style={styles.description}>{nany.place}</Text>
                <Text style={styles.description}>{nany.kidsNumber}</Text>
                <Text style={styles.description}>{nany.educationLevel}</Text>
                <Text style={styles.description}>{nany.cost}</Text>

                <View style={styles.buttons}>
                  <TouchableHighlight style={[styles.button, styles.view]}>
                    <Image style={styles.icon} source={'https://png.icons8.com/ok/androidL/30/ffffff'}/>
                  </TouchableHighlight>

                </View>
              </View>
            </View>
            
          
        </ScrollView>
      </>
       ))}
        
    </View>
   </View>
    )  
} 




/*******************************Styling********************************/
const styles = StyleSheet.create({
  image: {
    width: 100,
    height:100,
  },
  box: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  title:{
    fontSize:18,
    color:"#151515",
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  buttons:{
    flexDirection: 'row',
  },
  button: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:50,
    marginRight:5,
    marginTop:5,
  },
  icon:{
    width:20,
    height:20,
  },
  view: {
    backgroundColor: "#FF1493",
  },
  profile: {
    backgroundColor: "#1E90FF",
  },
  message: {
    backgroundColor: "#228B22",
  },
});