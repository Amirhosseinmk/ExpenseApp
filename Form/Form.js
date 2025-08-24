import React, { useState } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import ButtonForm from "./ButtonForm";
import Button from "../components/UI/Button"
import { getFormatedDate } from "../unit/time";

export default function Form({onCancel, onSubmit,HandleBtwAddAndUpdate,preFilled}) {
  const [value, setValue] = useState({
    amount: preFilled ? preFilled.amount.toString() : '',
    date: preFilled ? getFormatedDate(preFilled.date) : '',
    description: preFilled ? preFilled.description : '',
  });

  function valueChangeHandler(whichObj, newValue) {
    setValue((currentValue) => {
      return { ...currentValue, [whichObj]: newValue };
    });
  }


  function submitHandler(){
    const [year, month , day] = value.date.split("-");
    const localDate = new Date(+year, +month , +day)
    const Data = {
      amount: +value.amount,
      date:localDate,
      description:value.description
    }
    onSubmit(Data)
  }

  return (
    <View style={styles.form}>
      <View style={styles.box}>
        <ButtonForm
          label={"Amount"}
          setLabelConfig={{
            placeholder: "Amount",
            keyboardType: "decimal-pad",
            onChangeText: valueChangeHandler.bind(this, 'amount'), 
            value:value.amount
          }}
        />

        <ButtonForm
          label={"Date"}
          setLabelConfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: valueChangeHandler.bind(this, 'date'),
            maxLength: 10,
            value:value.date
          }}
        />
      </View>

      <ButtonForm
        label={"Description"}
        setLabelConfig={{
          placeholder: "Description",
          keyboardType: "default",
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "none",
          onChangeText:valueChangeHandler.bind(this , 'description'),
          value:value.description
        }}
      />
       <View style={styles.buttons}>
                  <Button mode="flat" onPress={onCancel}>Cancel</Button>
                  <Button onPress={submitHandler}>{HandleBtwAddAndUpdate}</Button>
              </View>
      </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 15,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20
    }
});
