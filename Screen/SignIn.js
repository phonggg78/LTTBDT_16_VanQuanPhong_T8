import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, { useState } from 'react';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function SignInScreen() {
    const navigation = useNavigation();
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[phone,setPhone]=useState('');
    const[email,setEmail]=useState('');
    const onRegister = () => {
        let data = {
        username : username,
        password : password,
        phone : phone,
        email : email
        }

        console.log(data);
        axios.post('https://65488e80dd8ebcd4ab231bab.mockapi.io/user',data).then((response)=>{
            if(response.data){
               navigation.navigate('LoginScreen');
            }
        }
        )
        .catch((error)=> console.log(error)
        )
    }
    return(
        <View style={styles.wrapper}>
            <Text style={styles.title}>REGISTER</Text>
            <Ionicons name="person" size={30} color="black" style={{position:'absolute',top :145,left:45}}/>
            <Ionicons name="lock-closed" size={30} color="black" style={{position:'absolute',top :220,left:45}}/>
            <Ionicons name="call" size={30} color="black" style={{position:'absolute',top :290,left:45}}/>
            <Ionicons name="mail" size={30} color="black" style={{position:'absolute',top :368,left:45}}/>
            <TextInput style={styles.input} placeholder="Name" onChangeText={setUsername}/>
            <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword}/>
            <TextInput style={styles.input} placeholder="Phone" onChangeText={setPhone}/>
            <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail}/>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn} onPress={onRegister}>
                    <Text style={styles.btnTxt}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height  : '100%',
        alignItems: 'center',
        backgroundColor: '#E3C000',
    },
    title: {
        fontSize: 30,
        fontWeight: 700,
        fontFamily: 'Roboto',
        marginTop: 80,
        marginLeft: 30,
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
        position: 'relative',
    },
    input: {
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 55,
    },
    inputImg: {
        width: 32,
        height: 32,
        position: 'absolute',
    },
    inputImg1: {
        left: 40,
        top: 30,
    },
    inputImg2: {
        left: 40,
        top: 105,
    },
    inputImg3: {
        right: 50,
        bottom: 10,
    },
    btnWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
    },
    btn: {
        backgroundColor: '#000',
        width: 250,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Roboto',
    },
    txtCreateAccount: {
        fontSize: 20,
        width: 230,
        fontWeight: 100,
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 50,
        backgroundColor: 'white',
        borderRadius: 10,
    }
})