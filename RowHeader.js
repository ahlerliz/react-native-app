import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

function RowHeader({ start_at, title, description }) {
    return (
        <View style={styles.view}>
            <View style={styles.cell}><Text style={styles.font}>{start_at}</Text></View>
            <View style={styles.cell}><Text style={styles.font}>{title}</Text></View>
            <View style={styles.cell}><Text style={styles.font}>{description}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 12,
        marginBottom: 10,
    },
    font: {
        fontSize: 20,
    },
    view: {
        // flex: 1, 
        alignSelf: 'stretch', 
        flexDirection: 'row',
        // alignContent: 'space-between',
        // alignContent: 'space-around',
    }
});

export default RowHeader;