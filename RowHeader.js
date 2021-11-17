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
        marginBottom: 5,
        marginTop: 5,
    },
    font: {
        fontSize: 20,
        fontFamily: "Times New Roman",
        fontWeight: 'bold',
    },
    view: {
        // flex: 1, 
        alignSelf: 'stretch', 
        flexDirection: 'row',
        marginTop: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#dee2e6",
        marginLeft: 12,
        // alignContent: 'space-between',
        // alignContent: 'space-around',
    }
});

export default RowHeader;