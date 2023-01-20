import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: '+1' | '-1';
  handleState: React.Dispatch<React.SetStateAction<number>>;
  position?: 'bl' | 'br';
};

export const Fab = ({title, handleState, position}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handleState(prev => (prev += Number(title)))}
      style={position == 'bl' ? styles.fabLeft : styles.fabRight}>
      <View style={styles.btn}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#5656d6',
    borderRadius: 100,
    padding: 5,
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  fabLeft: {
    position: 'absolute',
    bottom: 60,
    left: 25,
  },
  fabRight: {
    position: 'absolute',
    bottom: 60,
    right: 25,
  },
});
