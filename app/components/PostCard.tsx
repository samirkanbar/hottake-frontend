import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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
            <View style={styles.header}>
                <Text style={styles.username}>{post.username}</Text>
                <Text style={styles.timestamp}> {" • "} {post.created_at}</Text>
            </View>
            <View>
                <Text style={styles.title}>{post.title}</Text>
            </View>
            <View>
                <Text style={styles.content}>{post.content}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PostCard;

const styles = StyleSheet.create({
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