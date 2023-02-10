import React from 'react';
import { StyleSheet, View } from 'react-native'

type Props = { children?: React.ReactNode };

const FkaSpaceBottom: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.spaceBottom}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    spaceBottom: {
        marginBottom: 10
    }
})

export default FkaSpaceBottom;