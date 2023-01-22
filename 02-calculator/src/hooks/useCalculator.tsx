import {useState, useRef} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const addNumber = (value: string) => {
    if (number.includes('.') && value === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (value === '.') {
        setNumber(number + value);
      } else if (value === '0' && number.includes('.')) {
        setNumber(number + value);
      } else if (value !== '0' && !number.includes('.')) {
        setNumber(value);
      } else if (value === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + value);
      }
    } else {
      setNumber(number + value);
    }
  };

  const postiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let numTemp = number;

    if (number.includes('-')) {
      negative = '-';
      numTemp = number.substring(1);
    }

    if (number.length > 1) {
      setNumber(negative + number.slice(0, number.length - 1));
    } else {
      setNumber('0');
    }
  };

  const changePreviousNum = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideBtn = () => {
    changePreviousNum();
    lastOperation.current = Operators.divide;
  };

  const multiplyBtn = () => {
    changePreviousNum();
    lastOperation.current = Operators.multiply;
  };

  const subtractBtn = () => {
    changePreviousNum();
    lastOperation.current = Operators.subtract;
  };

  const addBtn = () => {
    changePreviousNum();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    if (number === '0') return;

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(String(num1 + num2));
        break;
      case Operators.subtract:
        setNumber(String(num2 - num1));
        break;
      case Operators.multiply:
        setNumber(String(num1 * num2));
        break;
      case Operators.divide:
        setNumber(String(num2 / num1));
        break;
    }

    setPrevNumber('0');
  };

  return {
    calculate,
    clean,
    addBtn,
    divideBtn,
    subtractBtn,
    number,
    prevNumber,
    postiveNegative,
    btnDelete,
    multiplyBtn,
    addNumber,
  };
};
