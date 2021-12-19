import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
const Qrgenerator = (props) => {
    return (
        <View>
            <QRCode
                value= "https://stackoverflow.com/questions/60688531/how-do-i-pass-a-prop-to-a-navigation-screen-component-react-native"
            />
        </View>
    )
}

export default Qrgenerator

const styles = StyleSheet.create({})
