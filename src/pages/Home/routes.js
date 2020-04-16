import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Index from './index';
import Logout from './Logout';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Index} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
}