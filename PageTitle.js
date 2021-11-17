import {BASE_URL} from "./api";
import { getCohort } from './utils';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

function PageTitle({ cohort }){
    // const cohort = getCohort(BASE_URL);
    // const cohort = 'r1';
    console.log("cohort", cohort);
    console.log(typeof cohort);
    return (
        <View style={styles.view}>
            <Text style={styles.font}>
                {cohort}
            </Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     view: {
//         // flex: 1, 
//         alignSelf: 'stretch',
//         marginLeft: 12,
//     },
//     font: {
//         fontSize: 35,
//     },
// });

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

export default PageTitle;