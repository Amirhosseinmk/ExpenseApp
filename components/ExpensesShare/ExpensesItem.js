import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {getFormattedDate} from "../../unit/time";
import { useNavigation } from "@react-navigation/native";


export default function ExpensesItem({description,amount,date,id}) {
    const navigation = useNavigation();
    function expensePressHandler(){
        navigation.navigate("ManageExpense",{expenseId : id})
    }
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed} onPress={expensePressHandler}>
      <View style={styles.item}>
        <View>
          <Text style={[styles.textBase,styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}



const styles = StyleSheet.create({
    item:{
        padding:12,
        marginVertical:8,
        backgroundColor:'#3e04c3',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        shadowColor:'#39324a',
        shadowRadius:4,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4

    },
    textBase:{
        color:'#e4d9fd'
    },
    description:{
fontSize:16,
marginBottom:4,
fontWeight:'bold',

    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'#ffff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    amount:{
        color:"#3e04c3",
        fontWeight:'bold'
    },
    pressed:{
        opacity:0.75
    }

})