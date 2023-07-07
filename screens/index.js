import React, { useLayoutEffect } from 'react';
import { SafeAreaView , ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/app";
import Header from './HomeScreen/components/Header';
import Welcome from './HomeScreen/components/Welcome';
import RecentlyAdded from './HomeScreen/components/RecentlyAdded';
import BestRated from './HomeScreen/components/BestRated';


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView column style={{ marginTop: 10 }}>
          {/* Header */}
          <Header/>
          <Welcome/>
          <RecentlyAdded/>
          <BestRated />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
