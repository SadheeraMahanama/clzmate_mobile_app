 
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DetailsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text}>Welcome to the member area</Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    text: {
        color: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
});

export default DetailsScreen; 