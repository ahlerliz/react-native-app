import { BASE_URL } from "./api";
import { getCohort } from './utils';
import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

function PageTitle({ cohort }) {
    // const cohort = getCohort(BASE_URL);
    // const cohort = 'r1';
    console.log("cohort", cohort);
    console.log(typeof cohort);
    return (
        <View style={styles.view}>
            <View style={styles.element}>
                <Text style={styles.cohortFont}>
                    {cohort} 
                </Text>
            </View>
            <View style={styles.element}>
                <Text style={styles.upcomingFont}> 
                    Upcoming
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        // flex: 1, 
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    cohortFont: {
        fontSize: 27,
        fontFamily: "Times New Roman",
    },
    upcomingFont: {
        fontSize: 27,
        fontFamily: "Times New Roman",
        color: "gray",
    },
    element: {
        margin: 12,
        marginRight: 0,
    }
});

export default PageTitle;