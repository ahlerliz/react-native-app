import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

function Row({ start_at, title, description }) {
    return(
        <View style={styles.view}>
            <View style={styles.cell}><Text>{start_at}</Text></View>
            <View style={styles.cell}><Text>{title}</Text></View>
            <View style={styles.cell}><Text>{description}</Text></View>
            {/* <View style={styles.cell}><Text>{assets}</Text></View> */}
            {/* <View style={styles.cell}><Text>{start_at}</Text></View>
            <View style={styles.cell}><Text>{start_at}</Text></View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    cell: {
        flex: 1, 
        alignSelf: 'stretch',
    },
    view: {
        // flex: 1, 
        alignSelf: 'stretch', 
        flexDirection: 'row',
    }
});

export default Row;