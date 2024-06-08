import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const MMCCalculator = () => {

    const [number, setNumber] = useState('')
    const [inputs, setInputs] = useState([''])
    const [mmcResult, setMmcResult] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const calculateMMC = (numbers) => {
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
        const lcm = (a, b) => (a * b) / gcd(a, b)
        return numbers.reduce((acc, num) => lcm(acc, num), 1)
    }

    const handleInputChange = (text, index) => {
        if (/^-?\d*$/.test(text)) {
            const newInputs = [...inputs]
            newInputs[index] = text
            setMmcResult(null)
            setInputs(newInputs)
            const allFieldsFilled = newInputs.every(input => input.trim() !== '')
            if (allFieldsFilled) {
                setErrorMessage(null)
                setNumber(text)
            }
        } else {
            setErrorMessage('Por favor, insira apenas números válidos.')
        }
    }

    const checkNumber = () => {
        const allFieldsFilled = inputs.every(input => input.trim() !== '')
        if (!allFieldsFilled) {
            setErrorMessage('Por favor, preencha todos os campos antes de analisar.')
            return
        }
        if (number.trim() === '') {
            setErrorMessage('Por favor, insira um valor antes de analisar.')
            return
        }
        const numValues = inputs.map(input => parseFloat(input)).filter(num => !isNaN(num))
        if (numValues.length < 2) {
            setErrorMessage('Por favor, insira pelo menos dois valores válidos.')
            return;
        }
        const result = calculateMMC(numValues)
        setMmcResult(result)
        setErrorMessage(null)
    }

    const addInputField = () => {
        if (inputs.length < 8) {
            setInputs([...inputs, ''])
            setMmcResult(null)
        } else {
            setErrorMessage('Você só pode adicionar até 8 campos.');
        }
    }

    const removeInputField = (index) => {
        const newInputs = inputs.filter((_, i) => i !== index)
        setInputs(newInputs)
        if (newInputs.length === 0) {
            setMmcResult('')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Calcular MMC</Text>
            </View>
            <ScrollView style={styles.inputContainer}>
                {inputs.map((input, index) => (
                    <View key={index} style={styles.inputWrapper}>
                        <View style={styles.inputLabelContainer}>
                            <Text style={styles.inputLabel}>Número {index + 1}</Text>
                            <TouchableOpacity onPress={() => removeInputField(index)} style={styles.deleteButton}>
                                <Text style={styles.deleteButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            key={index}
                            style={styles.textInput}
                            keyboardType='numeric'
                            value={input}
                            onChangeText={(text) => handleInputChange(text, index)}
                        />
                    </View>
                ))}
                {mmcResult !== null && mmcResult !== undefined && inputs.some(input => input.trim() !== '') && (
                    <Text style={styles.result}>MMC: {mmcResult}</Text>
                )}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={addInputField}>
                    <Text style={styles.result}>Adicionar Campo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={checkNumber}>
                    <Text style={styles.result}>Analisar</Text>
                </TouchableOpacity>
                {errorMessage && (
                    <Text style={styles.error}>{errorMessage}</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    inputWrapper: {
        marginBottom: 20,
    },
    inputLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputLabel: {
        fontSize: 18,
    },
    deleteButton: {
        padding: 10,
    },
    deleteButtonText: {
        color: 'red',
        fontWeight: 'bold',
    },
    buttonContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#CCC',
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5,
        paddingVertical: 10,
        marginBottom: 10,
    },
    result: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    error: {
        textAlign: 'center',
        fontSize: 18,
        color: 'red',
    },
});

export default MMCCalculator