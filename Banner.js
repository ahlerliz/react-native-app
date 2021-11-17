import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';


/** Component for the Page title in app
 * Props: cohort
 * State: none
 * Events: none
 */
function Banner({ cohort }) {
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
};

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