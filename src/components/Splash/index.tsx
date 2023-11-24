import React, { useEffect, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Animated, Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../../assets/img/transparent.png";
import { styles } from './styles';

const Splash = ({ children }: any) => {

    const edges = useSafeAreaInsets();
    const startAnimation = useRef(new Animated.Value(0)).current;
    const animation_startAnimation = Animated.timing(startAnimation, { toValue: -Dimensions.get('window').height + (edges.top + 65), useNativeDriver: true });

    const scaleLogo = useRef(new Animated.Value(1)).current;
    const animation_scaleLogo = Animated.timing(scaleLogo, { toValue: 0.5, useNativeDriver: true });

    const scaleTitle = useRef(new Animated.Value(1)).current;
    const animation_scaleTitle = Animated.timing(scaleTitle, { toValue: 0.8, useNativeDriver: true });

    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const animation_moveLogo = Animated.timing(moveLogo, { toValue: { x: (Dimensions.get("window").width / 2) - 30, y: (Dimensions.get('window').height / 2) - 5 }, useNativeDriver: true });

    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const animation_moveTitle = Animated.timing(moveTitle, { toValue: { x: 0, y: (Dimensions.get('window').height / 2) - 90 }, useNativeDriver: true });

    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;
    const animation_contentTransition = Animated.timing(contentTransition, { toValue: 0, useNativeDriver: true });

    useEffect(() => {
        setTimeout(() => {
            Animated.parallel([
                animation_startAnimation,
                animation_scaleLogo,
                animation_scaleTitle,
                animation_moveLogo,
                animation_moveTitle,
                animation_contentTransition
            ])
                .start();
        }, 500);
    }, [])

    return (
        <View style={styles.mainWrapper}>
            <Animated.View style={
                Object.assign({
                    transform: [
                        { translateY: startAnimation }
                    ]
                }, styles.topbarWrapper)}>
                <Animated.View style={styles.topBarLogoWrapper}>
                    <Animated.Image source={Logo} style={
                        Object.assign({
                            transform: [
                                { translateX: moveLogo.x },
                                { translateY: moveLogo.y },
                                { scale: scaleLogo },
                            ]
                        }, styles.logoWrapper)}
                    />

                    <Animated.Text style={
                        Object.assign({
                            transform: [
                                { translateY: moveTitle.y },
                                { scale: scaleTitle }
                            ]
                        }, styles.topBarTitleWrapper)}>
                        Need4Time
                    </Animated.Text>
                </Animated.View>
            </Animated.View>
            <Animated.View style={
                Object.assign({
                    transform: [
                        { translateY: contentTransition }
                    ]
                }, styles.appWrapper)
            }
            >
                <StatusBar style="auto" />
                {children}
            </Animated.View>
        </View>
    );
};

export default Splash;
