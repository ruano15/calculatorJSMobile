import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";
import colors from "../styles/colors";

const styles = StyleSheet.create({

    button: {
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: colors.grayLight,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: colors.darkgray
    },
    operationButton:{
        color: colors.white,
        backgroundColor: colors.orange,
    },
    buttonDouble:{
        width: (Dimensions.get('window').width/4)*2,
    },
    tripleButton:{
        width: (Dimensions.get('window').width/4)*3,
    }
})

export default props => {

    const stylesButton = [styles.button]
    if (props.double) styles.push(styles.buttonDouble)
    if (props.triple) styles.push(styles.buttonTriple)
    if (props.operation) styles.push(styles.operationButton)

    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}