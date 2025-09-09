import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { spacing, touchTargets } from '@/constants/spacing';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { Shield, Smartphone, Zap } from 'lucide-react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withRepeat,
  withSequence,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function LandingScreen() {
  const router = useRouter();
  
  // Animaciones
  const ribbonAnimation = useSharedValue(0);
  const fadeInValue = useSharedValue(0);
  const slideUpValue = useSharedValue(100);

  useEffect(() => {
    // Animación del ribbon
    ribbonAnimation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 3000 }),
        withTiming(0, { duration: 3000 })
      ),
      -1,
      true
    );

    // Animaciones de entrada
    fadeInValue.value = withTiming(1, { duration: 1000 });
    slideUpValue.value = withTiming(0, { duration: 800 });
  }, []);

  const ribbonStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      ribbonAnimation.value,
      [0, 1],
      [-200, height + 200],
      Extrapolate.CLAMP
    );
    
    return {
      transform: [{ translateY }],
    };
  });

  const contentStyle = useAnimatedStyle(() => ({
    opacity: fadeInValue.value,
    transform: [{ translateY: slideUpValue.value }],
  }));

  const handleGetStarted = () => {
    router.push('/landing');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={[colors.primary[500], colors.accent[500], colors.primary[700]]}
        style={styles.gradient}
      >
        {/* Animated Ribbons */}
        <Animated.View style={[styles.ribbon, ribbonStyle]}>
          <LinearGradient
            colors={[colors.primary[400] + '90', colors.secondary[500] + '90', colors.accent[400] + '90']}
            style={styles.ribbonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        </Animated.View>

        <Animated.View style={[styles.ribbon2, ribbonStyle]}>
          <LinearGradient
            colors={[colors.secondary[400] + '80', colors.primary[400] + '80', colors.accent[400] + '80']}
            style={styles.ribbonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        </Animated.View>

        {/* Safe Area Content */}
        <SafeAreaView style={styles.safeArea}>
          <Animated.View style={[styles.content, contentStyle]}>
            {/* Logo Section */}
            <View style={styles.logoSection}>
              <Image 
                source={{ uri: 'https://raw.githubusercontent.com/Nefta11/MiPortafolioNefta/refs/heads/main/SINF.png' }}
                style={styles.logoImage}
                contentFit="contain"
              />
              <Text style={styles.tagline}>Tu seguro, tu tranquilidad</Text>
            </View>

            {/* Features Section */}
            <View style={styles.featuresContainer}>
              <View style={styles.feature}>
                <View style={styles.featureIcon}>
                  <Shield size={26} color={colors.primary[500]} strokeWidth={3} />
                </View>
                <Text style={styles.featureText}>Protección completa</Text>
              </View>
              
              <View style={styles.feature}>
                <View style={styles.featureIcon}>
                  <Smartphone size={26} color={colors.primary[500]} strokeWidth={3} />
                </View>
                <Text style={styles.featureText}>Gestión digital</Text>
              </View>
              
              <View style={styles.feature}>
                <View style={styles.featureIcon}>
                  <Zap size={26} color={colors.primary[500]} strokeWidth={3} />
                </View>
                <Text style={styles.featureText}>Respuesta rápida</Text>
              </View>
            </View>

            {/* CTA Button */}
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={handleGetStarted}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#FFFFFF', '#F8F9FA']}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Comenzar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>

        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    position: 'relative',
  },
  ribbon: {
    position: 'absolute',
    left: layout.getResponsiveWidth(-15),
    width: layout.getResponsiveWidth(35),
    height: height * 1.5,
    transform: [{ rotate: '15deg' }],
    zIndex: 0,
  },
  ribbon2: {
    position: 'absolute',
    right: layout.getResponsiveWidth(-10),
    width: layout.getResponsiveWidth(25),
    height: height * 1.2,
    transform: [{ rotate: '-10deg' }],
    zIndex: 0,
  },
  ribbonGradient: {
    flex: 1,
    borderRadius: spacing.xl,
  },
  content: {
    flex: 1,
    paddingHorizontal: layout.horizontalMargin,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: layout.getResponsiveHeight(15),
    paddingBottom: layout.getResponsiveHeight(12),
    zIndex: 2,
  },
  logoSection: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: -spacing.lg,
  },
  logoImage: {
    width: layout.isSmallDevice ? 218 : 266,
    height: layout.isSmallDevice ? 218 : 266,
    marginBottom: 4,
  },
  tagline: {
    fontSize: layout.isSmallDevice ? 14 : 16,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: typography.fontFamily.regular,
    textAlign: 'center',
    paddingHorizontal: spacing.md,
  },
  featuresContainer: {
    width: '100%',
    paddingHorizontal: spacing.md,
    maxWidth: layout.maxContentWidth,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  featureIcon: {
    width: touchTargets.comfortable,
    height: touchTargets.comfortable,
    borderRadius: touchTargets.comfortable / 2,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.lg,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  featureText: {
    fontSize: layout.isSmallDevice ? 16 : 18,
    color: 'white',
    fontFamily: typography.fontFamily.semibold,
    flex: 1,
  },
  ctaButton: {
    width: layout.getResponsiveWidth(80),
    maxWidth: 320,
    height: touchTargets.large,
    borderRadius: touchTargets.large / 2,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginBottom: spacing.lg,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: layout.isSmallDevice ? 16 : 18,
    fontFamily: typography.fontFamily.semibold,
    color: colors.primary[500],
  },
});