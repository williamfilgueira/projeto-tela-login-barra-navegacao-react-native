import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import react from "../../../assets/1200px-React-icon.svg.png";

import styles from "./styles.js";
export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.boxHeader}>
          <Image style={styles.imagemReact} source={react} />
          <Text style={styles.titulo}>React-Native</Text>
          <Text style={styles.textHeader}>
            - React Native é uma biblioteca Javascript criada pelo Facebook. É
            usada para desenvolver aplicativos para os sistemas Android e iOS de
            forma nativa.
          </Text>
          <View style={styles.containerTexto}>
            <Text style={styles.tituloBody}>História</Text>
            <View style={styles.textoHistoria}>
              <Text style={styles.textoBody}>
                Em 2012 Mark Zuckerberg comentou, "O maior erro que cometemos
                como empresa foi apostar demais em HTML5 em oposição ao nativo".
                Ele prometeu que o Facebook logo entregaria uma melhor
                experiência móvel. Dentro do Facebook, Jordan Walke encontrou
                uma maneira de gerar elementos de interface do usuário para iOS
                a partir de um thread JavaScript em segundo plano. Eles
                decidiram organizar um Hackathon interno para aperfeiçoar esse
                protótipo para poder criar aplicativos nativos com essa
                tecnologia Após meses de desenvolvimento, o Facebook lançou a
                primeira versão do React em 2015. Durante uma palestra técnica ,
                Christopher Chedeau explicou que o Facebook já estava usando o
                React Native em produção.
              </Text>
            </View>
          </View>
          <View style={styles.containerTextoImplementacao}>
            <Text style={styles.tituloBody}>Implementação</Text>
            <View style={styles.textoHistoria}>
              <Text style={styles.textoImplementacao}>
                Os princípios de funcionamento do React Native são virtualmente
                idênticos ao ReactJs, exceto que o React Native não manipula o
                DOM através do Virtual DOM. Ele é executado em um processo em
                segundo plano que interpreta o JavaScript escrito pelos
                desenvolvedores diretamente no dispositivo final e se comunica
                com a plataforma nativa por meio de uma serialização, uma ponte
                assíncrona e em lote. O React Native não usa HTML. Em vez disso,
                trabalha com Javascript puro com sintaxe JSX.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
