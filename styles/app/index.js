import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';


async function loadFonts() {
  await Font.loadAsync({
    'Jost-Regular': require('../../assets/fonts/Jost-VariableFont_wght.ttf'),
  });
}

loadFonts(); // Llama a la función para cargar las fuentes antes de renderizar la aplicación


const JostRegularFont = require('../../assets/fonts/Jost-VariableFont_wght.ttf');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },

  //Fonts
  texth1: {
    color: 'white',
    fontFamily: 'Jost-Regular',
    fontSize: 20,
  },
  texth2: {
    color: 'white',
    fontFamily: 'Jost-Regular',
    fontSize: 15,
  },
  texth3: {
    color: 'white',
    fontFamily: 'Jost-Regular',
    fontSize: 10,
  },
  textTitle: {
    color: '#f52f57',
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
