import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface CardProps {
    image: any;
}

const CardView: React.FC<CardProps> = ({ image }) => {
    return(
        <TouchableOpacity>
            <View
                style={styles.button}>
                <Image source={image} style={styles.image} resizeMode="cover" />
            </View>
        </TouchableOpacity>
    )
};

export default CardView;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000",
        borderRadius: 20,
        height: 200,
        width: 300,
        justifyContent: 'center',
        alignItems:'center',
        overflow: "hidden",
    },
    buttonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: '100%',
        position: "absolute",
    },
})