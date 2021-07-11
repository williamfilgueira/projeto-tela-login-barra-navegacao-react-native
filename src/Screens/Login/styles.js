import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 40,
  },
  imagemLogo: {
    alignItems: "center",
  },
  imagemUsuario: {
    width: 110,
    height: 110,
    borderRadius: 150,
  },
  titulo: {
    marginTop: 20,
    color: "teal",
    fontSize: 20,
  },
  subTitulo: {
    color: "teal",
    fontSize: 15,
  },
  input: {
    marginTop: 50,
    width: 250,
    height: 25,
    borderBottomWidth: 1,
    borderColor: "teal",
  },
  esqueciSenha: {
    marginTop: 9,
    color: "silver",
    textAlign: "right",
    fontSize: 12,
  },
  manterConectado: {
    color: "silver",
    textAlign: "right",
    fontSize: 12,
  },
  containerCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonEnviar: {
    marginTop: 10,
    width: 250,
    height: 35,
    justifyContent: "center",
    backgroundColor: "teal",
    borderRadius: 10,
  },
  buttonTexto: {
    textAlign: "center",
    color: "white",
  },
});

export default styles;
