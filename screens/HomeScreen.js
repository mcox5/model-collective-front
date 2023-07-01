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
