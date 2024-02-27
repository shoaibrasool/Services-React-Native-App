import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';

export default function Login({ navigation }) {
    const handleGetStarted = () => {
        // Navigate to the Home screen
        navigation.navigate('Home');
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={require('../../../assets/images/login.png')} style={styles.loginImage} />
            <View style={styles.SubContainer}>
                <Text style={{ fontSize: 27, color: Colors.WHITE, textAlign: "center" }}>
                    Let's Find <Text style={{ fontWeight: "bold" }}>Professional Cleaning and repair</Text> Services
                </Text>
                <Text style={{ fontSize: 17, marginTop: 20, textAlign: "center", color: Colors.WHITE }}>Best app to find services near you and delivers the best work</Text>
                <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                    <Text style={{ fontSize: 17, textAlign: "center", color: Colors.Primary, fontWeight: "bold" }}>Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.Black,
        borderRadius: 15
    },
    SubContainer: {
        width: '100%',
        backgroundColor: Colors.Primary,
        height: '70%',
        marginTop: '-20%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    button: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 40
    }
});
