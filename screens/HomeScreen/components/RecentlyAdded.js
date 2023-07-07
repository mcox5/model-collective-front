import { View, ScrollView } from 'react-native'
import styles from "../../../styles/app"
import { Text, Card, Button, Chip } from "react-native-paper";
import { ChevronRightIcon, HeartIcon } from "react-native-heroicons/outline";
import  homeScreenStyles from "../../../styles/HomeScreen";
import React from 'react'

const RecentlyAdded = () => {

  const modelCards =
    <ScrollView horizontal style={{ marginTop: 10 }}>
      <View style={{ flexDirection: 'column' }}>
        <Card style={{ width: 120, height: 150, marginRight: 10 }}>
          <Card.Cover source={require('../../../assets/images/angie.jpeg')} style={{ width: 120, height: 150 }}/>
          <Card.Content style={{ position: 'absolute', top: 0, right: -15 }}>
            <HeartIcon size={25} color={'#f52f57'} />
          </Card.Content>
        </Card>
        <Text style={[styles.text, {marginTop: 10}]}>Laura Rodriguez</Text>
        <Text style={[styles.textBold, {marginTop: 0}]}>Santiago</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Card style={{ width: 120, height: 150, marginRight: 10 }}>
          <Card.Cover source={require('../../../assets/images/laura.webp')} style={{ width: 120, height: 150 }}/>
          <Card.Content style={{ position: 'absolute', top: 0, right: -15 }}>
            <HeartIcon size={25} color={'#f52f57'} />
          </Card.Content>
        </Card>
        <Text style={[styles.text, {marginTop: 10}]}>Mary Simpson</Text>
        <Text style={[styles.textBold, {marginTop: 0}]}>Santiago</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Card style={{ width: 120, height: 150, marginRight: 10 }}>
          <Card.Cover source={require('../../../assets/images/angie.jpeg')} style={{ width: 120, height: 150 }}/>
          <Card.Content style={{ position: 'absolute', top: 0, right: -15 }}>
            <HeartIcon size={25} color={'#f52f57'} />
          </Card.Content>
        </Card>
        <Text style={[styles.text, {marginTop: 10}]}>Laura Rodriguez</Text>
        <Text style={[styles.textBold, {marginTop: 0}]}>Santiago</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Card style={{ width: 120, height: 150, marginRight: 10 }}>
          <Card.Cover source={require('../../../assets/images/laura.webp')} style={{ width: 120, height: 150 }}/>
          <Card.Content style={{ position: 'absolute', top: 0, right: -15 }}>
            <HeartIcon size={25} color={'#f52f57'} />
          </Card.Content>
        </Card>
        <Text style={[styles.text, {marginTop: 10}]}>Laura Rodriguez</Text>
        <Text style={[styles.textBold, {marginTop: 0}]}>Santiago</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Card style={{ width: 120, height: 150, marginRight: 10 }}>
          <Card.Cover source={require('../../../assets/images/angie.jpeg')} style={{ width: 120, height: 150 }}/>
          <Card.Content style={{ position: 'absolute', top: 0, right: -15 }}>
            <HeartIcon size={25} color={'#f52f57'} />
          </Card.Content>
        </Card>
        <Text style={[styles.text, {marginTop: 10}]}>Laura Rodriguez</Text>
        <Text style={[styles.textBold, {marginTop: 0}]}>Santiago</Text>
      </View>

    </ScrollView>

  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
        <Text style={styles.textBold} variant='titleSmall'>RecentlyAdded</Text>
        <Text style={styles.text} variant='titleSmall'>See all<ChevronRightIcon size={30} color={'white'}/></Text>
      </View>
      {modelCards}
    </View>
  )
}

export default RecentlyAdded
