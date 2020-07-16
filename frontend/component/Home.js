
import React,{PureComponent} from 'react';
import { View,FlatList,Text,SafeAreaView} from 'react-native';
import axios from 'axios'


export default class NanyList extends PureComponent {
    
  state = {
      nanyList: [], 

  }
  
  componentDidMount(){ 

  //FrontPage//connect server with client  using axsios to retrive all data 
   axios.get
   ("http://localhost:5000/nany")
    .then((res) => {
        console.log(res)
          this.setState({
            nanyList:res.data
          })
    }).catch((error) => {
        console.log(error)
    });
  
  }

render() {
    return (
        <View>
            {this.state.nanyList.map(n => 
  {
  return (
    <SafeAreaView>
<FlatList>
  <Text>{n.name} </Text>
  <Text>{n.email} </Text>
  <Text>{n.phoneNumber} </Text>
  <Text>{n.place} </Text>
</FlatList>
</SafeAreaView>

  )
}
)}
        </View>
    )
}
}