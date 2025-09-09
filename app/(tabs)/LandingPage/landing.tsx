import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LogIn, UserPlus, Phone, MapPin, CircleHelp as HelpCircle } from 'lucide-react-native';
import { spacing, touchTargets } from '@/constants/spacing';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSpring,
  withRepeat,
  withSequence,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<'biometric' | 'passcode' | null>(null);
  
  const fadeInValue = useSharedValue(0);
  const slideUpValue = useSharedValue(50);
  const floatingAnimation = useSharedValue(0);
  const rotateAnimation = useSharedValue(0);
  const pulseAnimation = useSharedValue(1);
  const waveAnimation = useSharedValue(0);
  const bounceAnimation = useSharedValue(0);
  const scaleAnimation = useSharedValue(0.8);
  const shimmerAnimation = useSharedValue(0);
  const orbitalAnimation = useSharedValue(0);
  const morphAnimation = useSharedValue(0);
  const spiralAnimation = useSharedValue(0);

  useEffect(() => {
    fadeInValue.value = withTiming(1, { duration: 800 });
    slideUpValue.value = withSpring(0, { damping: 12 });
    
    // Floating animation
    floatingAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 2000 }),
        withTiming(0, { duration: 2000 })
      ),
      -1,
      true
    );
    
    // Rotation animation
    rotateAnimation.value = withRepeat(
      withTiming(360, { duration: 8000 }),
      -1,
      false
    );
    
    // Pulse animation
    pulseAnimation.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 1200 }),
        withTiming(0.9, { duration: 1200 })
      ),
      -1,
      true
    );
    
    // Wave animation
    waveAnimation.value = withRepeat(
      withTiming(360, { duration: 4000 }),
      -1,
      false
    );
    
    // Bounce animation
    bounceAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 800 }),
        withTiming(0, { duration: 800 })
      ),
      -1,
      true
    );
    
    // Scale animation
    scaleAnimation.value = withTiming(1, { duration: 1000 });
    
    // Shimmer animation
    shimmerAnimation.value = withRepeat(
      withTiming(1, { duration: 2500 }),
      -1,
      false
    );
    
    // Orbital animation
    orbitalAnimation.value = withRepeat(
      withTiming(360, { duration: 6000 }),
      -1,
      false
    );
    
    // Morph animation
    morphAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 3000 }),
        withTiming(0, { duration: 3000 })
      ),
      -1,
      true
    );
    
    // Spiral animation
    spiralAnimation.value = withRepeat(
      withTiming(1, { duration: 5000 }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeInValue.value,
    transform: [{ translateY: slideUpValue.value }],
  }));
  
  const floatingStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      floatingAnimation.value,
      [0, 1],
      [0, -15],
      Extrapolate.CLAMP
    );
    
    return {
      transform: [{ translateY }],
    };
  });
  
  const rotatingStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotateAnimation.value}deg` }],
    };
  });
  
  const pulsingStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pulseAnimation.value }],
    };
  });
  
  const waveStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      waveAnimation.value,
      [0, 180, 360],
      [0, 20, 0],
      Extrapolate.CLAMP
    );
    
    const translateY = interpolate(
      waveAnimation.value,
      [0, 90, 180, 270, 360],
      [0, -10, 0, 10, 0],
      Extrapolate.CLAMP
    );
    
    return {
      transform: [
        { translateX },
        { translateY },
        { rotate: `${waveAnimation.value}deg` }
      ],
    };
  });
  
  const bounceStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      bounceAnimation.value,
      [0, 0.5, 1],
      [1, 1.3, 1],
      Extrapolate.CLAMP
    );
    
    const translateY = interpolate(
      bounceAnimation.value,
      [0, 1],
      [0, -25],
      Extrapolate.CLAMP
    );
    
    return {
      transform: [{ scale }, { translateY }],
    };
  });
  
  const cardScaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleAnimation.value }],
    };
  });
  
  const shimmerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      shimmerAnimation.value,
      [0, 0.5, 1],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    );
    
    return {
      opacity,
    };
  });
  
  const orbitalStyle = useAnimatedStyle(() => {
    const radius = 40;
    const centerX = 0;
    const centerY = 0;
    
    const x = centerX + radius * Math.cos((orbitalAnimation.value * Math.PI) / 180);
    const y = centerY + radius * Math.sin((orbitalAnimation.value * Math.PI) / 180);
    
    return {
      transform: [
        { translateX: x },
        { translateY: y },
        { rotate: `${orbitalAnimation.value}deg` }
      ],
    };
  });
  
  const morphStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      morphAnimation.value,
      [0, 0.5, 1],
      [1, 2, 1],
      Extrapolate.CLAMP
    );
    
    const skewX = interpolate(
      morphAnimation.value,
      [0, 0.5, 1],
      [0, 15, 0],
      Extrapolate.CLAMP
    );
    
    return {
      transform: [
        { scale },
        { skewX: `${skewX}deg` },
        { rotate: `${morphAnimation.value * 180}deg` }
      ],
    };
  });
  
  const spiralStyle = useAnimatedStyle(() => {
    const spiralRadius = interpolate(
      spiralAnimation.value,
      [0, 1],
      [10, 60],
      Extrapolate.CLAMP
    );
    
    const angle = spiralAnimation.value * 720; // 2 full rotations
    const x = spiralRadius * Math.cos((angle * Math.PI) / 180);
    const y = spiralRadius * Math.sin((angle * Math.PI) / 180);
    
    return {
      transform: [
        { translateX: x },
        { translateY: y },
        { scale: interpolate(spiralAnimation.value, [0, 1], [0.3, 1], Extrapolate.CLAMP) }
      ],
    };
  });

  const handleBiometricLogin = () => {
    setSelectedMethod('biometric');
    // Navegar a la pantalla de iniciar sesión
    router.push('/Auth/email-login');
  };

  const handlePasscodeLogin = () => {
    setSelectedMethod('passcode');
    // Navegar a la pantalla de crear cuenta
    router.push('/Auth/create-account');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={[colors.primary[500], colors.accent[500], colors.primary[700]]}
        style={styles.gradient}
      >
        {/* Decorative top elements with animations */}
        <Animated.View style={[styles.topDecoration, floatingStyle]}>
          <Animated.View style={[styles.decorativeShape, rotatingStyle]}>
            <LinearGradient
              colors={[colors.secondary[400], colors.accent[300]]}
              style={styles.shapeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </Animated.View>
        </Animated.View>
        
        <Animated.View style={[styles.topDecoration2, pulsingStyle]}>
          <View style={styles.decorativeShape2}>
            <LinearGradient
              colors={[colors.primary[400], colors.secondary[500]]}
              style={styles.shapeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </View>
        </Animated.View>
        
        <Animated.View style={[styles.topDecoration3, floatingStyle]}>
          <View style={styles.decorativeShape3}>
            <LinearGradient
              colors={[colors.accent[400], colors.primary[300]]}
              style={styles.shapeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </View>
        </Animated.View>
        
        <Animated.View style={[styles.topDecoration4, waveStyle]}>
          <Animated.View style={[styles.decorativeShape4, shimmerStyle]}>
            <LinearGradient
              colors={[colors.secondary[300], colors.accent[500]]}
              style={styles.shapeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </Animated.View>
        </Animated.View>
        
        <Animated.View style={[styles.topDecoration5, bounceStyle]}>
          <View style={styles.decorativeShape5}>
            <LinearGradient
              colors={[colors.primary[500], colors.secondary[400]]}
              style={styles.shapeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </View>
        </Animated.View>
        
        <Animated.View style={[styles.topDecoration6, orbitalStyle]}>
          <View style={styles.decorativeShape6}>
            <LinearGradient
              colors={[colors.accent[300], colors.primary[400]]}
              style={styles.shapeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </View>
        </Animated.View>
        
        <Animated.View style={[styles.topDecoration7, morphStyle]}>
          <View style={styles.decorativeShape7}>
            <LinearGradient
              colors={[colors.secondary[500], colors.accent[400]]}
              style={styles.shapeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </View>
        </Animated.View>
        
        <Animated.View style={[styles.topDecoration8, spiralStyle]}>
          <View style={styles.decorativeShape8}>
            <LinearGradient
              colors={[colors.primary[600], colors.secondary[300]]}
              style={styles.shapeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </View>
        </Animated.View>

        {/* Main Content */}
        <Animated.View style={[styles.content, animatedStyle]}>
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Accede a tu cuenta</Text>
            <Text style={styles.userName}>UNIK</Text>
          </View>

          {/* Login Methods */}
          <Animated.View style={[styles.loginMethods, cardScaleStyle]}>
            <TouchableOpacity
              style={[
                styles.methodButton,
                selectedMethod === 'biometric' && styles.selectedMethod
              ]}
              onPress={handleBiometricLogin}
              activeOpacity={0.8}
            >
              <View style={styles.methodIcon}>
                <LogIn size={38} color={colors.primary[500]} strokeWidth={3} />
              </View>
              <Text style={styles.methodLabelLarge}>Iniciar sesión</Text>
              <Text style={styles.methodNameSmall}>Ya tengo cuenta</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.methodButton,
                selectedMethod === 'passcode' && styles.selectedMethod
              ]}
              onPress={handlePasscodeLogin}
              activeOpacity={0.8}
            >
              <View style={styles.methodIcon}>
                <UserPlus size={38} color={colors.secondary[500]} strokeWidth={3} />
              </View>
              <Text style={styles.methodLabelLarge}>Crear cuenta</Text>
              <Text style={styles.methodNameSmall}>Soy nuevo usuario</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Contact Section */}
          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>Contáctanos</Text>
            <View style={styles.contactMethods}>
              <TouchableOpacity style={styles.contactButton} activeOpacity={0.7}>
                <Phone size={20} color={colors.primary[500]} strokeWidth={2} />
                <Text style={styles.contactText}>Llamar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.contactButton} activeOpacity={0.7}>
                <MapPin size={20} color={colors.primary[500]} strokeWidth={2} />
                <Text style={styles.contactText}>Ubicación</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.contactButton} activeOpacity={0.7}>
                <HelpCircle size={20} color={colors.primary[500]} strokeWidth={2} />
                <Text style={styles.contactText}>Ayuda</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    position: 'relative',
  },
  topDecoration: {
    position: 'absolute',
    top: layout.getResponsiveHeight(8),
    right: spacing['2xl'],
    width: layout.isSmallDevice ? 60 : 80,
    height: layout.isSmallDevice ? 60 : 80,
  },
  topDecoration2: {
    position: 'absolute',
    top: layout.getResponsiveHeight(15),
    left: spacing.xl,
    width: layout.isSmallDevice ? 40 : 50,
    height: layout.isSmallDevice ? 40 : 50,
  },
  topDecoration3: {
    position: 'absolute',
    top: layout.getResponsiveHeight(25),
    right: layout.getResponsiveWidth(20),
    width: layout.isSmallDevice ? 30 : 35,
    height: layout.isSmallDevice ? 30 : 35,
  },
  topDecoration4: {
    position: 'absolute',
    top: layout.getResponsiveHeight(5),
    left: layout.getResponsiveWidth(10),
    width: layout.isSmallDevice ? 45 : 55,
    height: layout.isSmallDevice ? 45 : 55,
  },
  topDecoration5: {
    position: 'absolute',
    top: layout.getResponsiveHeight(35),
    right: layout.getResponsiveWidth(5),
    width: layout.isSmallDevice ? 25 : 30,
    height: layout.isSmallDevice ? 25 : 30,
  },
  topDecoration6: {
    position: 'absolute',
    top: layout.getResponsiveHeight(12),
    left: layout.getResponsiveWidth(30),
    width: layout.isSmallDevice ? 20 : 25,
    height: layout.isSmallDevice ? 20 : 25,
  },
  topDecoration7: {
    position: 'absolute',
    top: layout.getResponsiveHeight(18),
    right: layout.getResponsiveWidth(40),
    width: layout.isSmallDevice ? 35 : 40,
    height: layout.isSmallDevice ? 35 : 40,
  },
  topDecoration8: {
    position: 'absolute',
    top: layout.getResponsiveHeight(30),
    left: layout.getResponsiveWidth(15),
    width: layout.isSmallDevice ? 15 : 18,
    height: layout.isSmallDevice ? 15 : 18,
  },
  decorativeShape: {
    width: '100%',
    height: '100%',
    borderRadius: spacing.lg,
    overflow: 'hidden',
  },
  decorativeShape2: {
    width: '100%',
    height: '100%',
    borderRadius: spacing['2xl'],
    overflow: 'hidden',
    transform: [{ rotate: '45deg' }],
  },
  decorativeShape3: {
    width: '100%',
    height: '100%',
    borderRadius: spacing.sm,
    overflow: 'hidden',
    transform: [{ rotate: '30deg' }],
  },
  decorativeShape4: {
    width: '100%',
    height: '100%',
    borderRadius: spacing['3xl'],
    overflow: 'hidden',
  },
  decorativeShape5: {
    width: '100%',
    height: '100%',
    borderRadius: spacing.xs,
    overflow: 'hidden',
    transform: [{ rotate: '60deg' }],
  },
  decorativeShape6: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    overflow: 'hidden',
  },
  decorativeShape7: {
    width: '100%',
    height: '100%',
    borderRadius: spacing.md,
    overflow: 'hidden',
  },
  decorativeShape8: {
    width: '100%',
    height: '100%',
    borderRadius: 3,
    overflow: 'hidden',
    transform: [{ rotate: '45deg' }],
  },
  shapeGradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: layout.horizontalMargin,
    paddingTop: layout.getResponsiveHeight(8),
    backgroundColor: 'white',
    marginTop: layout.getResponsiveHeight(25),
    borderTopLeftRadius: spacing['2xl'],
    borderTopRightRadius: spacing['2xl'],
  },
  welcomeSection: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: layout.isSmallDevice ? 24 : 30,
    color: '#333',
    marginBottom: spacing.xs,
    fontFamily: typography.fontFamily.regular,
    textAlign: 'center',
  },
  userName: {
    fontSize: layout.isSmallDevice ? 30 : 38,
    color: colors.primary[500],
    fontFamily: typography.fontFamily.black,
    textAlign: 'center',
    letterSpacing: 1,
  },
  loginMethods: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
    marginTop: spacing.sm,
  },
  methodButton: {
    flex: 1,
    backgroundColor: colors.primary[500],
    borderRadius: spacing.lg,
    padding: spacing['2xl'],
    alignItems: 'center',
    minHeight: layout.isSmallDevice ? 180 : 200,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  selectedMethod: {
    backgroundColor: colors.primary[600],
    transform: [{ scale: 0.98 }],
  },
  methodIcon: {
    width: touchTargets.large,
    height: touchTargets.large,
    borderRadius: spacing.xl,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
    elevation: 8,
    shadowColor: colors.primary[500],
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  methodLabel: {
    fontSize: layout.isSmallDevice ? 14 : 16,
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: spacing.sm,
    fontFamily: typography.fontFamily.regular,
    textAlign: 'center',
  },
  methodName: {
    fontSize: layout.isSmallDevice ? 18 : 22,
    color: 'white',
    fontFamily: typography.fontFamily.black,
    textAlign: 'center',
  },
  methodLabelLarge: {
    fontSize: layout.isSmallDevice ? 18 : 22,
    color: 'white',
    marginBottom: spacing.xs,
    fontFamily: typography.fontFamily.black,
    textAlign: 'center',
  },
  methodNameSmall: {
    fontSize: layout.isSmallDevice ? 12 : 14,
    color: 'rgba(255, 255, 255, 0.85)',
    fontFamily: typography.fontFamily.regular,
    textAlign: 'center',
  },
  contactSection: {
    marginTop: spacing.sm,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: spacing.lg,
  },
  contactTitle: {
    fontSize: layout.isSmallDevice ? 14 : 16,
    color: '#333',
    marginBottom: spacing.md,
    fontFamily: typography.fontFamily.semibold,
  },
  contactMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.xs,
  },
  contactButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    backgroundColor: '#F8F9FA',
    borderRadius: spacing.sm,
    minHeight: touchTargets.large,
    justifyContent: 'center',
  },
  contactText: {
    fontSize: layout.isSmallDevice ? 10 : 12,
    color: colors.primary[500],
    marginTop: spacing.xs,
    fontFamily: typography.fontFamily.regular,
    textAlign: 'center',
  },
});