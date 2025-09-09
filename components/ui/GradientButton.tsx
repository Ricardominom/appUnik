import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { spacing, touchTargets } from '@/constants/spacing';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

interface GradientButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  animated?: boolean;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  variant = 'primary',
  size = 'large',
  loading = false,
  animated = false,
  disabled,
  ...touchableProps
}) => {
  const buttonPressAnimation = useSharedValue(1);

  React.useEffect(() => {
    if (animated && !loading && !disabled) {
      buttonPressAnimation.value = withRepeat(
        withSequence(
          withTiming(1.05, { duration: 1000 }),
          withTiming(1, { duration: 1000 })
        ),
        -1,
        true
      );
    }
  }, [animated, loading, disabled]);

  const buttonAnimStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonPressAnimation.value }],
    };
  });

  const gradientColors = {
    primary: [colors.primary[500], colors.primary[600], colors.primary[700]],
    secondary: [colors.secondary[400], colors.secondary[500], colors.secondary[600]],
    white: [colors.secondary[100], '#FFFFFF', colors.accent[50]],
  }[variant];

  const textColor = {
    primary: 'white',
    secondary: 'white', 
    white: colors.primary[500],
  }[variant];

  const buttonHeight = {
    small: touchTargets.comfortable,
    medium: touchTargets.large,
    large: touchTargets.large + 8,
  }[size];

  const fontSize = {
    small: layout.isSmallDevice ? 14 : 16,
    medium: layout.isSmallDevice ? 16 : 18,
    large: layout.isSmallDevice ? 17 : 19,
  }[size];

  const isDisabled = disabled || loading;

  const AnimatedTouchable = animated ? Animated.createAnimatedComponent(TouchableOpacity) : TouchableOpacity;
  const animatedStyles = animated ? [styles.button, buttonAnimStyle] : styles.button;

  return (
    <AnimatedTouchable
      style={[
        animatedStyles,
        { height: buttonHeight },
        isDisabled && styles.buttonDisabled,
      ]}
      disabled={isDisabled}
      activeOpacity={0.8}
      {...touchableProps}
    >
      <LinearGradient
        colors={gradientColors}
        style={styles.gradient}
      >
        <Text style={[styles.text, { color: textColor, fontSize }]}>
          {loading ? 'Cargando...' : title}
        </Text>
      </LinearGradient>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: spacing.xl,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonDisabled: {
    opacity: 0.7,
    elevation: 2,
    shadowOpacity: 0.1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  text: {
    fontFamily: typography.fontFamily.semibold,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});