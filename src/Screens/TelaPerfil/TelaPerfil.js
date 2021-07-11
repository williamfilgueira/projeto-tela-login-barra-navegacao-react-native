import React from 'react';
import { View, Text, Image, ScrollView, } from 'react-native';

import will from '../../../assets/will-perfil.jpg';
import linkedin from '../../../assets/linkedin.png';
import gitHub from '../../../assets/git.png';
import gmail from '../../../assets/gmail.png';
import serratec from '../../../assets/serratec.png';

import styles from './styles';
export default function TelaPerfil(){
    return (
        <View style={styles.container}>
            <View style={styles.boxImagem}>
                <Image source={will} style={styles.imagemPerfil}/>
            </View>
            <Text style={styles.titulo}>William Filgueira</Text>
            <View style={styles.boxTextoPerfil}>
                <Text style={styles.textoPerfil}>Estudante de programação e nas horas vagas empreendedor</Text>
            </View>
            <View style={styles.boxInformacoes}>
                <View style={styles.boxIcon}>
                    <Image style={styles.iconLinkedin} source={linkedin}/>
                    <Image style={styles.iconGitHub} source={gitHub}/>
                    <Image style={styles.iconGmail} source={gmail}/>
                </View>
                    <ScrollView>
                        <View style={styles.linhaSeparadora}>
                            <Text style={styles.textoContato}>Acima desse texto é possível encontrar meus principais 
                            canais de comuicação, sigam-me para saber mais sobre os projetos que estou criando ou
                            contruibuindo.</Text>
                        </View>
                        <View style={styles.containerMetas}>
                            <Text style={styles.tituloMetas}>
                                - Metas 2021
                            </Text>
                            <View style={styles.boxSerraTec}>
                                <Text style={styles.item1}>- Formação SerraTec</Text>
                                <Image style={styles.imagemSerraTec} source={serratec}/>
                            </View>

                            <View style={styles.boxMetas}>
                                <Text style={styles.textoMetas}> - Entrar no mercado para ganhar e melhorar minhas skills.</Text>
                                <Text style={styles.textoMetas}> - Me aprofundar nos conceitos aprendidos para poder escolher uma especialização.</Text>
                                <Text style={styles.textoMetas}> - Ter a oportunidade de por em prática todos conhecimentos adquiridos em uma empresa. </Text>
                                <Text style={styles.textoMetas}> - Conhecer mais pessoas que possam atribuir na minha carreira, melhorando assim meu networking. </Text>
                                <Text style={styles.textoMetas}> - Tomar vacina covid-19. </Text>
                            </View>

                        </View>
                    </ScrollView>
            </View>          
        </View>
    );
}