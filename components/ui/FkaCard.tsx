import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FKA_BASIC, FKA_COLOR } from '../../styles/Colors';

type Props = { children?: React.ReactNode};

const FkaCard: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.card} needsOffscreenAlphaCompositing={false}>
            { props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 1,
        backgroundColor: FKA_BASIC,
        color:FKA_COLOR
    }
})

export default FkaCard;