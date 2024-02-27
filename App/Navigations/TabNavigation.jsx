import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen/Home';
import Booking from './../Screens/BookingScreen/Booking';
import Profile from './../Screens/ProfileScreen/Profile';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();


export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor:Colors.Primary
        }}>
            <Tab.Screen name='home' component={Home}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}
                        >Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name='booking' component={Booking}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}
                        >Booking</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="bookmark" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name='profile' component={Profile}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}
                        >Profile</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-alt" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}