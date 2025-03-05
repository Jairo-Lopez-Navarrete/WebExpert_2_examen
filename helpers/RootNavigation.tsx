import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

type Routes = {
    'Explore': string;
    'Detail': string;
    'Home': string;
    'Profile': string;
    'Settings': string;
    'Books': string;
};

//wat het doet: waar zit ik op en waar wil ik naar toe gaan.
export const navigationRef = React.createRef<NavigationContainerRef<Routes>>();

export function navigate(name: keyof Routes) {
    navigationRef.current?.navigate(name);
}