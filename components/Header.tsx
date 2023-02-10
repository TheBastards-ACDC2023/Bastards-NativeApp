import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import { useNavigate } from 'react-router-native';
import { FKA_PRIMARY, FKA_PRIMARY_FG, FKA_YELLOW } from '../styles/Colors';

const Header = () => {
    const navigate = useNavigate();
    const navigateTo = (path: string): void => {
        navigate(path)
    }
    return (
        <View style={styles.header}>
            <View style={styles.innerContainer}>
                <TouchableHighlight onPress={() => navigateTo('/dashboard')}>
                    <Image source={require('../assets/bastards/bastards.png')} style={styles.logo} />
                </TouchableHighlight>
                <View>
                    <Text style={styles.appName}>The Captains's log</Text>
                </View>
            </View>
            <View>
                <TouchableHighlight onPress={() => navigateTo('/menu')}>
                    <Image source={require('../assets/menu.png')} style={styles.menu} />
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: FKA_PRIMARY,
        padding: 15,
        paddingTop: 50,
        borderBottomColor: FKA_YELLOW,
        borderBottomWidth: 8
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        height: 50,
        width: 50
    },
    appName: {
        color: FKA_PRIMARY_FG,
        fontSize: 18,
        marginLeft: 10
    },
    menu: {
        height: 40,
        width: 40
    }
});

export default Header;