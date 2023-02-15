import React from "react"
import { TextInput, Text, View, Image, StyleSheet, Dimensions } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import Arrow from "react-native-vector-icons/AntDesign"
import AngularIcon from "react-native-vector-icons/AntDesign"
const { width, height } = Dimensions.get('window')
const Screen1 = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Arrow name="arrowleft" size={30} color='black'/>
                <Text style={{fontSize:20,color:'black',marginLeft:70,fontWeight:'bold'}}>Marty's Pool</Text>
            </View>
            <View style={[styles.search, styles.elevation]}>
                <TextInput
                    placeholder="Search"
                />
                <View style={styles.searchIcon}>
                    <Icon name="search"
                        size={20}
                        color='black' />
                </View>
            </View>
            <Text
                style={styles.text}>
                Select the store's product you'd like to view below
            </Text>
            <View style={[styles.imageWrapper,styles.elevation]}>
                <View style={[styles.elevation,styles.pool]}>
                <Image
                    source={require('./images/pool.png')}
                    style={styles.image} />
                </View>
                <Text
                    style={styles.middle}>
                    Marty's Pools
                </Text>
                <Text style={styles.last}>2 products</Text>
            </View>
            <View
                style={{
                    borderBottomWidth: 1,
                    marginLeft: 25,
                    marginRight: 25,
                    marginTop: 20,
                    marginBottom: 30,
                    borderColor: 'gray'
                }}>
            </View>
            <View style={styles.imageWrapper1}>
                <Image
                    source={require('./images/yepsync.png')}
                    style={styles.imageSquare} />
                <Text style={styles.middle}>YepSync</Text>
                <View>
                    <Text style={styles.last2}>R 347</Text>
                    <Text style={{ marginLeft: 60, fontSize: 10,color:'black' }}>Month-to-month</Text>
                </View>
                <AngularIcon
                    name="right"
                    size={15}
                    style={{ marginLeft: 25 }}
                    color='black' />
            </View>
            <View style={styles.imageWrapper1}>
                <Image
                    source={require('./images/banners.png')}
                    style={styles.imageSquare} />
                <Text style={styles.middle}>Online Banners</Text>
                <View>
                    <Text style={styles.last3}>R 347</Text>
                    <Text
                        style={{ marginLeft: 35, fontSize: 10,color:'black'}}>
                        Month-to-month</Text>
                </View>
                <AngularIcon
                    name="right"
                    size={15}
                    style={{ marginLeft: 20 }}
                    color='black' />
            </View>


        </View>
    )
}
export default Screen1

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F2F2F2',
        marginLeft: 20,
        marginRight:20,
        height:height*0.9
    },
    header:{
        height:70,
        backgroundColor:'white',
        flexDirection:'row',
        paddingTop:20
    },
    search: {
        width: width * 0.8,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent:'space-around',
        margin:20,
        marginTop:40
    },
    searchIcon: {
        position: 'relative',
        marginTop: 13,
        marginLeft: 190
    },
    text: {
        fontSize: 12,
        marginStart: 15,
        marginTop: 15,
        marginBottom: 30,
        color: 'black',
    },
    imageWrapper: {
        width: width * 0.8,
        height:60,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom:40,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    imageWrapper1: {
        width: width * 0.85,
        height:60,
        flexDirection: 'row',
        borderRadius: 15,
        marginBottom:30,
        justifyContent:'center',
        alignItems:'center'
    },
    pool:{
        height:35,
        width:35,
        backgroundColor:'#d3d3d3',
        borderRadius:15,
    },
    
    middle: {
        fontWeight: 'bold',
        marginLeft: 15,
        color: 'black'
    },
    last: {
        fontWeight: 'bold',
        marginLeft: 65,
        color: 'black'
    },
    image: {
        width: width * 0.09,
        height: width * 0.09,
        borderRadius: width * 0.2 / 2,
        backgroundColor: 'white'
    },
    imageSquare: {
        width: width * 0.07,
        height: width * 0.07,
    },
    last2: {
        marginLeft: 100,
        fontWeight: 'bold',
        color: 'black'
    },
    last3: {
        fontWeight: 'bold',
        marginLeft: 70,
        color: 'black'
    },
    elevation: {
        elevation: 20,
        shadowColor: '#d3d3d3',
      },

})