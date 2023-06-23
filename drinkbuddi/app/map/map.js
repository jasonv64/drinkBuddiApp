import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, DrawerLayoutAndroid, TouchableHighlight, } from 'react-native';
import React, { useRef, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';





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
                >
                    <TouchableHighlight>
                        <Marker
                            title='Our Brew'
                            description='This is a Brewery!'
                            coordinate={{
                                latitude: 34.070042,
                                longitude: -117.235483
                            }}
                        />
                    </TouchableHighlight>
                    <Marker
                        title='Ritual Brewery'
                        description='This is also a Brewery!'
                        coordinate={{
                            latitude: 34.070564,
                            longitude: -117.237215
                        }}
                    />
                    <Marker
                        title='Brew N Chew'
                        description='This is the last Brewery! :('
                        coordinate={{
                            latitude: 34.049716,
                            longitude: -117.197989
                        }}
                    />
                    <Marker
                        title='Escape Craft Brewery'
                        description='This is another Brewery!'
                        coordinate={{
                            latitude: 34.061384,
                            longitude: -117.218675
                        }}
                    />
                </MapView>
                <View style={styles.info}>
                    <Text>These are words</Text>
                </View>
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
    },
    info: {
        position: "absolute",
        width: 300,
        height: "20%",
        zIndex: 1,
        backgroundColor: "blue",
    }

});