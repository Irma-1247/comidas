import { AppRegistry } from "react-native";
import React from "react";
import { View, FlatList, SafeAreaView, StyleSheet, Text, Image } from 'react-native'
import { Card } from 'react-native-elements'

const DATA = [
    {
        id: '1',
        title: 'Pupusas',
        src:require('./src/imgs/pupusas.jpg'),
        content: 'Ingredientes: Frijoles, quesillo, masa de maíz o arroz y aceite.'
    },
    {
        id: '2',
        title: 'Yuca Frita',
        src:require('./src/imgs/yuca.jpg'),
        content: 'Ingredientes: Yuca, sal, tomates, pepesca, repollo y aceite.'
    },
    {
        id: '3',
        title: 'Sopa de patas',
        src:require('./src/imgs/sopa_patas.jpg'),
        content: 'Ingredientes: Patas de vaca, tripa de res, yuca, plátano y ejotes.'
    },
    {
        id:'4',
        title:'Tamales de pisque',
        src:require('./src/imgs/tamal.jpg'),
        content: 'Ingredientes: Hojas de huerta, cal, maíz, manteca de cerdo y frijoles'
    }
];

//Esto se imprime por cada elemento del array
const Item = ({ title, img, content }) => (
    <Card containerStyle={{backgroundColor:'#D9D9D9',borderRadius:8}}>
    <View style={styles.disp2}>
    <Image style={styles.img} source={img} />
    <View style={styles.disp}>
    <Card containerStyle={{marginTop:0,borderRadius:8}}>
    <Text style={styles.subtitle}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
    </Card>
    </View>
    </View>
    </Card>
);

//Llama a Item para imprimir cada item que es pasado
const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} content={item.content}/>
);

//FlatList permite recorrer cada elemento del array y es pasado cada uno para imprimir
const App = () => {
    return(
        <SafeAreaView style={styles.area}>
        <Card containerStyle={{backgroundColor:'#D9A404',borderRadius:8}}>
        <Text style={styles.title}>Comidas típicas salvadoreñas</Text>
        </Card>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    area:{
        flex: 1,
        backgroundColor:'#0D2673'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 25,
        textAlign:'center',
        textDecorationLine:'underline'
    },
    content:{
        fontSize: 20,
        textAlign:'justify'
    },
    img:{
        width:80,
        height:80
    },
    disp:{
        flex:1
    },
    disp2:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    }
});

AppRegistry.registerComponent("comidas", () => App);