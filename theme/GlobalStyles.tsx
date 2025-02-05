import { StyleSheet } from "react-native"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        padding:"10%"
    },
    titulo: {
        fontSize: 40,
        flex:1,
        alignSelf:"center"
    },
    logininputContainer:{
        flexDirection:"column",
        gap:"3%",
        flex:1

    },
    logininput:{
        backgroundColor:"pink",
        borderRadius:20,
        paddingHorizontal:"2%"
    },
    botonesLoginContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        
    },
    loginboton:{
        backgroundColor:"gray",
        paddingHorizontal:"5%",
        justifyContent:"center",
        borderRadius:20,
    },
    loginbotontext:{
        fontSize:20,
        color:"#fff"
    }

})