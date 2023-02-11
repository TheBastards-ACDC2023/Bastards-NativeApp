import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import NavigationItem from "../components/NavigationItem";
import BstContainer from "../components/ui/FkaContainer";
import BstHeadline from "../components/ui/FkaHeadline";

const Menu = () => {
    return (
        <BstContainer>
            <BstHeadline>Greetings Capt'n Flint</BstHeadline>
            <Text style={styles.text}>What do you wish to do today?</Text>
            <View style={styles.menuContainer}>
                <NavigationItem label="Main Deck" iconName="dashboard" onPressUrl="/" />
                <NavigationItem label="Shiver me timbers" iconName="weather" onPressUrl="/weather" />
                <NavigationItem label="Find hidden pirates" iconName="pirate2" onPressUrl="/camera" />
                <NavigationItem label="Raides" iconName="cow" onPressUrl="/fields" />
                <NavigationItem label="Batten down the hatches" iconName="pirate" onPressUrl="/cownter" />
                <NavigationItem label="Abandon ship" iconName="logout" onPressUrl="/" />
            </View>
        </BstContainer>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        flexWrap: 'wrap',
    },
    text: {
        fontSize: 18,
        marginBottom: 30
    }
});

export default Menu;