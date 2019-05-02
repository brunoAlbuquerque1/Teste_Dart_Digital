import React, { Component } from 'react'
import styles from './styles'
import { Content, Button, Text, Container, Form, Card, Body, CardItem, Item, Input } from 'native-base'
import { Image, View, SafeAreaView, TouchableWithoutFeedback, ImageBackground, StatusBar, ScrollView, FlatList } from 'react-native'
import { getAllRepository } from '../../service/getRespository-service'

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repositorios: [],
            pesquisa_repositorio: ''
        };
    }
    
    componentDidMount(){
        this._getReposit()
    }


    _getReposit() {

        getAllRepository().then((data) => {
            this.setState({ repositorios: data.data });
        }).catch((err) => {
            console.log(err, 'err')
        });
    }

    _filtroRepositorio = () => {
        if (this.state.pesquisa_repositorio.length < 3) { return this.state.repositorios; }
        let lista = this.state.repositorios.filter((item) => {

            if (item.name.toLowerCase().indexOf(this.state.pesquisa_repositorio.toLowerCase()) >= 0 || this.state.pesquisa_repositorio == '') {
                console.log('_ACHEI ALGUMA VOISA')
                return true;
            } else {

                return false;
            }

        });

        return lista;
    }

    _renderItem = ({ item }) => (

        <TouchableWithoutFeedback >

            <View style={styles.card}>

                <View style={styles.cardContainer}>

                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', }} >

                        <View style={{ flex: 5, paddingRight: 25, }} >

                            <Text note style={styles.data}>Nome do Repositorio: {item.name}</Text>

                            <Text style={styles.desc}>Descrição: {item.description}</Text>

                            <Text style={[styles.desc, { marginTop: 15 }]}>URL: {item.url}</Text>

                        </View>



                    </View>

                </View>

            </View>

        </TouchableWithoutFeedback>

    );


    render() {
        const { navigation: { navigate }, handleSubmit, submitting, pristine } = this.props;
        return (

            <Container style={styles.container}>
                <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>

                    <Input
                        autoCapitalize={'words'}
                        onChangeText={(txt) => { this.setState({ pesquisa_repositorio: txt }) }}
                        style={styles.search} placeholder={'Pesquise o nome do repositorio'}>
                    </Input>
                </View>

                <View style={styles.inercontainer}>

                    <FlatList

                        data={this._filtroRepositorio()}
                        keyExtractor={item => item.id}
                        renderItem={this._renderItem}
                        onEndReached={this._handleMore}
                        ListEmptyComponent={this._renderEmptyTablePlaceholder}
                        ListFooterComponent={() => <View style={{ height: 80, }} />}


                    />

                </View>
            </Container>

        )
    }
};


export { HomeScreen }
