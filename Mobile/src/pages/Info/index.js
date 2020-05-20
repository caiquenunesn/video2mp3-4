import React, { useState } from 'react';
import styles from './styles';
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

import api from '../../services/api';
import * as Permissions from 'expo-permissions';


export default function Info(){
    const navigator = useNavigation();
    const data = useRoute();
    const { search, title, thumbnail_url, time } = data.params
    const [mp3, setmp3] = useState([]);
    const [mp4, setmp4] = useState([]);
    const [loo, setLoo] = useState(true);
    async function handleDownloadMP3(){
        
        try{
            setLoo(false);
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if(status === "granted"){
                const res = await api.get(`mp3download?search=${search}`);
                const { responseURL } = res.request;
                setmp3(responseURL)
                setLoo(true);
                
                
                
                
            }
            
            
            
        }catch(err){
            console.log('error')
            
        }
    }

    async function handleDownloadMP4(){
        
        try{
            setLoo(false);
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if(status === "granted"){
                const res = await api.get(`mp4download?search=${search}`);
                const { responseURL } = res.request;
                setmp4(responseURL)
                setLoo(true);
                
                
                
                
            }
            
            
            
        }catch(err){
            console.log('##################################', err)
        }


    }

    function loadinn(){
        setLoo(false);

        return loo;
    }
    

    function goBack(){
        navigator.goBack();
    }
    return(
        <View style={styles.container} >
            <TouchableOpacity style={styles.backConvert} onPress={goBack}>
                <Feather name="arrow-left" size={25} color="#00f" />
            </TouchableOpacity>
            <Image source={{uri: thumbnail_url}} style={{width: 150, height: 150, marginTop: 0, paddingTop: 220, paddingHorizontal: 200}} />

    <Text style={styles.Textstrong}>Title : <Text style={{color: "#00f", fontSize: 20}}>{title}</Text></Text>
            
        
            <Text style={styles.Textstrong}>Duração: <Text style={{color: "#00f", fontSize: 20}}>{time}s</Text></Text>
            <View style={styles.ButtonMP}>

            <TouchableOpacity style={styles.button} onPress={handleDownloadMP3} onPressIn={loadinn}>
                
                <Text style={styles.buttonText} >M P 3</Text>
                <WebView 
                source={{uri: `${mp3}`}}
                style={{backgroundColor: "#000", }}
                />
                
                
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.button} onPress={handleDownloadMP4} onPressIn={loadinn}>
                <Text style={styles.buttonText}>M P 4</Text>
                
                <WebView 
                source={{uri: `${mp4}`}}
                
                />
            </TouchableOpacity>
            
            </View>
            {loo ? loadinn : <ActivityIndicator size={"large"} color="#00f" />}
        </View>
    );
}