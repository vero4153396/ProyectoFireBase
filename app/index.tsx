import { Redirect, router } from "expo-router";
import { View, Text, Pressable, TextInput, Alert } from "react-native";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { useRouter } from "expo-router";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/Firebaseconfig";

export default function Index() {
  const router= useRouter();

  const[email, setEmail] =useState('');
  const[password, setPassword] =useState('');
  //pa iniciar sesion
const logIn= async()=>{
  try {
    const user =await(signInWithEmailAndPassword(auth,email,password));
    setEmail("");
    setPassword("");
    //si existe salto a la pagina
    //con .replace en vez de con . push no se puede pulsar el boton de para atras del movil(ajeno a la app) para volver a la pantalla anterior, en este caso el login, cambio al replace porque no tiene sentido volder al login
    if(user) router.replace("/tabs/database");
    
  } catch (error:any) {
    console.log(error);
    Alert.alert("Inicio de sesión incorrecto", "error.message")
  }
}
//metodo pa registrar
const register= async()=>{
  try {
    const user =await(createUserWithEmailAndPassword(auth,email,password));
    setEmail("");
    setPassword("");
    router.push("/tabs/database");
  } catch (error:any) {
    console.log(error);
    Alert.alert("Inicio de sesión incorrecto", "error.message")
  }
}

  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Log In</Text>
      <View style={GlobalStyles.logininputContainer}>
        <View style={GlobalStyles.logininput}>
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor={"#ffff"} >
          </TextInput>
        </View>
        
        <View style={GlobalStyles.logininput} >
          <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} placeholderTextColor={"#ffff"}>
          </TextInput>
        </View>
        
      </View>

      <View style={GlobalStyles.botonesLoginContainer}>
        <View style={GlobalStyles.loginboton}>
          <Pressable  onPress={register} >
            <Text style={GlobalStyles.loginbotontext}>Registrarse</Text>
          </Pressable>
        </View>
        <View style={GlobalStyles.loginboton}> 
          <Pressable  onPress={logIn} >
            <Text style={GlobalStyles.loginbotontext}>Login</Text>
          </Pressable>
        </View>
      </View>
      
      
    </View>
  )
  
}
