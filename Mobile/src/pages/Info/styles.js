import { StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
        padding: Constants.statusBarHeight + 20,
        justifyContent: "center",
        alignItems: "center",
    },

    backConvert: {
        marginTop: -150,
        marginStart: 340,
        marginBottom: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    button: {
        backgroundColor: "transparent",
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 5
        
        
    },
    buttonText: {
        color: "#000",
        fontSize: 25,
    },

    ButtonMP: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        paddingTop: 20
    },

    Textstrong: {
        fontSize: 24,
        marginTop: 20,
        borderBottomWidth: 1,
        padding: 10,
    },

});