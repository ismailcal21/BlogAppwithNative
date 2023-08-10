import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      {/* <Text>HomeScreen</Text> */}
      {/* <Button title="Ekle" onPress={addBlogPost} /> */}
      <FlatList
        data={state}
        //keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
            >
              <View style={styles.container}>
                <Text style={styles.text} key={index}>
                  {item.title} {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <EvilIcons name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginVertical: 5,
    borderTopWidth: 1,
    paddingVertical: 5,
    borderColor: "gray",
  },
  text: {
    fontSize: 18,
  },
});
