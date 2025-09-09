import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ArrowLeft, Mail, Lock } from 'lucide-react-native';
import { useAuthContext } from '@/context/AuthContext';
import { spacing, touchTargets } from '@/constants/spacing';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { GradientScreen } from '@/components/layouts/GradientScreen';
import { FormInput } from '@/components/ui/FormInput';
import { GradientButton } from '@/components/ui/GradientButton';
import { useFormValidation } from '@/hooks/useFormValidation';
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

export default function EmailLoginScreen() {
  const router = useRouter();
  const { login, isLoading } = useAuthContext();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const { validateEmail, validatePassword } = useFormValidation();
  
  const fadeInValue = useSharedValue(0);
  const slideUpValue = useSharedValue(50);
  const floatingAnimation = useSharedValue(0);
  const pulseAnimation = useSharedValue(1);
  const rotateAnimation = useSharedValue(0);
  const inputFocusAnimation = useSharedValue(0);
  const buttonPressAnimation = useSharedValue(1);

  useEffect(() => {
    fadeInValue.value = withTiming(1, { duration: 800 });
    slideUpValue.value = withSpring(0, { damping: 12 });
    
    // Floating animation
    floatingAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 2500 }),
        withTiming(0, { duration: 2500 })
      ),
      -1,
      true
    );
    
    // Pulse animation
    pulseAnimation.value = withRepeat(
      withSequence(
        withTiming(1.1, { duration: 1800 }),
        withTiming(0.9, { duration: 1800 })
      ),
      -1,
      true
    );
    
    // Rotation animation
    rotateAnimation.value = withRepeat(
      withTiming(360, { duration: 10000 }),
      -1,
      false
    );
    
    // Input focus animation
    inputFocusAnimation.value = withTiming(1, { duration: 600 });
    
    // Button press animation
    buttonPressAnimation.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1000 }),
        withTiming(1, { duration: 1000 })
      ),
      -1,
      true
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
      [0, -20],
      Extrapolate.CLAMP
    );
    
    return {
      transform: [{ translateY }],
    };
  });
  
  const pulsingStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pulseAnimation.value }],
    };
  });
  
  const rotatingStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotateAnimation.value}deg` }],
    };
  });
  
  const inputAnimStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: inputFocusAnimation.value }],
      opacity: inputFocusAnimation.value,
    };
  });
  
  const buttonAnimStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonPressAnimation.value }],
    };
  });

  const handleLogin = async () => {
    // Navegación directa a Home sin validaciones (temporal)
    router.replace('/Home/home');
  };

  const handleBack = () => {
    router.push('/LandingPage/landing');
  };

  return (
    <GradientScreen variant="primary">
      {/* Animated decorative elements */}
      <Animated.View style={[styles.topDecoration1, floatingStyle]}>
        <View style={styles.decorativeShape1}>
          <LinearGradient
            colors={[colors.secondary[400], colors.accent[300]]}
            style={styles.shapeGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        </View>
      </Animated.View>
      
      <Animated.View style={[styles.topDecoration2, pulsingStyle]}>
        <Animated.View style={[styles.decorativeShape2, rotatingStyle]}>
          <LinearGradient
            colors={[colors.primary[400], colors.secondary[500]]}
            style={styles.shapeGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        </Animated.View>
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
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleBack}
          activeOpacity={0.7}
        >
          <ArrowLeft size={24} color="white" strokeWidth={2} />
        </TouchableOpacity>
        <View style={styles.placeholder} />
        <View style={styles.placeholder} />
      </View>

      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Image 
          source={{ uri: 'https://raw.githubusercontent.com/Nefta11/MiPortafolioNefta/refs/heads/main/SINF.png' }}
          style={styles.mainLogo}
          contentFit="contain"
        />
      </View>

      {/* Main Content */}
      <View style={styles.keyboardView}>
          <Animated.View style={[styles.content, animatedStyle, inputAnimStyle]}>
            {/* Welcome Section */}
            <View style={styles.welcomeSection}>
              <Text style={styles.welcomeText}>Bienvenido de vuelta</Text>
              <Text style={styles.subtitle}>Ingresa tus credenciales para continuar</Text>
            </View>

            {/* Form */}
            <Animated.View style={[styles.form, inputAnimStyle]}>
              <FormInput
                label="Email"
                icon={Mail}
                type="email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (emailError) setEmailError('');
                }}
                placeholder="tu@email.com"
                error={emailError}
              />

              <FormInput
                label="Contraseña"
                icon={Lock}
                type="password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) setPasswordError('');
                }}
                placeholder="Tu contraseña"
                error={passwordError}
              />

              {/* Forgot Password */}
              <TouchableOpacity style={styles.forgotPassword} activeOpacity={0.7}>
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>

              {/* Login Button */}
              <View style={styles.loginButtonContainer}>
                <GradientButton
                  title={isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                  variant="white"
                  size="large"
                  loading={isLoading}
                  animated={false}
                  onPress={handleLogin}
                  disabled={isLoading}
                />
              </View>
            </Animated.View>
          </Animated.View>
      </View>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: layout.horizontalMargin,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  backButton: {
    width: touchTargets.minimum,
    height: touchTargets.minimum,
    borderRadius: touchTargets.minimum / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: layout.isSmallDevice ? 16 : 18,
    color: 'white',
    fontWeight: '600',
  },
  headerLogoImage: {
    width: touchTargets.minimum,
    height: touchTargets.minimum,
  },
  placeholder: {
    width: touchTargets.minimum,
  },
  logoSection: {
    position: 'absolute',
    top: layout.getResponsiveHeight(10),
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  mainLogo: {
    width: layout.isSmallDevice ? 200 : 245,
    height: layout.isSmallDevice ? 200 : 245,
    maxWidth: '85%',
    maxHeight: '85%',
  },
  topDecoration1: {
    position: 'absolute',
    top: layout.getResponsiveHeight(5),
    right: spacing['2xl'],
    width: layout.isSmallDevice ? 50 : 60,
    height: layout.isSmallDevice ? 50 : 60,
    zIndex: 0,
  },
  topDecoration2: {
    position: 'absolute',
    top: layout.getResponsiveHeight(12),
    left: spacing.xl,
    width: layout.isSmallDevice ? 35 : 40,
    height: layout.isSmallDevice ? 35 : 40,
    zIndex: 0,
  },
  topDecoration3: {
    position: 'absolute',
    top: layout.getResponsiveHeight(8),
    right: layout.getResponsiveWidth(15),
    width: layout.isSmallDevice ? 25 : 30,
    height: layout.isSmallDevice ? 25 : 30,
    zIndex: 0,
  },
  decorativeShape1: {
    width: '100%',
    height: '100%',
    borderRadius: spacing.lg,
    overflow: 'hidden',
    transform: [{ rotate: '15deg' }],
  },
  decorativeShape2: {
    width: '100%',
    height: '100%',
    borderRadius: spacing['2xl'],
    overflow: 'hidden',
  },
  decorativeShape3: {
    width: '100%',
    height: '100%',
    borderRadius: spacing.sm,
    overflow: 'hidden',
    transform: [{ rotate: '45deg' }],
  },
  shapeGradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: layout.getResponsiveHeight(25),
    borderTopLeftRadius: spacing['3xl'],
    borderTopRightRadius: spacing['3xl'],
    paddingHorizontal: layout.horizontalMargin,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
    minHeight: layout.getResponsiveHeight(75),
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  welcomeSection: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: layout.isSmallDevice ? 24 : 28,
    color: colors.primary[500],
    fontFamily: typography.fontFamily.black,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: layout.isSmallDevice ? 14 : 16,
    color: '#6B7280',
    fontFamily: typography.fontFamily.regular,
    lineHeight: layout.isSmallDevice ? 20 : 24,
  },
  form: {
    flex: 1,
  },
  forgotPassword: {
    alignSelf: 'center',
    marginTop: spacing.sm,
    minHeight: touchTargets.minimum,
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  forgotPasswordText: {
    fontSize: layout.isSmallDevice ? 12 : 14,
    color: colors.primary[500],
    fontFamily: typography.fontFamily.semibold,
  },
  loginButtonContainer: {
    marginTop: layout.getResponsiveHeight(5),
  },
});