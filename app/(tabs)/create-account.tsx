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
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react-native';
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

export default function CreateAccountScreen() {
  const router = useRouter();
  const { register, isLoading } = useAuthContext();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
  const fadeInValue = useSharedValue(0);
  const slideUpValue = useSharedValue(50);
  const floatingAnimation = useSharedValue(0);
  const pulseAnimation = useSharedValue(1);
  const rotateAnimation = useSharedValue(0);
  const waveAnimation = useSharedValue(0);
  const bounceAnimation = useSharedValue(0);
  const inputFocusAnimation = useSharedValue(1);
  const buttonPressAnimation = useSharedValue(1);
  const formSlideAnimation = useSharedValue(0);

  useEffect(() => {
    fadeInValue.value = withTiming(1, { duration: 800 });
    slideUpValue.value = withSpring(0, { damping: 12 });
    
    // Floating animation
    floatingAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 3000 }),
        withTiming(0, { duration: 3000 })
      ),
      -1,
      true
    );
    
    // Pulse animation
    pulseAnimation.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 2000 }),
        withTiming(0.8, { duration: 2000 })
      ),
      -1,
      true
    );
    
    // Rotation animation
    rotateAnimation.value = withRepeat(
      withTiming(360, { duration: 12000 }),
      -1,
      false
    );
    
    // Wave animation
    waveAnimation.value = withRepeat(
      withTiming(360, { duration: 4500 }),
      -1,
      false
    );
    
    // Bounce animation
    bounceAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000 }),
        withTiming(0, { duration: 1000 })
      ),
      -1,
      true
    );
    
    // Button press animation
    buttonPressAnimation.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1200 }),
        withTiming(1, { duration: 1200 })
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
      [0, -25],
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
  
  const waveStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      waveAnimation.value,
      [0, 180, 360],
      [0, 30, 0],
      Extrapolate.CLAMP
    );
    
    const translateY = interpolate(
      waveAnimation.value,
      [0, 90, 180, 270, 360],
      [0, -15, 0, 15, 0],
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
      [1, 1.4, 1],
      Extrapolate.CLAMP
    );
    
    const translateY = interpolate(
      bounceAnimation.value,
      [0, 1],
      [0, -30],
      Extrapolate.CLAMP
    );
    
    return {
      transform: [{ scale }, { translateY }],
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
  
  const formSlideStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: formSlideAnimation.value }],
    };
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleCreateAccount = async () => {
    // Reset errors
    setNameError('');
    setEmailError('');
    setPhoneError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Validation
    let hasErrors = false;

    if (!name.trim()) {
      setNameError('El nombre es requerido');
      hasErrors = true;
    }

    if (!email.trim()) {
      setEmailError('El email es requerido');
      hasErrors = true;
    } else if (!validateEmail(email)) {
      setEmailError('Ingresa un email válido');
      hasErrors = true;
    }

    if (!phone.trim()) {
      setPhoneError('El teléfono es requerido');
      hasErrors = true;
    } else if (!validatePhone(phone)) {
      setPhoneError('Ingresa un teléfono válido (10 dígitos)');
      hasErrors = true;
    }

    if (!password.trim()) {
      setPasswordError('La contraseña es requerida');
      hasErrors = true;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      hasErrors = true;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Confirma tu contraseña');
      hasErrors = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden');
      hasErrors = true;
    }

    if (hasErrors) return;

    // Attempt registration
    const result = await register(name, email, phone, password);
    
    if (result.success) {
      Alert.alert(
        'Cuenta creada',
        'Tu cuenta ha sido creada exitosamente',
        [
          {
            text: 'OK',
            onPress: () => router.replace('/dashboard')
          }
        ]
      );
    } else {
      Alert.alert('Error', result.error || 'Error al crear la cuenta');
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
        
        <Animated.View style={[styles.topDecoration3, waveStyle]}>
          <View style={styles.decorativeShape3}>
            <LinearGradient
              colors={[colors.accent[400], colors.primary[300]]}
              style={styles.shapeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          </View>
        </Animated.View>
        
        <Animated.View style={[styles.topDecoration4, bounceStyle]}>
          <View style={styles.decorativeShape4}>
            <LinearGradient
              colors={[colors.secondary[500], colors.accent[400]]}
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
                <Text style={styles.welcomeText}>Crear cuenta nueva</Text>
                <Text style={styles.subtitle}>Completa los datos para comenzar tu experiencia con UNIK</Text>
              </View>

              {/* Form */}
              <Animated.View style={[styles.form, inputAnimStyle, formSlideStyle]}>
                {/* Name Input */}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Nombre completo</Text>
                  <View style={[styles.inputWrapper, nameError && styles.inputError]}>
                    <User size={20} color="#9CA3AF" strokeWidth={2} />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Tu nombre completo"
                      placeholderTextColor="#9CA3AF"
                      value={name}
                      onChangeText={(text) => {
                        setName(text);
                        if (nameError) setNameError('');
                      }}
                      autoCapitalize="words"
                      autoCorrect={false}
                    />
                  </View>
                  {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                </View>

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

                {/* Phone Input */}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Teléfono</Text>
                  <View style={[styles.inputWrapper, phoneError && styles.inputError]}>
                    <Phone size={20} color="#9CA3AF" strokeWidth={2} />
                    <TextInput
                      style={styles.textInput}
                      placeholder="1234567890"
                      placeholderTextColor="#9CA3AF"
                      value={phone}
                      onChangeText={(text) => {
                        setPhone(text);
                        if (phoneError) setPhoneError('');
                      }}
                      keyboardType="phone-pad"
                      maxLength={10}
                    />
                  </View>
                  {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
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

                {/* Confirm Password Input */}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Confirmar contraseña</Text>
                  <View style={[styles.inputWrapper, confirmPasswordError && styles.inputError]}>
                    <Lock size={20} color="#9CA3AF" strokeWidth={2} />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Confirma tu contraseña"
                      placeholderTextColor="#9CA3AF"
                      value={confirmPassword}
                      onChangeText={(text) => {
                        setConfirmPassword(text);
                        if (confirmPasswordError) setConfirmPasswordError('');
                      }}
                      secureTextEntry={!showConfirmPassword}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    <TouchableOpacity
                      onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={styles.eyeButton}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} color="#9CA3AF" strokeWidth={2} />
                      ) : (
                        <Eye size={20} color="#9CA3AF" strokeWidth={2} />
                      )}
                    </TouchableOpacity>
                  </View>
                  {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
                </View>

                {/* Create Account Button */}
                <Animated.View style={[buttonAnimStyle]}>
                  <TouchableOpacity
                    style={[styles.createButton, isLoading && styles.createButtonDisabled]}
                    onPress={handleCreateAccount}
                    disabled={isLoading}
                    activeOpacity={0.8}
                  >
                  <LinearGradient
                    colors={[colors.secondary[100], '#FFFFFF', colors.accent[50]]}
                    style={styles.buttonGradient}
                  >
                    <Text style={styles.createButtonText}>
                      {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
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
    left: layout.getResponsiveWidth(25),
    width: layout.isSmallDevice ? 25 : 30,
    height: layout.isSmallDevice ? 25 : 30,
    zIndex: 0,
  },
  topDecoration4: {
    position: 'absolute',
    top: layout.getResponsiveHeight(15),
    right: layout.getResponsiveWidth(10),
    width: layout.isSmallDevice ? 20 : 25,
    height: layout.isSmallDevice ? 20 : 25,
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
  decorativeShape4: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    overflow: 'hidden',
  },
  shapeGradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: layout.horizontalMargin,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
    zIndex: 1,
  },
  backButton: {
    width: touchTargets.minimum,
    height: touchTargets.minimum,
    borderRadius: touchTargets.minimum / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLogoImage: {
    width: touchTargets.minimum,
    height: touchTargets.minimum,
  },
  placeholder: {
    width: touchTargets.minimum,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    marginTop: spacing.xs,
    borderTopLeftRadius: spacing['3xl'],
    borderTopRightRadius: spacing['3xl'],
    paddingHorizontal: layout.horizontalMargin,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    minHeight: layout.getResponsiveHeight(90),
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  welcomeSection: {
    marginBottom: spacing.lg,
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
    marginBottom: spacing.md,
  },
  inputLabel: {
    fontSize: layout.isSmallDevice ? 13 : 15,
    color: '#374151',
    fontFamily: typography.fontFamily.semibold,
    marginBottom: spacing.xs,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderWidth: 2,
    borderColor: colors.primary[200],
    minHeight: touchTargets.comfortable + 8,
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
    fontSize: layout.isSmallDevice ? 15 : 16,
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
  createButton: {
    height: touchTargets.large + 8,
    borderRadius: spacing.xl,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: colors.primary[500],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  createButtonDisabled: {
    opacity: 0.7,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: layout.isSmallDevice ? 17 : 19,
    fontFamily: typography.fontFamily.black,
    color: colors.primary[500],
    letterSpacing: 0.5,
  },
});