import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: "center",
    },

    input: {
        borderColor: "#000",
        borderWidth: 1,
        marginTop: 90,
        width: 300,
        padding: 12,
        borderRadius: 3,
        fontSize: 20
    },

    button: {
        borderRadius: 3,
        backgroundColor: "#00f",
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 22
    },

    TextButton: {
        fontSize: 15,
        color: "#fff",
    },


    textH1: {
        color: "#000",
        fontSize: 37,
        paddingTop: 100
    },
})