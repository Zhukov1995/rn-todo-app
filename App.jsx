import React from "react";
import { Provider } from "react-redux";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import AppMain from "./AppMain";
import store from "./src/store/store";

const App = () => {
    // подключаем шрифты
    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('./src/assest/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('./src/assest/fonts/Roboto-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    return (
        <Provider store={store}>
            <AppMain onLayout={onLayoutRootView} />
        </Provider>
    )
}

export default App;