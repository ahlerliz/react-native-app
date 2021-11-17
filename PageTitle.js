import React from "react";
import { StyleSheet, Text, View } from 'react-native';


/** Component for the Page title in app
 * 
 * Props: cohort
 * State: none
 * Events: none
 */
function PageTitle({ cohort }) {
    return (
        <View style={styles.view}>
            <View style={styles.element}>
                <Text style={styles.cohortFont}>
                    Rithm {cohort} 
                </Text>
            </View>
            <View style={styles.element}>
                <Text style={styles.upcomingFont}> 
                    Upcoming
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    cohortFont: {
        fontSize: 32,
        fontFamily: "Times New Roman",
    },
    upcomingFont: {
        fontSize: 27,
        fontFamily: "Times New Roman",
        color: "gray",
        marginTop: 4,
    },
    element: {
        margin: 12,
        marginRight: 0,
    }
});

export default PageTitle;