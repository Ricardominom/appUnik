import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/constants/colors';

interface GradientScreenProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  statusBarStyle?: 'light-content' | 'dark-content';
}

export const GradientScreen: React.FC<GradientScreenProps> = ({
  children,
  variant = 'primary',
  statusBarStyle = 'light-content',
}) => {
  const gradientColors = {
    primary: [colors.primary[500], colors.accent[500], colors.primary[700]],
    secondary: [colors.secondary[500], colors.primary[400], colors.accent[500]],
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={statusBarStyle} />
      <LinearGradient
        colors={gradientColors[variant]}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});