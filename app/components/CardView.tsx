import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CardProps {
    title: string;
}

const CardView: React.FC<CardProps> = ({ title }) => {
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default CardView;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000",
        borderRadius: 20,
        height: 50,
        width: 350,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})