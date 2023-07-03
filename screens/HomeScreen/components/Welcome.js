import { View, ImageBackground, ScrollView } from 'react-native'
import styles from "../../../styles/app";
import  homeScreenStyles from "../../../styles/HomeScreen";
import React from 'react'
import { Text, Card, Button, Chip } from "react-native-paper";

const Welcome = () => {
  return (
    <View style={{ flexDirection:'column' }}>
      <Text style={styles.text} variant='headlineSmall'>Welcome</Text>
      <Text style={styles.textBold} variant='headlineSmall'>To our look books!</Text>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content style={[homeScreenStyles.overlayText]}>
          <Text style={styles.textBold} variant='headlineSmall'>Find tailored</Text>
          <Text style={styles.textBold} variant='headlineSmall'>made results with AI</Text>
        </Card.Content>
        <Card.Actions style={homeScreenStyles.overlayButtons}>
          <Button mode="contained" onPress={() => console.log('HOLAAAA')} buttonColor='#f52f57'><Text style={styles.textBold}>Take a picture</Text></Button>
          <Button mode="contained" onPress={() => console.log('Pressed')} buttonColor='#f52f57'><Text style={styles.textBold}>Upload a picture</Text></Button>
        </Card.Actions>
      </Card>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent:'center'}}>
          <Chip buttonColor='#333333' onPress={() => console.log('Pressed')} style={{ marginRight: 10, backgroundColor: '#333333' }}><Text style={styles.text}>Recently Added</Text></Chip>
          <Chip buttonColor='#333333' onPress={() => console.log('Pressed')} style={{ marginRight: 10, backgroundColor: '#333333' }}><Text style={styles.text}>Best rated</Text></Chip>
          <Chip buttonColor='#333333' onPress={() => console.log('Pressed')} style={{ marginRight: 10, backgroundColor: '#333333' }}><Text style={styles.text}>Model works</Text></Chip>
          <Chip buttonColor='#333333' onPress={() => console.log('Pressed')} style={{ marginRight: 10, backgroundColor: '#333333' }}><Text style={styles.text}>Campaigns</Text></Chip>
          <Chip buttonColor='#333333' onPress={() => console.log('Pressed')} style={{ marginRight: 10, backgroundColor: '#333333' }}><Text style={styles.text}>Next events</Text></Chip>
        </View>
      </ScrollView>
    </View>
  )
}

export default Welcome
