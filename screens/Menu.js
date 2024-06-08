import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Home = (props) => {
    
    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Button
                    onPress={() => {
                        navigation.navigate('Numbers Check')
                    }}
                    title="Verificador de Números" />
            </View>
            <View style={styles.main}>
                <Button
                    onPress={() => {
                        navigation.navigate('MDC Calculator')
                    }}
                    title="Calculadora de MDC" />
            </View>
            <View style={styles.main}>
                <Button
                    onPress={() => {
                        navigation.navigate('MMC Calculator')
                    }}
                    title="Calculadora de MMC" />
            </View>
            <View style={styles.main}>
                <Button
                    onPress={() => {
                        navigation.navigate('Dice RPG')
                    }}
                    title="Dado RPG Virtual" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        marginVertical: 20,
        padding: 20
    }
})

export default Home

