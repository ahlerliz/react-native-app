import {BASE_URL} from "./api";
import { getCohort } from './utils';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';


function Banner(){
    const cohort = getCohort(BASE_URL)
    return (
        <View style={styles.view}>
            <Text style={styles.font}>
                {cohort}
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    view: {
        // flex: 1, 
        alignSelf: 'stretch',
        backgroundColor: "#e46b66",
    },
    font: {
        fontSize: 35,
        marginLeft: 12,
    },
});

export default Banner;