import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Input(props){
    const [value, setText] = React.useState('');
    return(
        <View>
            <Text>{props.label}: </Text>
            <TextInput
                secureTextEntry={props.password}
                keyboardType={props.type}
                style={styles.input}
                placeholder="amine"
                value={value}
                onChangeText={(value)=>{
                    setText(value)
                    props.update(value)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10
    },
})