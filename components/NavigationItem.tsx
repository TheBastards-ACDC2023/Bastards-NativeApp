import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Link } from "react-router-native";
import FkaCard from "./ui/FkaCard";

type IconName = 'pirate' | 'weather' | 'profile' | 'logout' | 'pirate2' | 'cow' | 'dashboard';
interface Props {
    label: string;
    iconName: IconName;
    onPressUrl: string
}

const propsToAssets: Record<IconName, any> = {
    pirate: require('../assets/bastards/pirate.png'),
    pirate2: require('../assets/bastards/pirate2.png'),
    logout: require('../assets/exit.png'),
    profile: require('../assets/tractor.png'),
    weather: require('../assets/bastards/tornado.png'),
    cow: require('../assets/farming/cow.png'),
    dashboard: require('../assets/bastards/rudder.png')
    //rudder: require('../assets/bastards/rudder.png')
};

function NavigationItem(props: Props) {
    return (
        <View style={styles.box}>
            <Link to={props.onPressUrl}>
                <FkaCard>
                    <View style={styles.boxInnerContainer}>
                        <Image source={propsToAssets[props.iconName]} style={styles.icon} />
                        <Text style={styles.label}>{props.label}</Text>
                    </View>
                </FkaCard>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: '49%',
        height: 100,
        marginBottom: 22
    },
    boxInnerContainer: {
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10
    },
    icon: {
        width: 60,
        height: 60
    },
    label: {
        marginTop: 10
    }
});
export default NavigationItem;