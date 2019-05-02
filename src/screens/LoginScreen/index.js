import React, { Component } from 'react'
import { Content, Button, Text, Item, Input, Label, Container, Form, Toast } from 'native-base'

import { Image, View, SafeAreaView, LinearGradient, ScrollView, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import styles from './styles'
import imageLogo from '../../assets/imageLogo.jpg'
import logo from '../../assets/logo.jpg'


class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            login: [{
                email: 'teste@teste.com',
                senha: '123456'
            }]
        };
    }

  

    _login() {
        let check = (this.state.email.includes('@') && this.state.email.includes('.com')) ? false : true;

        if (check) {
            Toast.show({
                text: "Ops... O E-mail  esta inválidos",
                type: "danger",
                duration: 3000
            })
        }
        if (this.state.senha.length < 6) {
            Toast.show({
                text: "Ops... A Senha esta inválidos",
                type: "danger",
                duration: 3000
            })
        }

        if ((this.state.email && this.state.senha) == (this.state.login[0].email && this.state.login[0].senha)) {

            return this.props.navigation.navigate('HomeScreen');
        }

    }


    render() {

        console.log(this.props, '_______')

        const { navigation: { navigate }, handleSubmit, submitting, pristine } = this.props;
        return (
            <Container style={styles.mainContainer}>

                <ImageBackground
                    resizeMode="cover"
                    style={styles.imageLogo}
                    blurRadius={3}
                    source={imageLogo}
                    resizeMode="stretch"
                >
                    <View style={styles.fundo}>
                        <ScrollView>

                            <View style={styles.containerHeader}>
                                <View style={styles.containerLogo}>
                                    <View style={styles.logo}>
                                        <Image source={logo} style={styles.logo_icon} />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.containerBody}>

                                <Text style={styles.text}>Faça o login para continuar</Text>

                                <View style={styles.formContainer}>
                                    <Form>
                                        <View style={styles.inputsContainer}>


                                            <Item floatingLabel>

                                                <Label >E-mail</Label>

                                                <Input
                                                    value={this.props.login}
                                                    keyboardType={'email-address'}
                                                    autoCapitalize={'none'}
                                                    style={{ color: '#fff', width: '100%' }}
                                                    onChangeText={(text) => {
                                                        this.setState({ email: text });
                                                    }}
                                                />
                                            </Item>


                                            <Item floatingLabel>

                                                <Label >Senha</Label>

                                                <Input
                                                    value={this.props.login}
                                                    autoCapitalize={'none'}
                                                    style={{ color: '#fff', width: '100%' }}
                                                    textContentType="password"
                                                    secureTextEntry={true}
                                                    onChangeText={(text) => {
                                                        this.setState({ senha: text });
                                                    }}
                                                />
                                            </Item>
                                            <View >

                                            </View>

                                        </View>

                                        <Button
                                            full
                                            style={styles.mainButton}
                                            disabled={pristine || submitting}
                                            onPress={() => this._login()}
                                        >
                                            <Text style={styles.mainButtonText}>Entrar</Text>
                                        </Button>

                                    </Form>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </ImageBackground>
            </Container>

        )
    }
}

export { LoginScreen }
