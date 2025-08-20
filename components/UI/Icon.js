import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonIcons({ name, color, size, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.plus} >
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  plus: {
    padding:3,
    paddingHorizontal: 12,
    bottom:3
  },
  pressed: {
    opacity: 0.75,
  },
});
