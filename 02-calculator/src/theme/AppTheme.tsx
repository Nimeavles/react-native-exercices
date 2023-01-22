import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'black',
  },
  result: {
    color: 'white',
    fontFamily: 'system-ui',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  calculatorContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  smallResult: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'system-ui',
    textAlign: 'right',
    fontSize: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});

export default styles;
