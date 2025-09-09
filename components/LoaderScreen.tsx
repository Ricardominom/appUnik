import React, { useEffect, useRef, useState } from 'react';
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

interface LoaderScreenProps {
  onAnimationComplete?: () => void;
}

const LoaderScreen: React.FC<LoaderScreenProps> = ({ onAnimationComplete }) => {
  const [dimensions, setDimensions] = useState(() => Dimensions.get('window'));
  const [isReady, setIsReady] = useState(false);
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
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    // Pequeño delay para asegurar que el componente esté completamente montado
    const timeoutId = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => {
      subscription?.remove();
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const animationCompleteCallback = () => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    };

    let fadeTimeout: ReturnType<typeof setTimeout>;

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
      
      // Programar fade out después de todas las animaciones
      const totalAnimationDuration = 400 + 800 + 100; // delay + logo + pausa
      fadeTimeout = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(({ finished }) => {
          if (finished) {
            animationCompleteCallback();
          }
        });
      }, totalAnimationDuration);
    };

    startAnimation();

    return () => {
      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
      }
    };
  }, [isReady, onAnimationComplete]);

  // Estilos de animación para las líneas
  const createLineStyle = (animationValue: any, delay: number) => useAnimatedStyle(() => {
    const translateY = interpolate(
      animationValue.value,
      [0, 1],
      [dimensions.height, -100],
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

  // Mostrar fondo blanco inmediatamente para evitar pantalla en blanco
  if (!isReady) {
    return (
      <View style={styles.container}>
        <View style={styles.whiteBackground} />
      </View>
    );
  }

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
        <Reanimated.View style={[styles.line, { ...styles.line1, left: dimensions.width * 0.1 }, line1Style]} />
        <Reanimated.View style={[styles.line, { ...styles.line2, left: dimensions.width * 0.2 }, line2Style]} />
        <Reanimated.View style={[styles.line, { ...styles.line3, left: dimensions.width * 0.3 }, line3Style]} />
        <Reanimated.View style={[styles.line, { ...styles.line4, left: dimensions.width * 0.4 }, line4Style]} />
        <Reanimated.View style={[styles.line, { ...styles.line5, left: dimensions.width * 0.5 }, line5Style]} />
        <Reanimated.View style={[styles.line, { ...styles.line6, left: dimensions.width * 0.6 }, line6Style]} />
        <Reanimated.View style={[styles.line, { ...styles.line7, left: dimensions.width * 0.7 }, line7Style]} />
        <Reanimated.View style={[styles.line, { ...styles.line8, left: dimensions.width * 0.8 }, line8Style]} />

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
    backgroundColor: '#ffff',
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
    width: 350,
    height: 105,
  },
  // Estilos para las líneas
  line: {
    position: 'absolute',
    width: 30, 
    height: '150%',
    backgroundColor: '#7C3AED',
    opacity: 0.3,
  },
  line1: {
    backgroundColor: '#7C3AED',
  },
  line2: {
    backgroundColor: '#6366F1',
  },
  line3: {
    backgroundColor: '#8B5CF6',
  },
  line4: {
    backgroundColor: '#A855F7',
  },
  line5: {
    backgroundColor: '#7C3AED',
  },
  line6: {
    backgroundColor: '#6366F1',
  },
  line7: {
    backgroundColor: '#8B5CF6',
  },
  line8: {
    backgroundColor: '#A855F7',
  },
});

export default LoaderScreen;