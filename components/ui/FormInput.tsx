import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextInputProps } from 'react-native';
import { Eye, EyeOff, LucideIcon } from 'lucide-react-native';
import { spacing, touchTargets } from '@/constants/spacing';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

interface FormInputProps extends Omit<TextInputProps, 'style'> {
  label: string;
  icon?: LucideIcon;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'phone';
  onChangeText: (text: string) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  icon: Icon,
  error,
  type = 'text',
  secureTextEntry: propSecureTextEntry,
  onChangeText,
  ...textInputProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const isPasswordType = type === 'password';
  const secureTextEntry = isPasswordType ? !showPassword : propSecureTextEntry;
  
  const keyboardType = {
    email: 'email-address' as const,
    phone: 'phone-pad' as const,
    text: 'default' as const,
    password: 'default' as const,
  }[type];

  const autoCapitalize = {
    email: 'none' as const,
    password: 'none' as const,
    text: 'sentences' as const,
    phone: 'none' as const,
  }[type];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputWrapper, error && styles.inputError]}>
        {Icon && (
          <Icon size={20} color="#9CA3AF" strokeWidth={2} />
        )}
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          {...textInputProps}
        />
        {isPasswordType && (
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
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
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
});