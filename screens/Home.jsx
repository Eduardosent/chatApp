import React, { useEffect } from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import {FontAwesome} from '@expo/vector-icons'
import colors from "../colors"

const catImageUrl = "https://farm2.staticflickr.com/1920/44899852684_79fdfeb1d7_o.jpg";

export const Home = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=> (
                <FontAwesome name='search' size={24} color={colors.gray} style={{marginLeft:15}}/>
            ),
            headerRight:()=>(
                <Image source={{uri: catImageUrl}} style={{
                    marginRight:15,width:40,height:40
                }}/>
            )
        })
    },[navigation])
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate("Chat")} style={styles.chatButton}>
            <Entypo name='chat' size={24} color={colors.lightGray}/>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        backgroundColor:"#fff"
    },
    chatButton:{
        backgroundColor:colors.primary,
        width:50,
        height:50,
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        shadowColor:colors.primary,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity: .9,
        shadowRadius:8,
        marginRight:20,
        marginBottom:50
    }
})
