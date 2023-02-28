import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function TodoList(props){
    return<>
       <View style={styles.itemContainer}>
          <View style={styles.itemLeft}>
             <View style={styles.square}></View>
             <Text style = {styles.item}>{props.text}</Text> 
          </View>
          <View style={styles.circular}></View>
       </View>
    </>
}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:"#FFFFFF",
        padding:15,
        borderRadius:10,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    itemLeft:{
      flexDirection:"row",
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:10,
    },
    item:{
        maxWidth:'80%',
    },
    circular:{
       width:12,
       height:12,
       borderColor: '#55BCF6',
       borderWidth:2,
       borderRadius:5
    }


})