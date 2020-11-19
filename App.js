import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "./screens/GameScreen";
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  const randomNum = useRef(Math.random()).current;
  const [inputValue, setInputValue] = useState();

  function MyHeader() {
    return (
      <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
          Hello React Native
        </Text>
        <ActivityIndicator
          size="large"
          color="#c1262c"
          style={{ marginBottom: 30 }}
        />
      </View>
    );
  }

  function MyFooter() {
    return (
      <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
        <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30,
          }}
        >
          <Text>Hello again!</Text>
        </View>
        <Button
          onPress={() => Alert.alert(`You tried to search for ${inputValue}`)}
          title="Learn More"
          color="#c1262c"
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setInputValue(text)}
          placeholder={"Type here what you are looking for"}
          value={inputValue}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View
    //   style={{
    //     height: "100%",
    //     flexDirection: "row",
    //     alignItems: "center",
    //   }}
    // >
    //   <View
    //     style={{
    //       flex: 1,
    //       height: "20%",
    //       backgroundColor: "rebeccapurple",
    //       alignSelf: "flex-end",
    //     }}
    //   />
    //   <View style={{ flex: 2, height: "30%", backgroundColor: "crimson" }} />
    //   <View style={{ flex: 3, height: "50%", backgroundColor: "gold" }} />
    // </View>
    // <ScrollView>
    //   <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
    //     <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
    //       Hello React Native
    //     </Text>
    //     <ActivityIndicator
    //       size="large"
    //       color="#c1262c"
    //       style={{ marginBottom: 30 }}
    //     />
    // <FlatList
    //   ListHeaderComponent={MyHeader}
    //   data={[0, 1, 2, 3, 4]}
    //   renderItem={({ item }) => {
    //     return (
    //       <TouchableOpacity
    //         onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
    //       >
    //         <Image
    //           source={{
    //             uri: `https://picsum.photos/500/300?random=${randomNum + item}`,
    //           }}
    //           style={{ width: "100%", height: 160, marginBottom: 30 }}
    //         />
    //       </TouchableOpacity>
    //     );
    //   }}
    //   keyExtractor={(item) => String(item)}
    //   ListFooterComponent={MyFooter}
    // />
    /* <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30,
          }}
        >
          <Text>Hello again!</Text>
        </View>
        <Button
          onPress={() => Alert.alert(`You tried to search for ${inputValue}`)}
          title="Learn More"
          color="#c1262c"
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
      </View>
    </ScrollView> */
  );
}
