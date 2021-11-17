import { BASE_URL } from "./api";
import { getCohort } from './utils';
import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

function Banner({ cohort }) {
    // const cohort = getCohort(BASE_URL);
    // const cohort = 'r1';
    console.log("cohort", cohort);
    console.log(typeof cohort);
    return (
        <View style={styles.view}>
            <View>
                <Image source={require("./assets/rithm.png")} style={styles.image} />
            </View>
            <View>
                <Text style={styles.font}>
                    Rithm {cohort}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignSelf: 'stretch',
        backgroundColor: "#e46b66",
        flexDirection: 'row',
    },
    font: {
        fontSize: 27,
        marginTop: 12,
        marginBottom: 12,
        fontFamily: "Times New Roman",
    },
    image: {
        height: 35,
        width: 35,
        margin: 12,
        marginTop: 10,
    },
});

export default Banner;