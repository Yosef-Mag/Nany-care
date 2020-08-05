<<<<<<< HEAD
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
=======
import React, { useState } from 'react';
import { Card } from "galio-framework";
import { AsyncStorage } from 'react-native';
import { Button } from "react-native-paper";
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
>>>>>>> 64bd96b78a02ffa45c9f83cdc33d8a36076cca95



<<<<<<< HEAD
  // //fetching data from the db
  // useEffect(() => {
  //   fetch(`http://192.168.127.43:5000/ret`)
  //     .then(res => res.json())
  //     .then(response => {
  //       setNanylist(response);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
=======

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
>>>>>>> 64bd96b78a02ffa45c9f83cdc33d8a36076cca95

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

<<<<<<< HEAD
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Confirm
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography className={classes.typography}>nanny name: </Typography>
        <Typography className={classes.typography}>
          nanny education:{" "}
        </Typography>
        <Typography className={classes.typography}>nanny place: </Typography>
        <Typography className={classes.typography}> nanny cost: </Typography>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          {" "}
          Done{" "}
        </Button>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClose}
        >
          {" "}
          Cancel{" "}
        </Button>
      </Popover>
    </div>
  );
}
=======
}


/*******************************Styling********************************/
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  }

})
>>>>>>> 64bd96b78a02ffa45c9f83cdc33d8a36076cca95
