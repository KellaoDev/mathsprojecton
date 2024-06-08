import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Dice = () => {
    const [number, setNumber] = useState(null)
    const [numberOfSides, setNumberOfSides] = useState(2)

    const rollDice = async () => {
        const numberRandow = Math.floor(Math.random() * numberOfSides) + 1
        setNumber(numberRandow)
        await soundPlayer()
    }

    return (

        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>Dado RPG Virtual</Text>
                <View style={styles.content}>
                    <View style={styles.diceContainer}>
                        <ImageBackground
                            source={require('../../assets/dado-sprite.png')}
                            style={styles.diceImage}
                            resizeMode="contain"
                        >
                            <Text style={styles.number}>{number !== null ? number : ''}</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={numberOfSides}
                        style={styles.picker}
                        onValueChange={(itemValue) => setNumberOfSides(itemValue)}
                    >
                        <Picker.Item label="D2" value={2} />
                        <Picker.Item label="D4" value={4} />
                        <Picker.Item label="D6" value={6} />
                        <Picker.Item label="D8" value={8} />
                        <Picker.Item label="D10" value={10} />
                        <Picker.Item label="D12" value={12} />
                        <Picker.Item label="D20" value={20} />
                        <Picker.Item label="D30" value={30} />
                        <Picker.Item label="D100" value={100} />
                        <Picker.Item label="D200" value={200} />
                    </Picker>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={rollDice}
                    >
                        <Text style={styles.buttonText}>Lançar o Dado</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    diceContainer: {
        width: 350,
        height: 350,
        backgroundColor: '#fff',
    },
    diceImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'red',
    },
    pickerContainer: {
        marginVertical: 40,
    },
    picker: {
        width: 300,
        height: 50,
        alignSelf: 'center'
    },
    buttonContainer: {
        width: '70%',
        height: 50,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 100
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        alignItems: 'center',
        marginVertical: 10
    },
});

export default Dice;
