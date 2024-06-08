import React from 'react';
import { View, Button, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

const Home = (props) => {

    const navigation = props.navigation

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../assets/background-image.jpg')}
                style={styles.background}
                imageStyle={styles.image}
            >
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Button
                            onPress={() => {
                                navigation.navigate('Numbers Check');
                            }}
                            title="Verificador de Números"
                        />
                    </View>
                    <View style={styles.main}>
                        <Button
                            onPress={() => {
                                navigation.navigate('MDC Calculator');
                            }}
                            title="Calculadora de MDC"
                        />
                    </View>
                    <View style={styles.main}>
                        <Button
                            onPress={() => {
                                navigation.navigate('MMC Calculator');
                            }}
                            title="Calculadora de MMC"
                        />
                    </View>
                    <View style={styles.main}>
                        <Button
                            onPress={() => {
                                navigation.navigate('Dice RPG');
                            }}
                            title="Dado RPG Virtual"
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'stretch',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        marginVertical: 40,
    },
    text: {
        color: 'white',
        fontSize: 28,
    },
});

export default Home

