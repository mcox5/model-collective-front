import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/jost';
import styles from "../styles/app";
import { Bars3Icon } from "react-native-heroicons/outline";

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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
        <Text style={styles.texth1}>Model<Text style={styles.textTitle}>Collective</Text></Text>
        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
          <Image
            source={{
              uri: 'https://media.licdn.com/dms/image/C4E03AQGrr5XIVb-XMg/profile-displayphoto-shrink_200_200/0/1647736688292?e=1693440000&v=beta&t=YxHc3i6nGWWIClKQZHqq18BPZd15BcNQzHjZwiYe778'
            }}
            style={styles.userPhoto}
          />
          <Bars3Icon size={30} color={'white'}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
