import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import colors from '../styles/colors'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: colors.Transparence,
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: colors.white,
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>