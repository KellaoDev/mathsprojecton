import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Keyboard, StyleSheet } from 'react-native';

const NumbersCheck = (props) => {

    const navigation = props.navigation

    const [number, setNumber] = useState('')
    const [isPrimeResult, setIsPrimeResult] = useState(null)
    const [isEvenResult, setIsEvenResult] = useState(null)
    const [isPositiveResult, setIsPositiveResult] = useState(null)
    const [isPerfectResult, setIsPerfectResult] = useState(null)
    const [isPerfectSquareResult, setIsPerfectSquareResult] = useState(null)
    const [isDivisorsResult, setIsDivisorsResult] = useState([])
    const [isAbsoluteResult, setIsAbsoluteResult] = useState(null)
    const [isCompositeResult, setIsCompositeResult] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);

    const isPrime = (num) => {
        if (num <= 1) return false
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false
        }
        return true
    }

    const isEven = (num) => {
        return num % 2 === 0
    }

    const isPositive = (num) => {
        if (num > 0) {
            return true
        } else {
            return false
        }
    }

    const isPerfect = (num) => {
        let sum = 1
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                sum += i
                if (i * i !== num) {
                    sum += num / i
                }
            }
        }
        return sum === num && num !== 1
    }

    const isPerfectSquare = (num) => {
        const sqrt = Math.sqrt(num)
        return sqrt === Math.floor(sqrt)
    }

    const isDivisors = (num) => {
        if (num < 1) return []
        const divisors = []
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.push(i)
                if (i !== num / i) {
                    divisors.push(num / i)
                }
            }
        }
        return divisors.sort((a, b) => a - b)
    }

    const isAbsolute = (num) => {
        return Math.abs(num)
    }

    const isComposite = (num) => {
        if (num <= 1) return false
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return true
        }
        return false
    }

    const checkNumber = () => {
        if (number.trim() === '') {
            Keyboard.dismiss()
            setErrorMessage('Por favor, insira um valor antes de analisar.')
            return
        }
        Keyboard.dismiss()
        const num = parseInt(number)
        setIsPrimeResult(isPrime(num))
        setIsEvenResult(isEven(num))
        setIsPositiveResult(isPositive(num))
        setIsPerfectResult(isPerfect(num))
        setIsPerfectSquareResult(isPerfectSquare(num))
        setIsDivisorsResult(isDivisors(num))
        setIsAbsoluteResult(isAbsolute(num))
        setIsCompositeResult(isComposite(num))
    }

    const handleInputChange = (text) => {
        if (/^-?\d*$/.test(text)) {
            setIsPrimeResult(null)
            setIsEvenResult(null)
            setIsPositiveResult(null)
            setIsPerfectResult(null)
            setIsPerfectSquareResult(null)
            setIsDivisorsResult([])
            setIsAbsoluteResult(null)
            setIsCompositeResult(null)
            setErrorMessage(null)
            setNumber(text)
        } else {
            setErrorMessage('Por favor, insira apenas números inteiros.')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.hav}>
                <View style={styles.header}>
                    <Text style={styles.title}>Número Analyzer</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Digite um número inteiro</Text>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                keyboardType='numeric'
                                value={number}
                                onChangeText={handleInputChange}
                            />
                        </View>
                    <TouchableOpacity style={styles.button} onPress={checkNumber}>
                        <Text style={styles.result}>Analisar</Text>
                    </TouchableOpacity>
                    {errorMessage && (
                        <Text style={styles.error}>{errorMessage}</Text>
                    )}
                </View>
                <View style={styles.main}>
                    {isPrimeResult !== null && isPrimeResult !== undefined && (
                        <Text style={styles.result}>
                            {isPrimeResult ? `${number} é primo.` : `${number} não é primo.`}
                        </Text>
                    )}
                    {isEvenResult !== null && isEvenResult !== undefined && (
                        <Text style={styles.result}>
                            {isEvenResult ? `${number} é par.` : `${number} é impar.`}
                        </Text>
                    )}
                    {isPositiveResult !== null && isPositiveResult !== undefined && (
                        <Text style={styles.result}>
                            {isPositiveResult ? `${number} é positivo.` : `${number} é negativo.`}
                        </Text>
                    )}
                    {isPerfectResult !== null && isPerfectResult !== undefined && (
                        <Text style={styles.result}>
                            {isPerfectResult ? `${number} é um número perfeito.` : `${number} não é um número perfeito.`}
                        </Text>
                    )}
                    {isPerfectSquareResult !== null && isPerfectSquareResult !== undefined && (
                        <Text style={styles.result}>
                            {isPerfectSquareResult ? `${number} é um quadrado perfeito.` : `${number} não é um quadrado perfeito.`}
                        </Text>
                    )}
                    {isDivisorsResult.length > 0 && (
                        <Text style={styles.result}>
                            {`Divisores de ${number}: ${isDivisorsResult.join(', ')}`}
                        </Text>
                    )}
                    {isAbsoluteResult !== null && isAbsoluteResult !== undefined && (
                        <Text style={styles.result}>
                            {`O valor absoluto de ${number} é: ${isAbsoluteResult}`}
                        </Text>
                    )}
                    {isCompositeResult !== null && isCompositeResult !== undefined && (
                        <Text style={styles.result}>
                            {isCompositeResult ? `${number} é composto.` : `${number} não é composto.`}
                        </Text>
                    )}
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Numbers Help')
                }}
                style={styles.helpButton}
            >
                <Text style={styles.textHelp}>
                    Precisa de ajuda?
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    hav: {
        flex: 1,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
    },
    title: {
        fontSize: 24,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    textHelp: {
        fontSize: 18,
    },
    textInput: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        alignSelf: 'center',
        textAlign: 'center',
    },
    main: {
        flex: 1,
        alignItems: 'center',
    },
    helpButton: {
        backgroundColor: 'lightblue',
        paddingVertical: 15,
        alignItems: 'center',
    },
    button: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5,
        paddingVertical: 10,
        alignSelf: 'center',
        marginBottom: 60
    },
    result: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 2,
    },
    error: {
        textAlign: 'center',
        fontSize: 18,
    },
});


export default NumbersCheck

