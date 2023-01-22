import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  value: string;
  color?: '#9B9B9B' | '#2D2D2D' | '#FF9427';
  wide?: boolean;
  action: (value: string) => void;
};

export const ButtonCalc = ({
  value,
  color = '#2D2D2D',
  wide = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(value)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: wide ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '400',
  },
});
