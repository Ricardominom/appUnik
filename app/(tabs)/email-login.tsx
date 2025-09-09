import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, Eye, EyeOff, Mail, Lock } from 'lucide-react-native';
import { useAuthContext } from '@/context/AuthContext';
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

export default function EmailLoginScreen() {
  const router = useRouter();
  const { login, isLoading } = useAuthContext();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Validation
    let hasErrors = false;

    if (!email.trim()) {
      setEmailError('El email es requerido');
      hasErrors = true;
    } else if (!validateEmail(email)) {
      setEmailError('Ingresa un email válido');
      hasErrors = true;
    }

    if (!password.trim()) {
      setPasswordError('La contraseña es requerida');
      hasErrors = true;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      hasErrors = true;
    }

    if (hasErrors) return;

    // Attempt login
    const result = await login(email, password);
    
    if (result.success) {
      // Navigate to main app or dashboard
      router.replace('/dashboard');
    } else {
      Alert.alert('Error', result.error || 'Error al iniciar sesión');
    }
  };

  const handleBack = () => {
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={[colors.primary[500], colors.accent[500], colors.primary[700]]}
        style={styles.gradient}
      >
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
          <Image 
            source={{ uri: 'https://raw.githubusercontent.com/Nefta11/MiPortafolioNefta/refs/heads/main/SINF.png' }}
            style={styles.headerLogoImage}
            contentFit="contain"
          />
          <View style={styles.placeholder} />
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
                {/* Email Input */}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <View style={[styles.inputWrapper, emailError && styles.inputError]}>
                    <Mail size={20} color="#9CA3AF" strokeWidth={2} />
                    <TextInput
                      style={styles.textInput}
                      placeholder="tu@email.com"
                      placeholderTextColor="#9CA3AF"
                      value={email}
                      onChangeText={(text) => {
                        setEmail(text);
                        if (emailError) setEmailError('');
                      }}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                  {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Contraseña</Text>
                  <View style={[styles.inputWrapper, passwordError && styles.inputError]}>
                    <Lock size={20} color="#9CA3AF" strokeWidth={2} />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Tu contraseña"
                      placeholderTextColor="#9CA3AF"
                      value={password}
                      onChangeText={(text) => {
                        setPassword(text);
                        if (passwordError) setPasswordError('');
                      }}
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      style={styles.eyeButton}
                    >
                      {showPassword ? (
                        <EyeOff size={20} color="#9CA3AF" strokeWidth={2} />
                      ) : (
                        <Eye size={20} color="#9CA3AF" strokeWidth={2} />
                      )}
                    </TouchableOpacity>
                  </View>
                  {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                </View>

                {/* Forgot Password */}
                <TouchableOpacity style={styles.forgotPassword} activeOpacity={0.7}>
                  <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <Animated.View style={[buttonAnimStyle]}>
                  <TouchableOpacity
                    style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
                    onPress={handleLogin}
                    disabled={isLoading}
                    activeOpacity={0.8}
                  >
                  <LinearGradient
                    colors={[colors.secondary[100], '#FFFFFF', colors.accent[50]]}
                    style={styles.buttonGradient}
                  >
                    <Text style={styles.loginButtonText}>
                      {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </Text>
                  </LinearGradient>
                  </TouchableOpacity>
                </Animated.View>
              </Animated.View>
            </Animated.View>
        </View>

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
  },
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
    marginTop: spacing.sm,
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
  inputContainer: {
    marginBottom: spacing.lg,
  },
  inputLabel: {
    fontSize: layout.isSmallDevice ? 14 : 16,
    color: '#374151',
    fontFamily: typography.fontFamily.semibold,
    marginBottom: spacing.sm,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 2,
    borderColor: colors.primary[200],
    minHeight: touchTargets.large + 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  inputError: {
    borderColor: colors.error,
    backgroundColor: '#FEF2F2',
    elevation: 3,
  },
  textInput: {
    flex: 1,
    fontSize: layout.isSmallDevice ? 14 : 16,
    color: '#374151',
    fontFamily: typography.fontFamily.regular,
    marginLeft: spacing.sm,
  },
  eyeButton: {
    padding: spacing.xs,
    minWidth: touchTargets.minimum,
    minHeight: touchTargets.minimum,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: layout.isSmallDevice ? 12 : 14,
    color: colors.error,
    marginTop: spacing.xs,
    marginLeft: spacing.xs,
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
  loginButton: {
    height: touchTargets.large + 8,
    borderRadius: spacing.xl,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: colors.primary[500],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: layout.isSmallDevice ? 17 : 19,
    fontFamily: typography.fontFamily.black,
    color: colors.primary[500],
    letterSpacing: 0.5,
  },
});