import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { YellowBox } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
export default function NoteScreen(navigate) {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://65488e80dd8ebcd4ab231bab.mockapi.io/notedata')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    },[]);
    const delteNote = async(id) => {
        let url = 'https://65488e80dd8ebcd4ab231bab.mockapi.io/notedata'
        let result = await fetch(`${url}/${id}`,{
            method: 'delete',
        });
        result = await result.json();
        if(result){
           navigation.navigate('NoteScreen');
            
        }
    }
    return (
        <View style={styles.wrapper}>
             <View style ={{ margin:10,width:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Ionicons name="arrow-back" size={24} color="gray" style={{marginLeft:15}} onPress={() => navigation.goBack()}/>
              <Text style={{fontSize:'24px',fontFamily:'Inter',left:-150}}>Tất cả ghi chú</Text>
          </View>
        {
            data.map((item) => {
                return (
                <View style={styles.note}>
                    <View style={{width: '80%',height: '100%',backgroundColor: '#fff'}}>
                        <Text style={{fontSize: 20,fontWeight: 700,fontFamily: 'Roboto',marginLeft: '5px',marginTop: '5px'}}>{item.tittle}</Text>
                        <Ionicons  size={20} name="folder-outline" style={{position: 'absolute',marginLeft: '5px',marginTop: '60px',color:'green'}}/>
                        <Text style={{fontSize: 15,fontWeight: 400,fontFamily: 'Roboto',marginLeft: '5px',marginTop: '5px'}}>{item.date}  {item.time}</Text>
                        <Text style={{fontSize: 15,fontWeight: 400,fontFamily: 'Roboto',marginLeft: '25px',marginTop: '13px'}}>{item.cate}</Text>
                    </View>
                    <TouchableOpacity style={{width:'20%',height:'99px',backgroundColor:'red',alignItems:'center'}}
                    onPress={()=>delteNote(item.id)}
                    >
                        <Ionicons size={30} name="trash-outline" style={{position: 'absolute',marginLeft: '5px',marginTop: '40px',}}/>
                    </TouchableOpacity>
                </View>
                )
            })
        }
        {/* <Ionicons name="add-circle" size={50} color="blue" style={{position:'absolute',marginTop :500,right:20}}/> */}
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    note: {
        width: '100%',
        height: '100px',
        backgroundColor: '#fff',
        marginTop: '2px',
        flexDirection: 'row',
        borderBottomWidth:'2px',
        borderColor: 'black',
    },
});