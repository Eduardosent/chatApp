import React,{useState} from 'react'
import {View,Text,ScrollView, StyleSheet, Alert,StatusBar, TouchableOpacity,Image,TextInput, SafeAreaView, Button} from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../config/firebase'
const backImage = require("../assets/background.webp");

export const Login = ({navigation}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    const onHandleLogin = () =>{
        if(email !== "" || password !== ""){
            signInWithEmailAndPassword(auth, email, password)
            //.then(()=>console.log("Login Success"))
            .then(()=>navigator.navigation.navigate("Home"))
            .catch((err)=>Alert.alert("Login Error",err.message))
        }
    }
  return (
    <View style={styles.container}>
        <Image source={backImage} style={styles.backImage}/>
        <View style={styles.whiteSheet}></View>
        <SafeAreaView style={styles.form}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} 
            placeholder='Enter email'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}
            value={email}
            onChangeText={(text)=>setEmail(text)}/>
            <TextInput style={styles.input} 
            placeholder='Enter password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='password'
            value={password}
            onChangeText={(text)=>setPassword(text)}/>
            <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                <Text style={{fontWeight:"bold",fontSize:18,color:"#fff"}}>Login</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",marginTop:20}}>
                <Text style={{fontWeight:"600",fontSize:14,color:"gray"}}>Don't have a account</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                    <Text style={{fontWeight:"600",fontSize:14,color:"#F57C00"}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    title:{
        fontSize:36,
        fontWeight:"bold",
        color:"orange",
        alignSelf:"center",
        paddingBottom:24
    },
    input:{
        backgroundColor:"#f6f7f8",
        height:56,
        marginBottom:20,
        fontSize:16,
        borderRadius:10,
        padding:12
    },
    backImage:{
        width: "100%",
        height:340,
        position:"absolute",
        top: 0,
        resizeMode: "cover"
    },
    whiteSheet:{
        width:"100%",
        height:"75%",
        position:"absolute",
        bottom:0,
        backgroundColor:"#fff",
        borderTopLeftRadius:60
    },form:{
        flex:1,
        justifyContent:"center",
        marginHorizontal:30
    },
    button:{
        backgroundColor: "#f57c00",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
        borderRadius: 10,
        height:58
    }
})
