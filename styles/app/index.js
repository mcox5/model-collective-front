import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';


async function loadFonts() {
  await Font.loadAsync({
    'Jost-Regular': require('../../assets/fonts/Jost-VariableFont_wght.ttf'),
  });
}

styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
})

    //Fonts
loadFonts().then(() => {

  const JostRegularFont = require('../../assets/fonts/Jost-VariableFont_wght.ttf');

  styles.texth1 = {
    color: 'white',
    fontFamily: 'Jost-Regular',
    fontSize: 20,
    },
  styles.texth2 = {
    color: 'white',
    fontFamily: 'Jost-Regular',
    fontSize: 15,
    },
  styles.texth3 =  {
    color: 'white',
    fontFamily: 'Jost-Regular',
    fontSize: 10,
    },
  styles.textTitle = {
    color: '#f52f57',
    fontFamily: 'Jost-Regular',
    fontSize: 20,
    }
  });
// Llama a la función para cargar las fuentes antes de renderizar la aplicación

export default styles
