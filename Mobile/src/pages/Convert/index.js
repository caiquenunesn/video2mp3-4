import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';


export default function Convert(){
    const [loading, setLoading] = useState(true);
    const [search , setSearch] = useState('');
    const navigator = useNavigation();
    async function Convert(){
        try{
            
            
            const res = await api.get(`info?search=${search}`);
            
            setLoading(true)
            navigator.navigate('Info' , res.data);
            
        }catch{
            setTimeout(() => {setLoading(true)}, 900) 
        }
    }

    function load () {
        
        setLoading(false);

        return loading;
    }

    return(
        <View style={styles.container}>

            <Text style={styles.textH1}>React Convert Video</Text>

            <TextInput style={styles.input}
            onChangeText={setSearch} placeholder='https://www.youtube.com/watch?v=ID'
            />
            <TouchableOpacity style={styles.button} onPress={Convert} onPressIn={load}>
                <Text style={styles.TextButton}>Convert</Text>
            </TouchableOpacity>
            {loading ? load : <ActivityIndicator style={{flex: 1}} color="#00f"size={"large"} />}
        </View>
    );
}