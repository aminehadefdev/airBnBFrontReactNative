import React from 'react'
import { StyleSheet, Text, ScrollView, View, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import Input from './Input'

function fetchApi(firstName, lastName, email, password, city, description, birthday){ 
    var Header = new Headers();
    Header.append("Content-Type", "application/json");
    Header.append("Accept", "application/json")

    var User = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        city: city,
        description: description,
        birthday: birthday
    }
    console.log(User)
    var requestOptions = {
        method: 'POST',
        headers: Header,
        body: JSON.stringify(User, 2),
        redirect: 'follow'
    };
    fetch("http://192.168.1.36:8000/api/register/user", requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => error);
}

var { firstName, lastName, email, password, city, description, birthday } = ""

function updateFirstName(data){
    firstName = data
}

function updateLastname(data){
    lastName = data
}

function updateEmeil(data){
    email = data
}

function updatePassword(data){
    password = data
}

function updateCity(data){
    city = data
}

function updateDescription(data){
    description = data
}

function updateBirthday(data){
    birthday = data
}

export default function Signup(){
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>SignUp</Text>
            <View style={styles.containerInput}>
                <Input update={updateFirstName} label="FirstName" />
                <Input update={updateLastname} label="LastName" />
                <Input type="email-address" update={updateEmeil} label="Email" />
                <Input password={true} update={updatePassword} label="Password" />
                <Input update={updateCity} label="City" />
                <Input update={updateDescription} label="Description" />
                <Input update={updateBirthday} label="Birthday" />
            </View>
            <View style={styles.containerBtn}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>{                         
                        fetchApi(firstName, lastName, email, password, city, description, birthday)
                    }}
                >
                    <Text style={styles.textBtn}>ok</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      padding: 20,
      backgroundColor: '#ffffff',
      width: "100%",
    },
    title: {
        fontSize: 80
    },
    containerInput: {

    },
    input: {
        height: 40,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10
    },
    containerBtn:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 15,
    },
    btn: {
        backgroundColor: '#0074d9',
        width: 80,
        height: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textBtn:{
        fontSize: 20,
        color: "white"
    }
});

/**
 *  var Header = new Headers();
    Header.append("Content-Type", "application/json");
    Header.append("Accept", "application/json")

    var User = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        city: city,
        description: description,
        birthday: birthday
    }
    var requestOptions = {
        method: 'POST',
        headers: Header,
        body: JSON.stringify(User, 2),
        redirect: 'follow'
    };
    fetch("http://192.168.43.137:8000/api/register/user", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
 */