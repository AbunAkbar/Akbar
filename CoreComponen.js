import react,{Component} from 'react'
import {Text,StyleSheet,View,TouchableOpacity,TextInput,Image} from 'react-native'
import {color} from 'react-native/Libraries/NewAppScreen'
  export default class app extends Component{
      constructor(props){
          super(props);
          this.state={};
      }
      render() {
     return(<View>
         <Text style={styles.teks1}>Login</Text>
         <View>
          <image
          style={styles.img}
          source={require('Login.png')}/>
         </View>
         <View style={styles.container}>
           <TextInput 
           placeholder='Username'
           style={styles.fromInput}
           />
            <TextInput 
           placeholder='Password'
           style={styles.fromInput}
           />
           <TouchableOpacity style={styles.butto}>
              <Text style={styles.teks2}>Login</Text>
           </TouchableOpacity>
         </View>
          </View>
         )
    }
  }

  const styles =StyleSheet.create({
    container:{
      paddingHorizontal :10,
      marginVertical :20,
    },
    fromInput:{
      height:50,
      borderWidth:1,
      borderColor:'grey',
      borderRadius:18,
      padding :15,
      marginTop:15,
    },
    teks1:{
      fontSize:40,
      color : 'black',
      paddingTop :50,
      textAlign :'center',
    },
    teks2:{
      fontSize:25,
      fontWeight:'bold',
      color:'white',
    },
    img:{
      width:200,
      height :200,
      marginHorizontal :80,
    }
    })
    
    