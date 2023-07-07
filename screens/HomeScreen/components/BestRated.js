import { View, ScrollView } from 'react-native'
import styles from "../../../styles/app"
import { Text, Card, Button, Chip } from "react-native-paper";
import { ChevronRightIcon, StarIcon } from "react-native-heroicons/solid";
import { StarIcon as StarOutline} from "react-native-heroicons/outline";
import  homeScreenStyles from "../../../styles/HomeScreen";
import React from 'react'

const BestRated = () => {

  const bestRatedCards =
    <ScrollView horizontal style={{ marginTop: 10 }}>
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <Card style={{ width: 100, height: 100, marginRight: 10 }}>
          <Card.Cover source={require('../../../assets/images/angie.jpeg')} style={{ width: 100, height: 100 }}/>
        </Card>
        <View style={{ flexDirection: 'column'}}>
          <Text style={[styles.text, {marginTop: 10}]}>Laura Rodriguez</Text>
          <Text style={[styles.textBold, {marginTop: 0}]}>Santiago</Text>
          <View style={{ flexDirection: 'row' }}>
            <StarIcon color='#f52f57' size={20}/>
            <StarIcon color='#f52f57' size={20}/>
            <StarIcon color='#f52f57' size={20}/>
            <StarIcon color='#f52f57' size={20}/>
            <StarOutline color='#f52f57' size={20}/>
          </View>


        </View>
      </View>
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <Card style={{ width: 100, height: 100, marginRight: 10 }}>
          <Card.Cover source={require('../../../assets/images/laura.webp')} style={{ width: 100, height: 100 }}/>
        </Card>
        <View style={{ flexDirection: 'column'}}>
          <Text style={[styles.text, {marginTop: 10}]}>Laura Rodriguez</Text>
          <Text style={[styles.textBold, {marginTop: 0}]}>Santiago</Text>
          <View style={{ flexDirection: 'row' }}>
            <StarIcon color='#f52f57' size={20}/>
            <StarIcon color='#f52f57' size={20}/>
            <StarIcon color='#f52f57' size={20}/>
            <StarOutline color='#f52f57' size={20}/>
            <StarOutline color='#f52f57' size={20}/>
          </View>


        </View>
      </View>

    </ScrollView>

  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
        <Text style={styles.textBold} variant='titleSmall'>Best rated</Text>
        <Text style={styles.text} variant='titleSmall'>See all<ChevronRightIcon size={30} color={'white'}/></Text>
      </View>
      {bestRatedCards}
    </View>
  )
}

export default BestRated
