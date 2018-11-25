import { StyleSheet } from 'react-native'
import {BaseColor} from '../../theme/color'
  
 const styles = StyleSheet.create({   
   container: {                       
    alignItems:"center",
    alignContent:"center",
     flexWrap: 'wrap'
   }
 })
  
 const buttons = StyleSheet.create({  
   primary: {                         
    width: 300,
    height:50,
    backgroundColor:BaseColor.dark,
    color:'#ffffff',
    justifyContent:'center',
    textAlign:'center',
    marginBottom:20,
    borderRadius:4,
    borderWidth:1,
    borderColor: BaseColor.dark,
    
   },
   whitetext:{
    fontSize: 18,
    color:'#fff',
    fontWeight: 'bold',
    textAlign:'center',
    alignContent:'center'
},
   transparent:{
    backgroundColor:'transparent',
    width: 300,
    height:50,
    color:'#097a34',
    justifyContent:'center',
    textAlign:'center',
    marginBottom:20,
    borderRadius:4,
    borderWidth:1,
    borderColor: BaseColor.dark,
    justifyContent:"center",
    
   },
   greenText:{
    fontSize: 18,
    color:BaseColor.dark,
    fontWeight: 'bold',
    textAlign:'center',
    alignContent:'center'
}
 })
  
 export { styles, buttons }           