import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/app";
import Header from './HomeScreen/components/Header';
import Welcome from './HomeScreen/components/Welcome';

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
      <Header/>
      <Welcome/>
    </SafeAreaView>
  );
};

export default HomeScreen;
