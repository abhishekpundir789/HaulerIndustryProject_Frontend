import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { StyleSheet } from 'react-native';

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSignUpClicked = async () => {
      console.log("login clicked")
    }

    return (
        <View style={styles.container}>
            <View
                style={{ flex: 1, width: '100%' }}>
                <Image source={require('../../assets/haulerLogo.png')} style={styles.logo} />

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor="#C0C0C0"
                    onChangeText={(email) => setEmail(email) }
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor="#C0C0C0"
                    secureTextEntry
                    onChangeText={(password) => setPassword(password) }
                    value={password}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    placeholderTextColor="#C0C0C0"
                    secureTextEntry
                    onChangeText={(password) => setConfirmPassword(password) }
                    value={confirmPassword}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSignUpClicked()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.option}>
                    <Text style={styles.optionText}>
                        Already have an account?
                        <Text style={styles.optionLink}>
                            Log in</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        marginTop: 100,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    email: {
        color: '#73AB84',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'black',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    option: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    optionText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    optionLink: {
        color: "#BB4430",
        fontWeight: "bold",
        fontSize: 16
    }
})