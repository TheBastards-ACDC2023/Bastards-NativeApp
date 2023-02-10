import React from 'react';
import { StyleSheet, Text } from 'react-native'

type Props = { children?: React.ReactNode }
const FkaTitle: React.FC<Props> = (props: Props) => {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5
    }
})

export default FkaTitle;