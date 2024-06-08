import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NumbersHelp = () => {
    return (
        <ScrollView>
            <View style={styles.main}>
                <View>
                    <Text style={styles.titleCenter}>Oque é um número primo ?</Text>
                    <Text style={styles.text}>É um número natural maior que 1 que só pode ser dividido por 1 e por ele mesmo sem deixar resto.</Text>
                </View>
                <View>
                    <Text style={styles.titleLeft}>Oque é um número par ?</Text>
                    <Text style={styles.text}>É um número inteiro que é divisível por 2, ou seja, qualquer número inteiro que, quando dividido por 2, resulta em outro número inteiro sem deixar resto.</Text>
                </View>
                <View>
                    <Text style={styles.titleCenter}>Oque é um número positivo ?</Text>
                    <Text style={styles.text}>É um número maior que zero.</Text>
                </View>
                <View>
                    <Text style={styles.titleLeft}>Oque é um número perfeito ?</Text>
                    <Text style={styles.text}>É um número inteiro positivo que é igual à soma de seus divisores próprios (ou seja, todos os seus divisores positivos, excluindo ele mesmo).</Text>
                </View>
                <View>
                    <Text style={styles.titleCenter}>Oque é um quadrado perfeito ?</Text>
                    <Text style={styles.text}>É um número inteiro que é o quadrado de outro número inteiro.</Text>
                </View>
                <View>
                    <Text style={styles.titleLeft}>Oque é um divisor ?</Text>
                    <Text style={styles.text}>São os números pelos quais o número original pode ser dividido de forma exata, sem deixar resto.</Text>
                </View>
                <View>
                    <Text style={styles.titleCenter}>Oque é um valor absoluto ?</Text>
                    <Text style={styles.text}>O valor absoluto de um número é a sua distância em relação a zero na reta numérica, sem considerar o seu sinal. Em outras palavras, é o valor numérico de um número, independente de ser positivo ou negativo.</Text>
                </View>
                <View>
                    <Text style={styles.titleLeft}>Oque é um numero composto ?</Text>
                    <Text style={styles.text}>É um número inteiro que possui mais de dois divisores positivos. Em outras palavras, é um número que pode ser dividido por além de 1 e por ele mesmo</Text>
                </View>
                <View style={styles.signatureContainer}>
                    <Text style={styles.signature}>Copyright © 2024 TropaDoBusao. Todos os direitos reservados.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    titleLeft: {
        textAlign: 'left',
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleCenter: {
        textAlign: 'center',
        fontSize: 20,
        margin: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        marginLeft: 10
    },
    signatureContainer: {
        bottom: 0,
        margin: 20,
        alignSelf: 'center',
    },
    signature: {
        fontSize: 10,
        color: 'gray',
    },

});

export default NumbersHelp;

