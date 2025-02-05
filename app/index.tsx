import { Redirect, router } from "expo-router";
import { View, Text, Pressable, TextInput } from "react-native";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { useRouter } from "expo-router";

export default function Index() {
  const router= useRouter();
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Log In</Text>
      <View style={GlobalStyles.logininputContainer}>
        <View style={GlobalStyles.logininput}>
          <TextInput placeholder="Usuario" placeholderTextColor={"#ffff"}>
          </TextInput>
        </View>
        
        <View style={GlobalStyles.logininput} >
          <TextInput placeholder="Contraseña" placeholderTextColor={"#ffff"}>
          </TextInput>
        </View>
        
      </View>

      <View style={GlobalStyles.botonesLoginContainer}>
        <View style={GlobalStyles.loginboton}>
          <Pressable  onPress={() => router.push("/tabs/database")} >
            <Text style={GlobalStyles.loginbotontext}>Registrarse</Text>
          </Pressable>
        </View>
        <View style={GlobalStyles.loginboton}> 
          <Pressable  onPress={() => router.push("/tabs/database")} >
            <Text style={GlobalStyles.loginbotontext}>Login</Text>
          </Pressable>
        </View>
      </View>
      
      
    </View>
  )
  
}
