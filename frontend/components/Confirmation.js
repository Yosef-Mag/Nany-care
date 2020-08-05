import React, { useState } from 'react';
import { Card } from "galio-framework";
import { AsyncStorage } from 'react-native';
import { Button } from "react-native-paper";
import {
  View,
  Text,
  TextInput
} from "react-native";




export default function Confirm() {
  const [info, setInfo] = useState([]);
  const [value, onChangeText] = React.useState('How many hours');
  
  AsyncStorage.multiGet(['token','nany']).then((res) => {
   var nany =  JSON.parse(res[1][1]);
   setInfo(nany)
  })


  function handleChange(hours){
    return value * nany.cost
  }
  
  return (  
    <View>
    <>
    
                         <View >
                              <Card
                                title= {info.name}
                                caption= {info.cost}
                                location={info.place}
                                image={info.image}
                                style={{ backgroundColor: "white" }}
                              />
                                  <View >
                                       <View >
                                          <TextInput
                                          
                                          onChangeText={text => onChangeText(text)}
                                          value={value}
                                          ></TextInput>
                                        </View>

                                        <View >
                                              <Button
                                                mode="contained"
                                                color="rgba(255,255,255,0.6)"
                                              
                                              >
                                                    <Text>
                                                     Calculate
                                                    </Text>
                                              </Button>
                                        </View>
                                </View>
                                <View >
                                        <View >
                                              <Button
                                                title="Submit"
                                                mode="contained"
                                                color="rgba(255,255,255,0.6)"
                                              
                                              >
                                                    <Text>
                                                      Done
                                                    </Text>
                                              </Button>
                                        </View>
                                        <View >
                                              <Button
                                                title="Submit"
                                                mode="contained"
                                                color="rgba(255,255,255,0.6)"
                                              
                                              >
                                                    <Text>
                                                    Cancel
                                                    </Text>
                                              </Button>
                                      </View>
                               </View>  
                        </View>
          </>                    
        </View>
       
      
                       
  )

}


/*******************************Styling********************************/
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  }

})