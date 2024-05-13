import React, {useState} from 'react'
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native'

const app =() =>{
const [count,setcount] =useState(0)

const artırma=()=>{

  setcount(pcount=>pcount+1);
}
const azaltma=()=>{

  setcount(pcount=>pcount-1);
}

return(
  <View style={style.container}>
    <Text style={style.text}> sayac: {count}</Text>
    <TouchableOpacity onPress={artırma} style={style.button}>
      <Text style={style.buttontext}>artır</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={azaltma} style={style.button}>
      <Text style={style.buttontext}>azalt</Text>
    </TouchableOpacity>

  </View>
);
};

const style=StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'orange',

},
text:{
  fontSize:24,
  marginBottom:30,
 
},
button:{
  backgroundColor:'red',
  margin:10,
  padding:5,
  width:65,
  height:60,
  borderRadius:8,


},
buttontext:{
  alignItems:'center',
  justifyContent:'center',
  fontSize:24,
},



});

export default app;