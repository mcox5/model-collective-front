import { StyleSheet } from 'react-native';
import { useFonts } from '@expo-google-fonts/jost';



const JostRegularFont = require('../../assets/fonts/Jost-VariableFont_wght.ttf');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontFamily: 'Jost-Regular',
    fontSize: 20,
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});

export default styles
