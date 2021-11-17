import {BASE_URL} from "./api";
import { getCohort } from './utils';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';


function PageTitle(){
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
        marginLeft: 12,
    },
    font: {
        fontSize: 35,
    },
});

export default PageTitle;