import { View, Text, SafeAreaView, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])
  return (
    <SafeAreaView>
      <Text className="text-red-500">
      {/* Header */}
        <View>
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/C4E03AQGrr5XIVb-XMg/profile-displayphoto-shrink_200_200/0/1647736688292?e=1693440000&v=beta&t=YxHc3i6nGWWIClKQZHqq18BPZd15BcNQzHjZwiYe778",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full">

          </Image>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen
