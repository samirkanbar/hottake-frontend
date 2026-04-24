import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient"

type PostCardProps = {
    username: string;
    created_at: string;
    title: string;
    content: string;
}

const PostCard: React.FC<PostCardProps> = ({ username, created_at, title, content }) => {
    return(
        <TouchableOpacity>
          <View
            style={styles.button}>
            <View style={styles.header}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.timestamp}> {" • "} {created_at}</Text>
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <Text style={styles.content}>{content}</Text>
            </View>
          </View>
        </TouchableOpacity>
    )
}

export default PostCard;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    height: 100,
    width: 350,
    justifyContent: 'center',
    padding: 12,
    marginVertical: 6,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: "#333",
  },
  username: {
    fontWeight: "bold",
    marginRight: 4,
  },
  timestamp: {
    color: "gray",
    fontSize: 12,
  },
});