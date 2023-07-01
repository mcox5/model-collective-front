import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/jost';
import styles from "../styles/app";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [fontsLoaded] = useFonts({
    'Jost-Regular': require('../assets/fonts/Jost-VariableFont_wght.ttf'),
  });

  const styles = StyleSheet.create({
    background: {
      backgroundColor: 'black',
      flex: 1,
    },
    text: {
      color: 'white',
      fontFamily: 'Jost-Regular',
      fontSize: 20,
    },
    userPhoto: {
        width: 200,
        height: 200,
        borderRadius: 100, // La mitad del ancho/altura para hacer la imagen redon
    },
  });

  if (!fontsLoaded) {
    return null; // Opcional: Mostrar un componente de carga mientras se cargan las fuentes
  }

  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View>
        <Text style={styles.text}>ModelCollective</Text>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/C4E03AQGrr5XIVb-XMg/profile-displayphoto-shrink_200_200/0/1647736688292?e=1693440000&v=beta&t=YxHc3i6nGWWIClKQZHqq18BPZd15BcNQzHjZwiYe778'
          }}
          style={styles.userPhoto}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
