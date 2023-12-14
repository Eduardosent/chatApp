import React,{useState, useEffect,createContext,useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';

import { Chat } from './screens/Chat';
import { Login } from './screens/Login';
import {SignUp} from "./screens/SignUp"
import { Home } from './screens/Home';
import { auth } from './config/firebase';

const Stack = createNativeStackNavigator();
const AuthenticateUserContext = createContext();
const AuthenticateUserProvider = ({children}) =>{
  const [user,setUser] = useState(null)
  return(
    <AuthenticateUserContext.Provider value={[user,setUser]}>
      {children}
    </AuthenticateUserContext.Provider>
  )
}
function ChatStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Chat' component={Chat} />
    </Stack.Navigator>
  )
}
function AuthStack(){
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  )
}
function RootNavigator(){
  const [user,setUser] = useContext(AuthenticateUserContext);
  const [loading, setIsLoading] = useState(true);

  const unsubscribe = 
  onAuthStateChanged(auth,
    async authenticatedUser=>{
      console.log(user)
      authenticatedUser ? setUser(authenticatedUser) : setUser(null)
      setIsLoading(false)
    })
  useEffect(()=>{
    return ()=>unsubscribe();
  },[])
  console.log(loading)
  if(loading){
    return (
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <ActivityIndicator size={"large"}/>
      </View>
    )
 }

  return(
    <NavigationContainer>
      {user ? <ChatStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <AuthenticateUserProvider>
      <RootNavigator/>
    </AuthenticateUserProvider>
  );
}

const styles = StyleSheet.create({

});
