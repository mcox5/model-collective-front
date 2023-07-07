import { View, ScrollView } from 'react-native'
import styles from "../../../styles/app"
import { Text, Card, Button, Chip } from "react-native-paper";
import { ChevronRightIcon, HeartIcon } from "react-native-heroicons/outline";
import  homeScreenStyles from "../../../styles/HomeScreen";
import React from 'react'

const ModelsWorks = () => {

  const cardType1 =
    <View style={{ flexDirection: 'column', marginBottom: 10 }}>
      <Card style={{ width: 180, height: 240, marginRight: 10 }}>
        <Card.Cover source={require('../../../assets/images/angie.jpeg')} style={{ width: 180, height: 240 }}/>
        <Card.Content style={{ position: 'absolute', top: 0, right: -15 }}>
          <HeartIcon size={25} color={'#f52f57'} />
        </Card.Content>
      </Card>
      <Text style={[styles.text, {marginTop: 10}]}>Laura Rodriguez</Text>
      <Text style={[styles.textBold, {marginTop: 0}]}>For Carolina Herrera</Text>
    </View>

  const cardType2 =
    <View style={{ flexDirection: 'column', marginBottom: 10 }}>
      <Card style={{ width: 180, height: 200, marginRight: 10 }}>
        <Card.Cover source={require('../../../assets/images/laura.webp')} style={{ width: 180, height: 200 }}/>
        <Card.Content style={{ position: 'absolute', top: 0, right: -15 }}>
          <HeartIcon size={25} color={'#f52f57'} />
        </Card.Content>
      </Card>
      <Text style={[styles.text, {marginTop: 10}]}>Laura Rodriguez</Text>
      <Text style={[styles.textBold, {marginTop: 0}]}>For Carolina Herrera</Text>
    </View>

  const modelWorksCards =
  <ScrollView column style={{ marginTop: 10 }}>
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column' }}>
        {cardType1}
        {cardType2}
        {cardType2}
        {cardType1}
      </View>
      <View style={{ flexDirection: 'column' }}>
        {cardType2}
        {cardType2}
        {cardType1}
        {cardType2}
      </View>
    </View>
  </ScrollView>

  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
        <Text style={styles.textBold} variant='titleSmall'>Models works</Text>
        <Text style={styles.text} variant='titleSmall'>See all<ChevronRightIcon size={30} color={'white'}/></Text>
      </View>
      {modelWorksCards}
    </View>
  )
}

export default ModelsWorks
