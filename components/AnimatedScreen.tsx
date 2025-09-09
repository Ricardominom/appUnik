import React, { useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from 'expo-router';

interface AnimatedScreenProps {
  children: React.ReactNode;
}

export default function AnimatedScreen({ children }: AnimatedScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    React.useCallback(() => {
      // Reset value
      fadeAnim.setValue(0);

      // Simple, clean fade-in - no movement, just smooth opacity change
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();

      return () => {
        // Clean exit
      };
    }, [fadeAnim])
  );

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
}