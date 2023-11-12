import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
export default function LoginScreen() {
    const navigation = useNavigation();
    const [data,setData]=useState([]); 
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    // const loginAPI = (username,password) => {
    //   return  axios.post("https://65488e80dd8ebcd4ab231bab.mockapi.io/user",{username,password});
    // }
    // const handleLogin = async () => {
    //         if(!username || !password){
    //             alert('FAIL!')
    //             return;
    //         }
    //         let res = await loginAPI(username,password);
    //         if(res){
    //             alert('SUCCESS!')
    //         }
    // }
    const getData = async () => {
        const response = await fetch('https://65488e80dd8ebcd4ab231bab.mockapi.io/user');
         const data = await response.json();
        setData(data);
    }
    useEffect(()=>{
        getData();
    },[])
    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Name" onChangeText={setUsername}/>
                <TextInput style={styles.input} placeholder="Password " onChangeText={setPassword}/>
                <Image style={[styles.inputImg, styles.inputImg1]} source={require('../assets/avatar_usera1.png')} />
                <Image style={[styles.inputImg, styles.inputImg2]} source={require('../assets/lock.png')} />
                <Image style={[styles.inputImg, styles.inputImg3]} source={require('../assets/eye1.png')} />
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn} 
                onPress={()=>{
                    data.forEach((item)=>{
                        if(item.username==username && item.password==password){
                            navigation.navigate('NoteScreen');
                        }
                    })
                }}>
                    <Text style={styles.btnTxt}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.txtCreateAccount}onPress={()=>{
                navigation.navigate('SignInScreen');
            }}>CREATE ACCOUNT</Text>
        </View>
     );
}


const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E3C000'
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
        width: 330,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Roboto',
    },
    txtCreateAccount: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 50,
    }
})