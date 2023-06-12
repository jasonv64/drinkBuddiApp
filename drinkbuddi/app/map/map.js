import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, DrawerLayoutAndroid, } from 'react-native';
import React, { useRef, useState } from 'react';
import MapView from "react-native-maps";
import FontAwesome from '@expo/vector-icons/FontAwesome';





export default function Map({ navigation }) {

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');
    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button title="Login"
                onPress={() => navigation.navigate('Home')} />
            <Button style={styles.drawerButton}
                title="Close drawer"
                onPress={() => drawer.current?.closeDrawer()}
            />
        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}>
            <View style={styles.container2}>
                <FontAwesome.Button
                    style={styles.barMenu}
                    name="bars"
                    borderRadius={25}
                    onPress={() => drawer.current?.openDrawer()}>
                </FontAwesome.Button>
                {/* <Button
                    title="Change Drawer Position"
                    onPress={() => changeDrawerPosition()}
                /> */}
            </View>
            <View style={styles.container}>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 34.067964,
                        longitude: -117.236236,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <StatusBar style="auto" />
            </View>
        </DrawerLayoutAndroid>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 5, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        height: "100%",
        width: "100%",
        zIndex: 1
    },
    container2: {
        position: "absolute",
        height: 75,
        width: 75,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "space-around",

    },
    barMenu: {
        paddingVertical: 8,
        borderRadius: 6,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 7,
    }

});