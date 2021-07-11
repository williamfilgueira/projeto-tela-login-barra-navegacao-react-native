import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f6f6f6",
        flex: 1,
        alignItems: "baseline",
        padding: 20,
        
    },
    boxImagem:{
        marginTop:20,
        backgroundColor: "teal",
        borderWidth: 1,
        width: 110,
        height: 110,
        borderRadius: 100,
        alignItems:"center",
        justifyContent: "center"
    },
    imagemPerfil:{
        width: 105,
        height: 105,
        borderRadius: 100,
        borderWidth: 10,
    },
    titulo:{
        width: '100%',
        marginTop: 10,
        color: "black",
        fontSize: 25,
        borderRadius:20
    },
    boxTextoPerfil:{
        // marginTop: 10,
        // borderWidth: 1,
        // borderColor:"#1dd05d",
        // borderRadius: 20,
        alignItems:"flex-end",
        justifyContent:"flex-start",
    },
    textoPerfil:{
        color: "teal" ,
        width:300,
        fontSize: 12,
        marginBottom:10
    },
    boxInformacoes:{
        flex: 1,
        width: '95%',
        backgroundColor:"white",
        borderRadius: 10,
    },
    linhaSeparadora:{
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        margin: 10,
    },
    boxIcon:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        padding: 20
    },      
    iconLinkedin:{
        width: 40,
        height: 40,
    },
    iconGitHub:{
        width: 40,
        height: 40,
        borderRadius:2
    },
    iconGmail:{
        width: 49,
        height: 37,
    },
    textoContato:{
        marginBottom:15,
        padding: 2,
        textAlign:"center",
        fontSize: 12,
    },
    boxSerraTec:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
    },  
    item1:{
        fontSize:13,
        marginLeft:10,
        marginRight:10,        
    },
    containerMetas:{
        alignItems:"flex-start",
        justifyContent:"center",
    },
    tituloMetas:{
        padding: 10,
        fontSize: 25,
        color:"teal"
    },
    imagemSerraTec:{
        width: 130,
        height: 25,
        marginBottom:10,
    },
    boxMetas:{
        alignItems:"flex-start",
        justifyContent:"center",
    },
    
    textoMetas:{
        padding: 5,
    },
})

export default styles;
