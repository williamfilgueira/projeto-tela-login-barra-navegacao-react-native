import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ScrollView:{
        backgroundColor:"#fefefe"
        
    },
    container:{
        width: '100%',
        padding: 20,
        flex: 1,
    },
    boxHeader:{
        alignItems: "center",
        justifyContent:"center",

    },
    imagemReact:{
        width: 150,
        height: 150
    },
    titulo:{
        fontSize: 40
    },
    textHeader:{
        fontSize: 15,
        textAlign: "center"
    },
    containerTexto:{
        width: '100%',
        paddingRight: 30,
        borderWidth:1,
        borderRadius: 15,
        borderColor: "teal",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        marginTop: 10,
    },
    tituloBody:{
        padding: 15,
        fontSize:20,
        color: "teal"
    },
    textoBody:{
        width: '100%',
        marginLeft: 15,
        marginBottom: 15,
    },
    containerTextoImplementacao:{
        marginTop: 50,
        borderWidth:1,
        borderRadius: 15,
        borderColor: "teal",
        shadowRadius: 10,
        
        
    },
    textoImplementacao:{
        padding: 15,
        textAlign:"left",
        
    },
   
  



})

export default styles;