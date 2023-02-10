import React from 'react';
import { StyleSheet, View } from 'react-native';
type Props = {children?: React.ReactNode}

const FkaPadding: React.FC<Props> = (props) => {
    return (
        <View style={styles.padding}>
            { props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    padding: {
        padding: 15
    }
})

export default FkaPadding;