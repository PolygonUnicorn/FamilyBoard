import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../contexts/AuthProvider';
import {ThemeContext} from '../contexts/ThemesContext';
import {LanguageContext} from "../contexts/Languages";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//TODO: Obrazovka uživatele
//Obsahuje profilový obrázek, jméno, ostatní členy rodiny, odkaz na obrazovku zdraví
export default function UserScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    const t = useContext(LanguageContext);

    return (
        <View style={style.container}>
            <Icon name='account-circle' color={mainColor} size={192} style={style.profilePic}/>
            <Text style={style.name}>{user.name} {user.surname}</Text>
            <Button title={t.healthCard} color={mainColor} onPress={() => navigation.navigate('Health')}/>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    name: {
        textAlignVertical: 'top',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 10,
    },
    profilePic: {
        alignSelf: 'center',
    },
});
