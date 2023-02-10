import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { useHistory } from "react-router-native"
import FkaButton from "../components/Button"
import FkaContainer from "../components/ui/FkaContainer"
import { FKA_BASIC_DARK } from "../styles/Colors"

const Login = () => {
    const history = useHistory();
    const onLoginButtonClick = () => {
        history.push('/dashboard');
    }
    return (
        <FkaContainer>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headline}>The Bastards</Text>
                    <Text style={styles.text}>Join the crew or walk the plank</Text>
                </View>
                <View style={styles.actionContainer}>
                    <FkaButton label="Log in" onClick={onLoginButtonClick} />
                    <Text>ELLER</Text>
                    <FkaButton label="Register" onClick={onLoginButtonClick} />
                </View>
            </View>
        </FkaContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },

    header: {
        paddingTop: 20,
    },

    text: {
        marginTop: 10,
        marginBottom: 40
    },

    headline: {
        fontSize: 30,
        fontWeight: '700',
        color: FKA_BASIC_DARK
    },

    actionContainer: {
        alignItems: 'center',
        marginTop: 100
    }
})

export default Login;