import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, DrawerLayoutAndroid, } from 'react-native';
import React, { useRef, useState } from 'react';
import MapView from "react-native-maps";




export default function Map() {

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
            <View style={styles.container}>
                <Button
                    title="Change Drawer Position"
                    onPress={() => changeDrawerPosition()}
                />
                <Button
                    style={styles.drawerButton}
                    title="Open drawer"
                    onPress={() => drawer.current?.openDrawer()}
                />
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
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        height: "100%",
        width: "100%",
    },
    drawerButton: {
        zIndex: 100,
    }
});