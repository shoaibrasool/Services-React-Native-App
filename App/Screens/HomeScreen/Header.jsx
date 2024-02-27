import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.mainProfileContainer}>
                <View style={styles.profileContainer}>
                    <View style={styles.userImage}>

                    </View>
                    <View>
                        <Text style={{ color: Colors.WHITE }}>Welcome</Text>
                        <Text style={{ color: Colors.WHITE, fontSize: 20 }}>Shoaib Rasool</Text>
                    </View>
                </View>
                <FontAwesome5 name="bookmark" size={27} color="black" />
            </View>
            <View style={styles.searchBarContainer}>
                <TextInput placeholder='Search' style={styles.textInput} />
                <FontAwesome5 style={styles.searchbtn} name="search" size={27} color={Colors.Primary} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.Primary,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    mainProfileContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userImage: {
        width: 45,
        height: 45,
        backgroundColor: "green",
        borderRadius: 99
    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16
    },
    searchbtn: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    }
})
