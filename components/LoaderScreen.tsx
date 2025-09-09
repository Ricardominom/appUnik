import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface LoaderScreenProps {
  onAnimationComplete?: () => void;
}

const LoaderScreen: React.FC<LoaderScreenProps> = ({ onAnimationComplete }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  
  // Animaciones para las líneas que suben
  const line1Animation = useSharedValue(0);
  const line2Animation = useSharedValue(0);
  const line3Animation = useSharedValue(0);
  const line4Animation = useSharedValue(0);
  const line5Animation = useSharedValue(0);
  const line6Animation = useSharedValue(0);
  const line7Animation = useSharedValue(0);
  const line8Animation = useSharedValue(0);
  
  // Animación del logo
  const logoAnimation = useSharedValue(0);
  const logoOpacity = useSharedValue(0);

  useEffect(() => {
    const startAnimation = () => {
      // Secuencia de líneas subiendo rápidamente con delays
      line1Animation.value = withDelay(0, withTiming(1, { duration: 600 }));
      line2Animation.value = withDelay(100, withTiming(1, { duration: 600 }));
      line3Animation.value = withDelay(200, withTiming(1, { duration: 600 }));
      line4Animation.value = withDelay(300, withTiming(1, { duration: 600 }));
      line5Animation.value = withDelay(400, withTiming(1, { duration: 600 }));
      line6Animation.value = withDelay(500, withTiming(1, { duration: 600 }));
      line7Animation.value = withDelay(600, withTiming(1, { duration: 600 }));
      line8Animation.value = withDelay(700, withTiming(1, { duration: 600 }));
      
      // Logo aparece y sube junto con las líneas
      logoOpacity.value = withDelay(400, withTiming(1, { duration: 300 }));
      logoAnimation.value = withDelay(400, withTiming(1, { duration: 800 }));
      
      // Después de un tiempo, fade out completo
      const totalDuration = 2500;
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        });
      }, totalDuration);
    };

    startAnimation();
  }, [onAnimationComplete]);

  // Estilos de animación para las líneas
  const createLineStyle = (animationValue: any, delay: number) => useAnimatedStyle(() => {
    const translateY = interpolate(
      animationValue.value,
      [0, 1],
      [screenHeight, -100],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      animationValue.value,
      [0, 0.2, 0.8, 1],
      [0, 1, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateY }],
      opacity,
    };
  });

  const line1Style = createLineStyle(line1Animation, 0);
  const line2Style = createLineStyle(line2Animation, 100);
  const line3Style = createLineStyle(line3Animation, 200);
  const line4Style = createLineStyle(line4Animation, 300);
  const line5Style = createLineStyle(line5Animation, 400);
  const line6Style = createLineStyle(line6Animation, 500);
  const line7Style = createLineStyle(line7Animation, 600);
  const line8Style = createLineStyle(line8Animation, 700);

  // Estilo de animación para el logo
  const logoStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      logoAnimation.value,
      [0, 1],
      [50, 0],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      logoAnimation.value,
      [0, 0.3, 1],
      [0.8, 0.9, 1],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateY }, { scale }],
      opacity: logoOpacity.value,
    };
  });

  return (
    <Animated.View 
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        }
      ]}
    >
      <View style={styles.whiteBackground}>
        {/* Líneas delgadas que suben rápidamente */}
        <Reanimated.View style={[styles.line, styles.line1, line1Style]} />
        <Reanimated.View style={[styles.line, styles.line2, line2Style]} />
        <Reanimated.View style={[styles.line, styles.line3, line3Style]} />
        <Reanimated.View style={[styles.line, styles.line4, line4Style]} />
        <Reanimated.View style={[styles.line, styles.line5, line5Style]} />
        <Reanimated.View style={[styles.line, styles.line6, line6Style]} />
        <Reanimated.View style={[styles.line, styles.line7, line7Style]} />
        <Reanimated.View style={[styles.line, styles.line8, line8Style]} />

        {/* Logo UNIK (Isologo) que sube junto con las líneas */}
        <Reanimated.View style={[styles.logoContainer, logoStyle]}>
          <Image 
            source={require('@/assets/Isologo_aqua_1.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </Reanimated.View>
      </View>
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: '#00000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  logoImage: {
    width: 280,
    height: 84,
  },
  // Estilos para las líneas
  line: {
    position: 'absolute',
    width: 2.1, // 10% más gruesa
    height: screenHeight * 1.5,
    backgroundColor: '#7C3AED',
    opacity: 0.3,
  },
  line1: {
    left: screenWidth * 0.1,
  },
  line2: {
    left: screenWidth * 0.2,
    backgroundColor: '#6366F1',
  },
  line3: {
    left: screenWidth * 0.3,
    backgroundColor: '#8B5CF6',
  },
  line4: {
    left: screenWidth * 0.4,
    backgroundColor: '#A855F7',
  },
  line5: {
    left: screenWidth * 0.5,
    backgroundColor: '#7C3AED',
  },
  line6: {
    left: screenWidth * 0.6,
    backgroundColor: '#6366F1',
  },
  line7: {
    left: screenWidth * 0.7,
    backgroundColor: '#8B5CF6',
  },
  line8: {
    left: screenWidth * 0.8,
    backgroundColor: '#A855F7',
  },
});

export default LoaderScreen;