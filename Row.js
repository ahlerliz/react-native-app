import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


/** Component for single row in the "table" in app
 * Props: start_at, title, description, type
 * State: none
 * Events: none
 */
function Row({ start_at, title, description, type }) {
    return(
        <View style={styles.view}>
            <View style={styles.cell}><Text style={styles.font}>{start_at}</Text></View>
            <View style={styles.cell}>
                <Text style={styles.font}>{title} </Text>
                <Text style={styles.activity}>({type})</Text>
            </View>
            <View style={styles.cell}><Text style={styles.font}>{description}</Text></View>
        </View>
    )
};

const styles = StyleSheet.create({
    cell: {
        flex: 1, 
        alignSelf: 'stretch',
    },
    view: {
        alignSelf: 'stretch', 
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 12,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: "#dee2e6",
    },
    font: {
        fontFamily: "Times New Roman",
    },
    activity: {
        color: "gray",
        fontStyle: 'italic',
        fontFamily: "Times New Roman",
    }
});

export default Row;