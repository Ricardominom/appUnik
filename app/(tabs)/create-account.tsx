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
import { ArrowLeft, Mail, Lock, User, Phone } from 'lucide-react-native';
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

export default function CreateAccountScreen() {
  const router = useRouter();
  const { register, isLoading } = useAuthContext();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
  const { validateEmail, validatePhone, validatePassword, validateRequired, validateMatch } = useFormValidation();
  
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

  const handleCreateAccount = async () => {
    // Reset errors
    setNameError('');
    setEmailError('');
    setPhoneError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Validation
    let hasErrors = false;

    const nameValidation = validateRequired(name, 'El nombre');
    if (nameValidation) {
      setNameError(nameValidation);
      hasErrors = true;
    }

    const emailValidation = validateEmail(email);
    if (emailValidation) {
      setEmailError(emailValidation);
      hasErrors = true;
    }

    const phoneValidation = validatePhone(phone);
    if (phoneValidation) {
      setPhoneError(phoneValidation);
      hasErrors = true;
    }

    const passwordValidation = validatePassword(password);
    if (passwordValidation) {
      setPasswordError(passwordValidation);
      hasErrors = true;
    }

    const confirmPasswordValidation = validateMatch(confirmPassword, password, 'Las contraseñas');
    if (confirmPasswordValidation) {
      setConfirmPasswordError(confirmPasswordValidation);
      hasErrors = true;
    } else if (!confirmPassword.trim()) {
      setConfirmPasswordError('Confirma tu contraseña');
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
    router.push('/landing');
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
              <FormInput
                label="Nombre completo"
                icon={User}
                type="text"
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  if (nameError) setNameError('');
                }}
                placeholder="Tu nombre completo"
                error={nameError}
                autoCapitalize="words"
              />

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
                label="Teléfono"
                icon={Phone}
                type="phone"
                value={phone}
                onChangeText={(text) => {
                  setPhone(text);
                  if (phoneError) setPhoneError('');
                }}
                placeholder="1234567890"
                error={phoneError}
                maxLength={10}
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

              <FormInput
                label="Confirmar contraseña"
                icon={Lock}
                type="password"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  if (confirmPasswordError) setConfirmPasswordError('');
                }}
                placeholder="Confirma tu contraseña"
                error={confirmPasswordError}
              />

              {/* Create Account Button */}
              <View style={styles.buttonContainer}>
                <GradientButton
                  title={isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
                  variant="white"
                  size="large"
                  loading={isLoading}
                  animated={false}
                  onPress={handleCreateAccount}
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
  buttonContainer: {
    marginTop: layout.getResponsiveHeight(5),
  },
});