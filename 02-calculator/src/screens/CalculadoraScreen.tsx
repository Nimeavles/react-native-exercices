import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';
import styles from '../theme/AppTheme';

export const CalculadoraScreen = () => {
  const {
    calculate,
    clean,
    addBtn,
    divideBtn,
    subtractBtn,
    postiveNegative,
    btnDelete,
    multiplyBtn,
    addNumber,
    number,
    prevNumber,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc value="C" color="#9B9B9B" action={clean} />
        <ButtonCalc value="+/-" color="#9B9B9B" action={postiveNegative} />
        <ButtonCalc value="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc value="/" color="#FF9427" action={divideBtn} />
      </View>

      <View style={styles.row}>
        <ButtonCalc value="7" action={addNumber} />
        <ButtonCalc value="8" action={addNumber} />
        <ButtonCalc value="9" action={addNumber} />
        <ButtonCalc value="X" color="#FF9427" action={multiplyBtn} />
      </View>

      <View style={styles.row}>
        <ButtonCalc value="4" action={addNumber} />
        <ButtonCalc value="5" action={addNumber} />
        <ButtonCalc value="6" action={addNumber} />
        <ButtonCalc value="-" color="#FF9427" action={subtractBtn} />
      </View>

      <View style={styles.row}>
        <ButtonCalc value="1" action={addNumber} />
        <ButtonCalc value="2" action={addNumber} />
        <ButtonCalc value="3" action={addNumber} />
        <ButtonCalc value="+" color="#FF9427" action={addBtn} />
      </View>

      <View style={styles.row}>
        <ButtonCalc value="0" wide action={addNumber} />
        <ButtonCalc value="." action={addNumber} />
        <ButtonCalc value="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
