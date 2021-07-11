import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from "react-native";

import usuario from "../../../assets/usuario.png";

import styles from "./styles.js";

export default function TelaLogin() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.boxLogin}>
        <View style={styles.imagemLogo}>
          <Image style={styles.imagemUsuario} source={usuario} />
          <Text style={styles.titulo}>Bem Vindo!</Text>
          <Text style={styles.subTitulo}>entre ou cadastre-se</Text>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              autoCompleteType="email"
              placeholder="Usuário/Email"
            />
            <TextInput
              style={styles.input}
              autoCompleteType="password"
              placeholder="Senha"
            />
            <Text style={styles.esqueciSenha}>Esquecei minha senha</Text>
            <View style={styles.containerCheckBox}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.manterConectado}>Guardar senha</Text>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.buttonEnviar}>
                <Text style={styles.buttonTexto}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}
