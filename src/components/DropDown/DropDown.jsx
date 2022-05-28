import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { Container } from "./styles";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    height: 45,
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    fontSize: 24,
  },
  picker: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default function DropDown({ style, label, items, value, setValue, isFirst, ...props }, ref) {
  return (
    <Container isFirst={isFirst}>
      <Picker
        selectedValue={value}
        onValueChange={(value) => setValue(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label={label} value="Unknown" />

        {
          items.map(({ label, value }, index) => (
            <Picker.Item
              key={index}
              label={label}
              value={value}
            />
          ))
        }
       
      </Picker>
    </Container>
  )
}