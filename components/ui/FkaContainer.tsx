import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FKA_BACKGROUND } from '../../styles/Colors';

type Props = { children?: React.ReactNode };

const FkaContainer: React.FC<Props>= (props: Props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: FKA_BACKGROUND,
        minHeight: '100%'
    }
})

export default FkaContainer;