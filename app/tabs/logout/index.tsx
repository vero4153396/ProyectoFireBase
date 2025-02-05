import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { useRouter } from 'expo-router';

const ScreenConfiguracion = () => {
  const router= useRouter();
  return (
    <View style={GlobalStyles.containerCentrado}>
                 
            <View style={GlobalStyles.botonesLoginContainer}>
              <View style={GlobalStyles.loginboton}>
                <Pressable  onPress={() => router.push("/tabs/database")} >
                  <Text style={GlobalStyles.loginbotontext}>Sign Out</Text>
                </Pressable>
              </View>
            </View>
    </View>
  )
}

export default ScreenConfiguracion